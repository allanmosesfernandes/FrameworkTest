/* eslint-disable linebreak-style */
function cardRibbonColors(category) {
  const cardcategory = category.toLowerCase();
  switch (cardcategory) {
    case "events":
      return "#22A0E8";
    case "resources":
      return "#1EBC7A";
    case "news":
      return "#D38325";
    default:
      return "#D38325";
  }
}
function formatDate(inputDate) {
  // Convert the input date to a string if it's a number
  const dateStr = String(inputDate);

  // Extract the year, month, and day
  const year = dateStr.substring(0, 4);
  const month = dateStr.substring(4, 6);
  const day = dateStr.substring(6, 8);

  // Format the date as DD/MM/YYYY
  return `${day}/${month}/${year}`;
}

export { cardRibbonColors, formatDate };
