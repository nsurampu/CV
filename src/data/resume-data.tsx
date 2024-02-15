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
        "Developed and deployed multiple Machine Learning systems in the MMX Intelligence Team for various Microsoft Products (Microsoft ToDo, Planner & Project). \n\
        • Engineered the “Picture to Tasks” feature, leveraging ResNet and BERT models to analyze images, and convert them into a detailed list of actionable tasks. Achieved 78% accuracy in picture to Task translation. \n\
        • Lead the creation of “Discover Feed”, a dynamic smart feed that extracts actionable tasks from Emails and Teams messages using Hidden Markov Models. Contributed a 20% increase in user engagement with suggested tasks. \n\
        • Lead developer for “Autosuggest Tasks” functionality, employing statistical models to analyze users' historical lists and provide personalized suggestions for new items. Contributed to a 25% boost in Task Creation. \n\
        • Lead developer for “Autocategorize Tasks” feature, implementing NLP similarity models to automatically categorize various items enhancing user organization. Reduced manual categorization efforts by 35%. \n\
        ",
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
        "•	Improved HDMI I2C function callback in graphics driver which controls HDMI connection to GPU.\n\
        •	Enhanced the powercfg utility library to facilitate comprehensive testing of GPU power performance."
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
        "• Created a Mobile-First Platform with a scalable backend infrastructure, supporting up to 1 million users, featuring an Android app frontend and utilizing Spring Boot, Hibernate, and MySQL for the backend."
    },
    {
      company: "JourneyLabs",
      link: "https://www.google.com",
      badges: [],
      title: "Co-Founder",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "•	Developed a drag & drop application platform for medical pathway providers, utilizing an Android app for the front-end and implementing the backend with Spring Boot, Hibernate, and MySQL.",
    },
  ],
  skills: [
    "PyTorch",
    "CUDA",
    "Pytorch-Lightning",
    "FastAI",
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
      description: "•	Developing an LLM (Large Language Model) system to enhance reasoning capabilities, incorporating Agentic LLMs.",
      logo: ConsultlyLogo,
      link: {
        label: "https://www.leedokyun.com/",
        href: "https://www.leedokyun.com/",
      },
    },
    {
      title: "Prof Peter Jansen - AutoML with CuDA",
      techStack: [
        "CuDA",
        "C++",
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
      title: "Large Language Model Cookbook",
      techStack: [
        "Side Project",
        "LLM",
        "Finetuning",
        "RAG",
        "HuggingFace",
        "PyTorch",
      ],
      description: "A cookbook detailing the best ways to build, utilize, & deploy large language models for a wide range of applications",
      logo: ConsultlyLogo,
      link: {
        label: "LLM Cookbook",
        href: "https://github.com/Exorust/LLM-Cookbook",
      },
    },
    {
      title: "LLM Movie Recommender",
      techStack: [
        "Side Project",
        "Mistral",
        "Finetuning",
        "LoRA",
        "PEFT",
        "PyTorch",
      ],
      description: "Built a movie recommendation chatbot that tailors suggestions based on user preferences by finetuning Mixtral LLM on the IMDB dataset.",
      logo: ConsultlyLogo,
      link: {
        label: "LLM Movie Recommender",
        href: "https://github.com/Exorust/LLM-movie-recommender/",
      },
    },
    {
      title: "Interactive Medical Education LLM Chatbot",
      techStack: [
        "Side Project",
        "Mistral",
        "ChromaDB",
        "RAG",
        "PyTorch",
      ],
      description: "Created an interactive Medical RAG(Retrieval Augmented Generation) study LLM, letting med students quiz themselves using textbooks. Set up a vector database, smoothly linking textbook info to a Llama 2 for a unique learning experience.",
      logo: ConsultlyLogo,
      link: {
        label: "Interactive Medical Education LLM Chatbot",
        href: "https://github.com/Exorust/Interactive-Medical-Education-LLM-Chatbot",
      },
    },
  ],
} as const;
