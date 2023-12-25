import {
  amiciAtos,
  arteco,
  sinapsi,
} from "../assets/images";
import {
  car,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  summiz,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Arteco",
    icon: arteco,
    iconBg: "#161616",
    date: "April 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using MERN stack.",
      "Implementing responsive design and ensuring cross-browser compatibility adopting all the best practices.",
      "Implementing models and controllers using Node.js and Express.js and managing the communication with mongoDB using mongoose as ORM.",
      "Adopting Agile methodology and using Jira as project management tool, doing stand up meeting every morning and sprint of two weeks.",
      "Managing the state of the application using Redux and Redux-thunk.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products and utilizing git as version control system.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "PHP Developer",
    company_name: "Amici Atos",
    icon: amiciAtos,
    iconBg: "#dfdfdf",
    date: "Oct 2022 - dec 2022",
    points: [
      "Developing and maintaining an e-commerce and an istitutional page using PHP and other related technologies.",
      "Implementing an e-commerce using PHP and laravel adopting a responsive design and ensuring the cross browser compatibility adopting all the best practices.",
      "Create the database using MySQL and managing the communication with the database using Eloquent as ORM.",
      "Using blade as microframework for the frontend that allowed me to write HTML code in php files.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Sinapsi",
    icon: sinapsi,
    iconBg: "#00516c70",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies, implementing a well defined design system through the collaboration with designers and writing the style sheets using sass as preprocessor and following BEM metodology.",
      "Participating to stand up meetings every morning and weekly production reunion, adopting Agile methodology and using Trello as project management tool.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products using git as version control system following git-flow guide lines.",
      "Implementing responsive design and ensuring cross-browser compatibility adopting all the best practices and ensuring that applications obtain a good score regarding accessibilty following ARIA guide line.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/NimaiKraus",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/nimai-kraus-sviluppo-web/",
  },
];

export const projects = [
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car showcase",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://nimai-auto-saloon.vercel.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://real-estate-next-app-steel.vercel.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Full featured dashboard",
    description:
      "A fully featured dashboard with different types of graphics and metrics.",
    link: "https://nimai-syncfusion-react-dashboard.netlify.app/",
  },
];
