"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { SendHorizontal } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

async function mockAssistantReply(prompt: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 450));
  const trimmed = prompt.trim();
  const template = `Thanks for sharing "${trimmed}". This is a mock reply — once your backend is connected I'll blend live listings with your preferences and budget.`;
  return template;
}

export function ChatPanel() {
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi — I'm your HNP AI concierge (demo mode). Tell me what kind of trip you're imagining.",
    },
  ]);

  const mutation = useMutation({
    mutationFn: async (text: string) => mockAssistantReply(text),
    onSuccess: (reply, text) => {
      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "user",
        content: text,
      };
      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: reply,
      };
      setMessages((prev) => [...prev, userMessage, assistantMessage]);
    },
  });

  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, mutation.isPending]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const field = form.elements.namedItem("message") as HTMLInputElement;
    const text = field.value.trim();
    if (!text || mutation.isPending) return;
    field.value = "";
    mutation.mutate(text);
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-4 py-6">
      <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
        <h2 className="text-lg font-semibold">Trip concierge</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Describe where you want to go, your vibe, and budget — mock replies
          stand in until the LLM backend ships.
        </p>
      </div>

      <div className="flex min-h-[420px] flex-1 flex-col rounded-xl border border-border bg-card shadow-sm">
        <ScrollArea className="max-h-[55vh] min-h-[320px] flex-1 px-4 py-4">
          <div className="flex flex-col gap-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed",
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "mr-auto bg-muted text-foreground",
                )}
              >
                {message.content}
              </div>
            ))}
            {mutation.isPending ? (
              <div className="mr-auto rounded-2xl bg-muted px-4 py-2 text-sm text-muted-foreground">
                Drafting a suggestion…
              </div>
            ) : null}
            <div ref={scrollAnchorRef} />
          </div>
        </ScrollArea>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-border px-3 py-3"
        >
          <Input
            name="message"
            placeholder="Ask about stays, neighborhoods, or splitting costs…"
            autoComplete="off"
            disabled={mutation.isPending}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={mutation.isPending}>
            <SendHorizontal className="size-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
