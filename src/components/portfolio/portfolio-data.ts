import progressivo from "../../assets/progressivo.jpg";
import habitit from "../../assets/habitit.jpg";
import shoppingCart from "../../assets/shopping-cart.jpg";
import moneyTracker from "../../assets/money-tracker.jpg";
import reactToaster from "../../assets/react-toaster.jpg";
import slackClone from "../../assets/slack-clone.jpg";
interface ProjectData {
  title: string;
  about: string;
  stack: string;
  image: string;
  live: string;
  github: string;
}

export const portfolioData: ProjectData[] = [
  {
    title: "Progressivo",
    about:
      "Now manage your projects more efficiently. Work in multiple projects at a time.",
    stack:
      "NextJS, TypeScript, Redux-Toolkit, React Beautiful DnD, TailwindCSS",
    image: progressivo,
    live: "https://progressivo.vercel.app/",
    github: "https://github.com/asif-almahmud/project-manager",
  },

  // {
  //   title: "Roof Farmers",
  //   about: "A blog website for those who love farming on the roofs.",
  //   stack:
  //     "NextJS, TypeScript, Redux-Toolkit, React Beautiful DnD, TailwindCSS",
  //   image: progressivo,
  //   live: "",
  //   github: "",
  // },
  {
    title: "HabitIt",
    about: "An application to help build good habits.",
    stack:
      "React, Context API, TailwindCSS, Node, Express, MongoDB, Mongoose, JWT Authentication",
    image: habitit,
    live: "https://habit-it.onrender.com/",
    github: "https://github.com/asif-almahmud/mern-habit-it-frontend",
  },
  {
    title: "Shopping Cart",
    about: "This app demonstrates a typical e-commerce shopping cart.",
    stack: "React, TypeScript, Context API, Bootstrap, React Bootstrap",
    image: shoppingCart,
    live: "https://shopping-cart-tnce.onrender.com",
    github: "https://github.com/asif-almahmud/react-ts-shopping-cart",
  },
  {
    title: "Expense Tracker",
    about: "A very handy expense tracker application with transaction history",
    stack: "React, Redux, React-Redux, SASS(SCSS)",
    image: moneyTracker,
    live: "https://asif-almahmud.github.io/simple-expense-tracker/",
    github: "https://github.com/asif-almahmud/simple-expense-tracker",
  },
  {
    title: "React Toaster",
    about: "A toast notification system developed from the ground.",
    stack: "React, SASS(SCSS)",
    image: reactToaster,
    live: "https://quizzical-albattani-eac26d.netlify.app/",
    github: "https://github.com/asif-almahmud/react-toasts",
  },
  {
    title: "Slack Clone (Partly)",
    about:
      "The design of this application is developed inspired by Slack. Using this app users can chat through different channels",
    stack: "React, Firebase, Redux-Toolkit, Styled Components",
    image: slackClone,
    live: "https://agitated-wilson-2e9a92.netlify.app/",
    github: "https://github.com/asif-almahmud/slack-clone",
  },
];
