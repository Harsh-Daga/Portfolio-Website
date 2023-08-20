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
  threejs,
  hospital,
  manga,
  portfolio,
  signify,
  blogspot,
  mercato,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "ABOUT",
  },
  {
    id: "work",
    title: "WORK",
  },
  {
    id: "contact",
    title: "CONTACT",
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
    title: "Full-Stack Development Intern",
    company_name: "Mercato Fabbrica",
    icon: mercato,
    iconBg: "#fff",
    date: "Dec. 2023 – Present",
    points: [
      "Developed and maintained their web application using Ruby on Rails.",
      "Played a pivotal role in achieving a substantial 40% reduction in initial page load times across diverse projects through the implementation of performance",
      "Implemented responsive design and ensured cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Bigbuddy Pvt ltd",
    icon: bigbuddy,
    iconBg: "#FFF",
    date: "August 2022 - December 2022",
    points: [
      "Developing and maintaining web applications using React.js, Ruby on Rails and other related technologies.",
      "Established an AWS Framework for the company to efficiently manage AWS resources and was able to reduce the overall cost by 20%.",
      "Skillfully crafted websites prioritizing responsiveness, cross-platform compatibility, and mobile optimization. This resulted in a remarkable 30% boost in user engagement on smartphones and tablets, further enhancing the user experience.",
      "Implemented responsive design and ensured cross-browser compatibility.",
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
    name: "Blogspot",
    description:
      "Developed a full-stack web application(blog app) with Nextjs and MongoDB backend database.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Material-UI",
        color: "pink-text-gradient",
      },
    ],
    image: blogspot,
    source_code_link: "https://github.com/Harsh-Daga/Blogspot",
  },
  {
    name: "Signify",
    description:
      "Developed a Sign langauge recognition app using Nextjs.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: signify,
    source_code_link: "https://github.com/Harsh-Daga/Signify",
  },
];

export { services, technologies, experiences, projects };