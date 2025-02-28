/**
 * Formats a given date string or Date object to DD/MM/YYYY HH:MM:SS format.
 * @param {string | Date} value - The date value to format.
 * @returns {string} The formatted date string in DD/MM/YYYY HH:MM:SS format.
 */
export const formatLogTimeDate = (value: string) => {
  if (!value) return "";
  const date = new Date(value);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};
