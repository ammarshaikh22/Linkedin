import { scrollingDatas } from "./Type";
import icon1 from "../img/img1.jpg";
import img1 from "../img/img1-1.jpg";
import icon2 from "../img/img2.jpg";
import img2 from "../img/img2-2.jpg";
const ScrollingData: scrollingDatas[] = [
  {
    id: crypto.randomUUID(),
    icon: icon1,
    title: {
      heading: "M. Khadim Hussain",
      para: "SMIU Graduated BSCS | Senior Student at GIAIC | Persuing Certified Cloud Applied Generative AI Engineering | Typescript",
    },
    about:
      "This class covered by our amazing teachers Sir Asharib Ali, Sir Okasha ...see More",
    img: img1,
  },
  {
    id: crypto.randomUUID(),
    icon: icon2,
    title: {
      heading: "Javeriya Ahsan 💫",
      para: "Empowering Brands to Thrive Authentically on Social Media 💡 Organic Growth Strategist 📈 Social Media Management | Branding and Designing .",
    },
    about: "Your smile is your 𝗟𝗼𝗴𝗼,Your personality is your 𝗕𝘂𝘀𝗶𝗻𝗲𝘀𝘀 𝗖𝗮𝗿𝗱",
    img: img2,
  },
];

export default ScrollingData;
