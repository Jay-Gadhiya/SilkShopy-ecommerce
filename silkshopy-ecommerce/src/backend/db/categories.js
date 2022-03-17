import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "laptop",
    description:
      "Various brands of laptops like hp, asus, dell etc.",
  },
  {
    _id: uuid(),
    categoryName: "smartphone",
    description:
      "Various brands of smartphones samsung, asus, redmi etc.",
  },
  {
    _id: uuid(),
    categoryName: "headphones",
    description:
      "Headphones are on head with different brands",
  },
  {
    _id: uuid(),
    categoryName: "gaming",
    description:
      "Gaming includes laptops and smartphones with high performance",
  },
];
