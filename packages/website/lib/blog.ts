export const getReadingTime = (contentRaw: unknown): number =>
  Math.ceil(JSON.stringify(contentRaw).length / 4000);
