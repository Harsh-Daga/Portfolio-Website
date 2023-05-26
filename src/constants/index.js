import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  python,
  k8s,
  nodejs,
  rails,
  mongodb,
  git,
  cpp,
  docker,
  vtfoundation,
  bigbuddy,
  bugcrowd,
  carrent,
  jobit,
  tripguide,
  threejs,
  vate,
  hospital,
  manga,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Ruby on Rails Developer",
    icon: mobile,
  },
  {
    title: "DevOps Engineer",
    icon: backend,
  },
  {
    title: "Penetration Tester",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: 'Rails',
    icon: rails,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: k8s,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Bigbuddy Pvt ltd",
    icon: bigbuddy,
    iconBg: "#FFF",
    date: "August 2022 - December 2022",
    points: [
      "Developing and maintaining web applications using React.js, Ruby on Rails and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Penetration Testing Intern",
    company_name: "VTFoundation",
    icon: vtfoundation,
    iconBg: "#E6DEDD",
    date: "October 2021 - December 2021",
    points: [
      "Testing web applications to find various security related vulnerabilities and writing pentest reports for audit.",
      "Collaborating with cross-functional teams including designers, QA analyst, product managers, and other developers to create high-quality products.",
      "Participating in code reviews, software testing and providing constructive feedback to other developers and testers.",
    ],
  },
  {
    title: "Security Researcher (Freelance)",
    company_name: "Bugcrowd",
    icon: bugcrowd,
    iconBg: "#ff7300",
    date: "May 2021 - Present",
    points: [
      "Part-time(Freelance) security researcher at Bugcrowd, where I helped in securing various companies which includes Dell, Amex, Telefonica and countless more.",
      "Among the Top 1600 security researchers in Bugcrowd around the world.",
    ],
  },
];


const projects = [
  {
    name: "Portfolio Website",
    description:
      "My Personal Portfolio Website built using Reactjs, TailwindCSS and 3D Animations is done using ThreeJS and Framer motion",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Harsh-Daga/Portfolio-Website",
  },
  {
    name: "Hospital Website",
    description:
      "Built a SAAS application for doctors and patients where they can schedule appointments, check medical records etc.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "BootStrap",
        color: "pink-text-gradient",
      },
    ],
    image: hospital,
    source_code_link: "https://github.com/Harsh-Daga/Hospital-management-system",
  },
  {
    name: "Manga Reader",
    description:
      "A comprehensive Comic book Reading platform that allows users to read the latest manga comic books.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: manga,
    source_code_link: "https://github.com/Harsh-Daga/manga-viewer",
  },
];

export { services, technologies, experiences, projects };