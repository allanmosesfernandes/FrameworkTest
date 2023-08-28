/* eslint-disable linebreak-style */
function CardRibbonColors(category) {
  const cardcategory = category.toLowerCase();
  switch (cardcategory) {
    // write 4 cases for Events, Resources, News and Opportunities
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

export default CardRibbonColors;
