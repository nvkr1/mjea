import { v4 as uuidv4 } from "uuid";

import img2 from "../../assets/img/law.png";
import img3 from "../../assets/img/finance.png";
import img4 from "../../assets/img/marketing.png";

const servicesTwoData = [
  {
    id: uuidv4(),
    img: img2,
    icon: "sketch",
    title: "Хууль & Комплайнсын хороо",
    title1: "LEGAL & COMPLIANCE COMMITTEE",
  },

  {
    id: uuidv4(),
    img: img3,
    icon: "house-plan",
    title: "Санхүү бүртгэл & Эрсдэлийн хороо",
    title1: "FINANCIAL ACCOUNTING & RISK COMMITTEE",
  },
  {
    id: uuidv4(),
    img: img4,
    icon: "house-plan",
    title: "Пиар & Маркетингийн хороо",
    title1: "PUBLIC RELATIONS & MARKETING COMMITTEE",
  },
];

export default servicesTwoData;
