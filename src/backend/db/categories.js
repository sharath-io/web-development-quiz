import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "HTML",
    description: "Quiz based on HTML",
    image: "assets/quizHTML.svg"
  },
  {
    _id: uuid(),
    categoryName: "CSS",
    description: "Quiz based on CSS properties",
    image: "assets/quizCSS.svg"
  },
  {
    _id: uuid(),
    categoryName: "JS",
    description: "Quiz based on JS basics",
    image: "assets/quizJS.svg"
  },
];
