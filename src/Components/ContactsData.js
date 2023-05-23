import { v4 as uuidv4 } from "uuid";
import img1 from "./../assets/img/loc.png";
import img2 from "./../assets/img/contact.png";
import img3 from "./../assets/img/mail.png";

const contactsData = [
  {
    id: uuidv4(),
    img: img1,
    icon: "construction-site",
    title: "Хаяг",
    desc: 'Улаанбаатар, Сүхбаатар, 8-р хороо, "Цэнтрал Тауэр" 17давхарт',
  },

  {
    id: uuidv4(),
    img: img2,
    icon: "sketch",
    title: "Холбогдох",
    desc: "+976 00000000",
  },

  {
    id: uuidv4(),
    img: img3,
    icon: "house-plan",
    title: "Цахим шуудан",
    desc: "info@mjae.mn",
  },
];

export default contactsData;
