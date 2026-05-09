import { ChatPanel } from "@/app/chat/chat-panel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat",
};

export default function ChatPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted/20">
      <ChatPanel />
    </div>
  );
}
