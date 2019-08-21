export function getId(url: string): string {
  return url.split('/').filter(String).pop();
}