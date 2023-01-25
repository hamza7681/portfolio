import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiMaterialui,
  SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const skills = [
  {
    name: "HTML / CSS ",
    percentage: 90,
    icon1: <FaHtml5 className="bg-transparent" />,
    icon2: <FaCss3Alt className="bg-transparent"/>,
  },
  {
    name: "JavaScript",
    percentage: 75,
    icon1: <SiJavascript className="bg-transparent"/>,
  },
  {
    name: "Bootstrap",
    percentage: 85,
    icon1: <FaBootstrap className="bg-transparent"/>,
  },
  {
    name: "React",
    percentage: 80,
    icon1: <FaReact className="bg-transparent"/>,
  },
  {
    name: "React Native",
    percentage: 70,
    icon1: <TbBrandReactNative className="bg-transparent"/>,
  },
  {
    name: "Styled Components",
    percentage: 85,
    icon1: <SiStyledcomponents className="bg-transparent"/>,
  },
  {
    name: "Material UI",
    percentage: 70,
    icon1: <SiMaterialui className="bg-transparent"/>,
  },
  {
    name: "Tailwind CSS",
    percentage: 75,
    icon1: <SiTailwindcss className="bg-transparent"/>,
  },
  {
    name: "Angular",
    percentage: 60,
    icon1: <FaAngular className="bg-transparent"/>,
  },
  {
    name: "NodeJs",
    percentage: 80,
    icon1: <FaNodeJs className="bg-transparent"/>,
  },
  {
    name: "Firebase",
    percentage: 70,
    icon1: <SiFirebase className="bg-transparent"/>,
  },
  {
    name: "Databases",
    percentage: 75,
    icon1: <SiMongodb className="bg-transparent"/>,
    icon2: <SiMysql className="bg-transparent"/>,
  },
];
