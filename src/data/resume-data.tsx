import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Chandrahas Aroori",
  initials: "CA",
  location: "Boston, MA, USA",
  locationLink: "https://www.google.com/maps/place/Boston",
  about:
    "Masters in AI @ BU | ex-Microsoft, ex-Nvidia",
  summary:
    "Building the future of AI with LLMs",
  avatarUrl: "https://avatars.githubusercontent.com/u/20578676?s=400&u=66099b9b666699230e3bca1d19808c913a603454&v=4",
  personalWebsiteUrl: "https://exorust.github.io",
  contact: {
    email: "charoori@bu.edu",
    tel: "+16172560885",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Exorust",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chandrahas-aroori/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/charoori_ai",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Boston University",
      degree: "Master's Degree in Artificial Intelligence",
      start: "2023",
      end: "Present",
    },
    {
      school: "Birla Institute of Technology and Science, Pilani",
      degree: "Bachelor's Degree in Computer Science",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Microsoft",
      link: "https://www.microsoft.com/",
      badges: ["FullStack", "ML", "Android", "React", "Tensorflow"],
      title: "Software Development Engineer",
      // logo: MicrosoftLogo,
      start: "2020",
      end: "2023",
      description:
        `• Built multiple ML systems to augment existing Microsoft Products: \
      •	Picture to tasks: Takes any picture of like a recipe & converts it into a list of tasks using ResNet chained to BERT \n\
      •	Discover Feed: Created a smart feed of possible actionable tasks by extracting information from Emails & Teams messages to using Hidden Markov Models \n\
      •	Autosuggest Tasks: Based on users previous grocery lists, it suggests new grocery items via statistical models \n\
      •	Autocategorize Tasks: Automatically sort various items in grocery lists into categories like(fresh produce, meat, etc) \n\
      •	NLP identification of Date / Time: Identify Dates & Times in various tasks & then enable reminders`
    },
    {
      company: "Nvidia",
      link: "https://www.nvidia.com/en-us/",
      badges: ["CuDA", "C++"],
      title: "Software Development Intern",
      // logo: ClevertechLogo,
      start: "2020",
      end: "2020",
      description:
        "• Improved HDMI I2C function callback in graphics driver which controls HDMI connection to GPU. \n\
      •	Enhanced the powercfg utility library to facilitate comprehensive testing of GPU performance in relation to power"
    },
    {
      company: "Kaamyapp",
      link: "https://www.linkedin.com/company/kaamyapp/?originalSubdomain=in",
      badges: ["React", "Android", "Spring Boot"],
      title: "Founding Engineer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "• Engineered a Mobile-First Platform with a scalable backend infrastructure designed to accommodate the needs of 1 million users \n\
      •	Application was built in Android & Spring Boot with Hibernate ORM"
    },
    {
      company: "Apkirai",
      link: "https://www.google.com",
      badges: [],
      title: "Co-Founder",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "•	Engineered a drag & drop application platform for medical pathway provider to define medical treatment pathways. \n\
      •	Application was built in React & Spring Boot",
    },
  ],
  skills: [
    "PyTorch",
    "CUDA",
    "Pytorch-Lightning",
    "FastAPI",
    "Langchain",
    "Azure ML",
    "Llama.cpp",
    "Pinecone",
    "HuggingFace",
    "LlamaIndex",
    "Docker",
    "LLM",
    "ReactJS",
    "Android",
    "Spring Boot"
  ],
  researchprojects: [
    {
      title: "Prof Dokyn Lee - LLM Reasoning",
      techStack: [
        "Langchain",
        "Llama 2",
      ],
      description: "Building an LLM system for improved reasoning",
      logo: ConsultlyLogo,
      link: {
        label: "https://www.leedokyun.com/",
        href: "https://www.leedokyun.com/",
      },
    },
    {
      title: "Prof Peter Jansen - AutoML with CuDA",
      techStack: [
        "Langchain",
        "Llama 2",
      ],
      description: "Built a GPU based algorithm in CuDA that works to evolve interpretable programs that solve NLP tasks.",
      logo: ConsultlyLogo,
      link: {
        label: "https://ischool.arizona.edu/person/peter-jansen",
        href: "https://ischool.arizona.edu/person/peter-jansen",
      },
    },
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
