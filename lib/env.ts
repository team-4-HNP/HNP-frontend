export function getPublicAppUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (!raw) return undefined;
  return raw.replace(/\/+$/, "");
}
