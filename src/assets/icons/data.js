import Logo from "./LOGO1.jpeg";
import Logo1 from "./logo.png";

export const projects = [
  {
    title: "PickApp",
    description:
      "PickApp is a modern sports and activity coordination platform designed to help users seamlessly organize, discover, and participate in local pickup games and recreational activities. Whether you're looking for a casual basketball game, a soccer match, or a yoga session, PickApp makes it effortless to connect with others who share your interests.",
    image: Logo, // Replace with your project image
    githubLink: "https://github.com/mannie-stien/pickapp.git",
    technologies: ["React", "Postgresql", "Supabase", "Vercel"],
    liveLink:"https://pickapp-mkpg.vercel.app/"

  },
  {
    title: "UniConvert",
    description:
      "UniConvert is a powerful, all-in-one conversion tool designed to make your life easier. Whether you need to convert time zones, currencies, or units, UniConvert has you covered. It’s fast, intuitive, and works seamlessly across devices.",
    image: Logo1, // Replace with your project image
    githubLink: "https://github.com/mannie-stien/uni-convert.git",
    technologies: ["React", "REST APIs", "Vercel"],
    liveLink:"https://uni-convert.vercel.app/"

  },
  {
      title: 'Genomic Formatter',
      description: 'A tool to convert Genomic Feature Format (GFF) files into Excel format for easier analysis and accessibility.',
      image: 'https://cdn.pixabay.com/photo/2019/06/17/19/48/source-4280758_640.jpg', // Replace with your project image
      githubLink: 'https://github.com/mannie-stien/gff-xlsx.git',
    technologies: ["Python"],
    liveLink:"https://pypi.org/project/gff-to-xlsx/"


    },
  // {
  //   title: 'Project Two',
  //   description: 'An elegant React Native app for task management, featuring notifications and analytics.',
  //   image: 'https://cdn.pixabay.com/photo/2019/06/17/19/48/source-4280758_640.jpg', // Replace with your project image
  //   githubLink: 'https://github.com/your-username/project-two',
  // },
  // Add more projects as needed
];
export const experiences = [
  {
    role: "Software Developer || Data Analyst",
    company: "25:2 Solutions LLC, Pocatello, ID",
    duration: "September 2021 – Present",
    responsibilities: [
      "Architected and developed scalable cross-platform applications using React Native, React.js, Django, and Python.",
      "Increased code efficiency and maintainability by leading code reviews, maintaining a 95% quality rating.",
      "Streamlined deployments using Docker, ensuring seamless collaboration and consistency across teams.",
      "Engineered high-performance APIs, improving data exchange efficiency by 70% and boosting cross-functional development speed by 80%.",
      "Proactively identified and resolved critical bugs pre-deployment, reducing downtime and enhancing resource optimization.",
      "Designed scalable architectures that enhanced software delivery efficiency and long-term maintainability.",
    ],
  },
  {
    role: "Software Developer",
    company: "Safestreets LLC, Rexburg, ID",
    duration: "July 2019 – January 2021",
    responsibilities: [
      "Built modern, responsive web applications using HTML, CSS, JavaScript, and Angular.",
      "Integrated third-party APIs, elevating user experience and expanding application capabilities.",
      "Maintained Git-based version control, ensuring smooth collaboration and source code integrity.",
      "Conducted unit testing and debugging, enhancing performance and user satisfaction.",
      "Developed reusable UI components, reducing development time for future projects.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Alder Holdings LLC, Orem, UT",
    duration: "January 2019 – April 2019",
    responsibilities: [
      "Adapted quickly to new frameworks and tools, accelerating project timelines.",
      "Tackled complex software challenges with clean, maintainable, and scalable code.",
      "Automated deployment pipelines using DevOps best practices, improving efficiency.",
      "Researched and implemented cutting-edge tech solutions, keeping applications ahead of the curve.",
    ],
  },
  {
    role: "Faculty Technology Assistant",
    company: "Brigham Young University-Idaho, Rexburg, ID",
    duration: "February 2018 – December 2018",
    responsibilities: [
      "Designed comprehensive training materials, empowering staff to seamlessly adopt new technologies.",
      "Improved customer satisfaction scores by optimizing technical support processes.",
      "Recommended hardware/software upgrades, leading to enhanced productivity and efficiency.",
      "Developed and enforced robust data backup protocols, ensuring data security and integrity.",
    ],
  },
];

