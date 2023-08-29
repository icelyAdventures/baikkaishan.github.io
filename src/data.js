import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";

// import elmo from "./images/elmo.gif";
// import homer from "./images/homer.gif";
// import nyan from "./images/nyan.webp";
// import patrick from "./images/patrick.gif";

export const links = [
  //   {
  //     id: 1,
  //     url: "/",
  //     text: "home",
  //   },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
];

export const socials = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/kaishan-baik/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/kaishan-baik",
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: "mailto:baik.kaishan@gmail.com",
    icon: <FaRegEnvelope />,
  },
];

export const skills = [
  {
    id: 1,
    icon: <FaHtml5 />,
    text: "HTML",
  },
  {
    id: 2,
    icon: <FaCss3Alt />,
    text: "CSS",
  },
  {
    id: 3,
    icon: <IoLogoJavascript />,
    text: "Javascript",
  },
  {
    id: 4,
    icon: <FaReact />,
    text: "React",
  },
  {
    id: 5,
    icon: <FaBootstrap />,
    text: "Bootstrap",
  },
  //   {
  //     id: 6,
  //     icon: <FaSass />,
  //     text: "Sass",
  //   },
];

export const technicalSkills = [
  {
    id: 1,
    skill: "HTML5",
  },
  {
    id: 2,
    skill: "CSS",
  },
  {
    id: 3,
    skill: "JavaScript",
  },
  {
    id: 4,
    skill: "Java",
  },
  {
    id: 5,
    skill: "ReactJs",
  },
  {
    id: 6,
    skill: "Git",
  },
  {
    id: 7,
    skill: "Bootstrap",
  },
  {
    id: 8,
    skill: "SASS",
  },
  {
    id: 9,
    skill: "D3",
  },
  {
    id: 10,
    skill: "JSON",
  },
  {
    id: 11,
    skill: "jQuery",
  },
  {
    id: 12,
    skill: "Redux",
  },
];

export const languages = [
  "English",
  "Mandarin",
  "Malay",
  "Hokkien",
  "Cantonese",
];

export const singleProject = [
  {
    id: 101,
    image:
      "https://i.pinimg.com/originals/0c/64/9a/0c649a17ec1e5f5ca340248b4ef4e4be.gif",
    title: "A B C",
    info: "This is a project about A b c",
    skill1: "HTML",
    skill2: "CSS",
    skill3: "JavaScript",
    skill4: "React",
    codeUrl: "https://www.linkedin.com/in/kaishan-baik/",
    demoUrl: "abc",
  },
  {
    id: 102,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhWATwkrFqL0IF_XUh1JVCBOyj88Bf0W9qA&usqp=CAU",
    title: "A B C",
    info: "This is a project about A b c",
    skill1: "HTML",
    skill2: "CSS",
    skill3: "JavaScript",
    skill4: "React",
    codeUrl: "123",
    demoUrl: "abc",
  },
  {
    id: 103,
    image: "./../images/janken.png",
    title: "Janken ! ",
    info: "This is a simple Rock-Paper-Scissors App that was created using the knowledge of HTML, CSS, JavaScript.",
    skill1: "HTML",
    skill2: "CSS",
    skill3: "JavaScript",
    skill4: null,
    codeUrl: "https://github.com/kaishan-baik/janken",
    demoUrl: "https://rock-paper-scissors-janken.netlify.app/",
  },
  {
    id: 104,
    image: "./../images/js-calculator.png",
    title: "Gyrados JavaScript Calculator",
    info: "This is a gyrados themed JavaScript calculator! This was created using my skills in HTML, CSS and JavaScript.",
    skill1: "HTML",
    skill2: "CSS",
    skill3: "JavaScript",
    skill4: null,
    codeUrl: "https://github.com/kaishan-baik/js-calculator-app",
    demoUrl: "https://poke-calculator-app.netlify.app/",
  },
  {
    id: 105,
    image: "./../images/color-generator.png",
    title: "Responsive Color Generator",
    info: "This project is about a color generator that will produce 20 shades of the color, providing the hex codes just by clicking onto it.",
    skill1: "HTML",
    skill2: "CSS",
    skill3: "JavaScript",
    skill4: null,
    codeUrl: "https://github.com/kaishan-baik/color-palette",
    demoUrl: "https://color-builder.netlify.app/",
  },
  {
    id: 106,
    image: "./../images/heatmap-d3.png",
    title: "D3 Global Monthly Heatmap ",
    info: "This project was created with mainly D3 and JavaScript, to plot out the global monthly land-surface temperature from 1753 to 2015.   ",
    skill1: "HTML",
    skill2: "CSS",
    skill3: "JavaScript",
    skill4: "D3",
    codeUrl:
      "https://github.com/kaishan-baik/fcc-projects/tree/gh-pages/heatmap-d3",
    demoUrl: "https://codepen.io/Kai-Shan-Baik/pen/mdQxyRj",
  },
];
