export const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const splitCamelCase = (text) => {
  return text.replace(/([a-z])([A-Z])/g, '$1 $2');
}
