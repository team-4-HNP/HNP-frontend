export type ApiClientConfig = {
  baseUrl: string;
};

export async function apiFetch<T>(
  path: string,
  init?: RequestInit & { config?: ApiClientConfig },
): Promise<T> {
  void path;
  void init;
  throw new Error("apiFetch is not wired yet — connect your backend API.");
}
