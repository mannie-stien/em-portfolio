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
      "Developed cross-platform apps and web solutions using React Native, React.js, Django, and Python.",
      "Improved code quality by conducting code reviews and maintaining a 95% code quality rating.",
      "Implemented Docker for deployment, enhancing collaboration and ensuring consistency.",
      "Boosted data exchange efficiency by 70% with APIs and accelerated cross-functional development by 80%.",
      "Resolved bugs before deployment, saving time and reducing resource usage.",
      "Enhanced scalability, improving software delivery efficiency.",
    ],
  },
  {
    role: "Software Developer",
    company: "Safestreets LLC, Rexburg, ID",
    duration: "July 2019 – January 2021",
    responsibilities: [
      "Created visually appealing, responsive web pages using HTML, CSS, and JavaScript.",
      "Integrated APIs into Angular applications, enhancing user experience.",
      "Managed source code using Git and maintained version control.",
      "Conducted unit testing and troubleshooting, ensuring smooth user interaction.",
      "Streamlined workflows by developing reusable code libraries for common features.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Alder Holdings LLC, Orem, UT",
    duration: "January 2019 – April 2019",
    responsibilities: [
      "Adapted quickly to new tools and technologies, supporting rapid project execution.",
      "Solved complex software challenges with clean, maintainable code.",
      "Applied DevOps principles to automate deployment processes.",
      "Kept up with tech trends to apply relevant solutions in real-time.",
    ],
  },
  {
    role: "Faculty Technology Assistant",
    company: "Brigham Young University-Idaho, Rexburg, ID",
    duration: "February 2018 – December 2018",
    responsibilities: [
      "Created comprehensive training materials, enabling staff to adopt new technologies.",
      "Improved customer satisfaction by enhancing technical support efficiency.",
      "Recommended software/hardware upgrades to improve productivity.",
      "Implemented data backup protocols to safeguard critical data.",
    ],
  },
];
