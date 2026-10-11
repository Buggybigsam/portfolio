export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Prepends the deployment basePath (e.g. '/portfolio') to root-relative asset URLs.
 * Keeps external URLs (http/https/data) untouched.
 */
export function withBasePath(path: string): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
