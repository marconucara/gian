export const formatISODate = (ISODate: string) => {
  const date = new Date(ISODate);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
