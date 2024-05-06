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
  name: "Naren Surampudi",
  initials: "NS",
  location: "Pune, MH, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  about:
    "Data @ HSBC | OMSCS @ Georgia Tech",
  summary:
    "Harnessing the power of Data to drive Business Impact",
  personalWebsiteUrl: "",
  avatarUrl: "https://github.com/nsurampu/Portfolio/blob/main/images/1601389601409.jpeg?raw=true",
  contact: {
    email: "naren.surampudi@outlook.com",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/naren-surampudi/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Georgia Tech",
      degree: "Master's Degree in Computer Science",
      start: "2022",
      end: "2024",
    },
    {
      school: "Birla Institute of Technology and Science, Pilani",
      degree: "Bachelor's Degree in Electronics & Communications Engineering",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "HSBC",
      link: "https://www.hsbc.com/",
      badges: ["ML", "Python", "Tensorflow", "PowerBI", "Dagster", "Stakeholder Management"],
      title: "Consultant Specialist (Data & Analytics Engineering)",
      start: "2023",
      end: "Present",
      description:
       "• Lead the design of risk frameworks for the Service Sustainability Program that efficiently drive $100mil+ global budget annually and improve service resilience. \n\
        • Proposed and lead the design and implementation of automated Dagster pipelines and PowerBI dashboards for Wealth & Personal Banking Risk & Resilience, automating reporting and reducing time to reporting by 80%. \n\
        • Lead developer for new Jira data maintenance tooling, empowering data owners to actively maintain data, reducing data maintenance effort by 70%. \n\
        • Pioneered the usage of advanced data practices across teams, reducing data process and reporting times by 25% \n\
        • Mentored new graduates with hand-on guidance to build up data talent within the team \n\
        ",
    },
    {
      company: "HSBC",
      link: "https://www.hsbc.com/",
      badges: [],
      title: "Senior Software Engineer (Data & Machine Learning)",
      start: "2020",
      end: "2023",
      description:
       "• Joined as part of Global Graduate Programme \n\
        • Worked on a Self-service Analytics platform offering multiple advanced analytics options such as Time-series Forecasting, Topic Analysis and Exploratory Analysis Reporting, increasing adoption of advanced analytics in teams by 60% \n\
        • Supported the development of machine learning models for the CARE ecosystem for change risk prediction, reducing failed changes and downtime in teams by 40%. \n\
        • Lead the development of incident and outage forecasting models for the HOOP platform, reducing outages in teams by 30%. \n\
       ",
    },
    {
      company: "Reflexis Systems",
      link: "https://www.google.com",
      badges: ["Python", "Deep Learning", "Tensorflow", "NLP"],
      title: "Data Science Intern",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description: "•	Prototyped a new NLP usecase for improving retail campaigning efficiency which was showcased to executive stakeholders \n\
      •	Aided in development of deep learning models using GRUs and ResNets for aiding in better workforce management \n\
      ",
    },
  ],
  skills: [
    "Python",
    "Tensorflow",
    "PyTorch",
    "SQL",
    "PowerBI",
    "Dagster",
    "Streamlit",
    "Langchain",
    "Azure",
    "DuckDB",
    "Docker",
    "Git",
    "Machine Learning",
    "Deep Learning",
    "Data Mining",
    "Information Retrieval",
    "Natural Language"
  ],
  researchprojects: [
    {
      title: "Prof Sudha Radhika: Web/ML-based Machine Fault Monitoring",
      techStack: [
        "Python",
        "Android",
      ],
      description: "Focuses on the identification of faults in wind turbines, aiming to identify them in the early stages to reduce both maintenance times and costs. The process uses machine learning to identify fault stages, and the results are presented on a web dashboard and Android app to allow for remote monitoring.",
      logo: ConsultlyLogo,
      link: {
        label: "https://asmedigitalcollection.asme.org/IMECE/proceedings-abstract/IMECE2020/84669/V014T14A009/1099557",
        href: "https://asmedigitalcollection.asme.org/IMECE/proceedings-abstract/IMECE2020/84669/V014T14A009/1099557",
      },
    },
    {
      title: "Prof David Joyner: Student Course Feedback Prediction",
      techStack: [
        "Python",
        "Machine Learning",
        "Software Prototyping"
      ],
      description: "Proposed a system for predicting course feedback before the changes to a live course are finalized, helping instructors stay informed of how their changes might be received based on previous cohorts of the course, provide a check where the instructors can decide which changes they would like to go ahead. and help create better learning experiences for students",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Dr Jabez Christopher: ML-based Audio Event Identification",
      techStack: [
        "Python",
        "Machine Learning",
        "Audio Processing"
      ],
      description: "Focuses on using digital signal processing techniques to analyze and extract audio features and use them to predict the type of event that might have taken place in an audio signal using supervised machine learning approaches",
      logo: ConsultlyLogo,
      link: {
        label: "https://ieeexplore.ieee.org/document/8971574",
        href: "https://ieeexplore.ieee.org/document/8971574",
      },
    },
  ],

  projects: [
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      techStack: [
        "PowerBI",
        "Analytics"
      ],
      description: "Intermediate level certificate exam (PL-300) that tests methods and best practices that align with business and technical requirements for modeling, visualizing, and analyzing data with Microsoft Power BI",
      logo: ConsultlyLogo,
      link: {
        label: "PowerBI Certificate",
        href: "https://learn.microsoft.com/en-us/users/naren-8360/credentials/76506a8fd0791f6b?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      },
    },
    {
      title: "Tensorflow Developer Certification",
      techStack: [
        "Tensorflow",
        "Deep Learning"
      ],
      description: "Level one certificate exam that tests a developers foundational knowledge of integrating machine learning into tools and applications using Tensorflow",
      logo: ConsultlyLogo,
      link: {
        label: "Tensorflow Certification",
        href: "https://www.credential.net/19c27cf9-0ac8-4c40-bbac-725e84df75e3",
      },
    },
  ],

} as const;
