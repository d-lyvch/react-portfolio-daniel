import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate React developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have developed skills in front-end technologies like React and Next.js, as well as knowledge of back-end technologies such as Node.js, PostgreSQL, MongoDB, Redis, and Docker. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Motivated and ambitious backend developer with hands-on experience with React, Express, and MongoDB, as well as completion of several PET projects on GitHub. Experienced in building CRUD applications, version control using Git, and containerization with Docker. Knowledgeable in Redis for caching and Next.js for server-side rendering and static site generation. Google certified, with a strong commitment to continuous learning, including improving soft skills and English language skills. Currently a student looking to specialize in developing backend solutions for e-commerce. Passionate about personal development and enjoys cycling and working out at the gym.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "React Developer",
    company: "Alisher",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: [
      "React.js",
      "Next.js",
      "mongoDB",
      "Docker",
      "Redis",
      "Git",
      "Node.js",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React", "Nest.js", "MongoDB", "Redis", "node.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Nest.js", "Motion", "tailwind"],
  },
];

export const CONTACT = {
  address: "Lviv/Beregovo, Ukraine",
  phoneNo: "+380 68 89 38 789 ",
  email: "lyvchdaniel@gmail.com",
};
