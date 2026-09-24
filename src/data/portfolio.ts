import { Computer } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Shawqy News",
    category: "Mobile Application",
    description:
      "A fast and easy-to-use mobile app that helps users discover the latest news and explore stories across different categories.",
    longDescription:
      "A modern mobile news app designed to make it easy for users to stay updated with the latest stories. Users can browse news by category, explore articles, and read full stories through a simple and responsive interface.",
    image: "/images/News App Cover.jpg",
    tags: ["Flutter", "REST API", "Dio", "Dart"],
    liveUrl: "https://appetize.io/app/b_nbnbjsqrl57uzzmyudqvqsj6cy",
    githubUrl: "https://github.com/Youssif-shawki/News_App",
    featured: false,
  },
  {
    id: 2,
    title: "Weather App",
    category: "Mobile Application",
    description:
      "A simple and reliable mobile app that provides users with real-time weather information for cities around the world.",
    longDescription:
      "A modern weather app that helps users quickly check current weather conditions for any city. It provides clear weather information with a dynamic interface that adapts to different weather conditions.",
    image: "/images/Weather App Cover.jpg",
    tags: ["Flutter", "REST API", "BLoC/Cubit"],
    liveUrl: "",
    githubUrl: "https://github.com/Youssif-shawki/weather_app",
    featured: false,
  },
  {
    id: 3,
    title: "Chat App",
    category: "Mobile Application",
    description:
      "A simple and responsive mobile chat app that allows users to communicate and exchange messages in real time.",
    longDescription:
      "A modern chat application designed to provide a smooth and reliable messaging experience. Users can create accounts, sign in securely, and communicate through real-time conversations with a clean and easy-to-use interface.",
    image: "/images/Chat App Cover.jpg",
    tags: ["Flutter", "Firebase", "BLoC/Cubit"],
    liveUrl: "",
    githubUrl: "YOUR_CHAT_APP_GITHUB_URL",
    featured: false,
  },
];

export const services: Service[] = [
  {
    icon: "Smartphone",
    title: "Flutter App Development",
    description:
      "Turning your app idea into a modern, responsive, and reliable mobile application for Android and iOS.",
  },
  {
    icon: "Palette",
    title: "UI to Flutter",
    description:
      "Turning your Figma or design into a clean, responsive Flutter interface that works smoothly across different screen sizes.",
  },
  {
    icon: "Plug",
    title: "API Integration",
    description:
      "Connecting your app with external services and APIs to deliver dynamic content, live data, and real app functionality.",
  },
  {
    icon: "Database",
    title: "Firebase Integration",
    description:
      "Adding features such as user accounts, authentication, cloud data, and real-time communication to your mobile app.",
  },
  {
    icon: "Lightbulb",
    title: "Problem Solving",
    description:
      "Finding practical solutions for technical issues, app bugs, and development challenges to keep your project moving forward.",
  },
  {
    icon: "Wrench",
    title: "App Improvement",
    description:
      "Improving existing Flutter apps by fixing issues, adding features, and making the overall experience more reliable and user-friendly.",
  },
];

export const skills: Skill[] = [
  {
    name: "Flutter",
    category: "Mobile Development",
  },
  {
    name: "Dart",
    category: "Mobile Development",
  },
  {
    name: "Responsive UI",
    category: "Mobile Development",
  },
  {
    name: "BLoC / Cubit",
    category: "State Management",
  },
  {
    name: "REST API",
    category: "Backend & APIs",
  },
  {
    name: "Dio",
    category: "Backend & APIs",
  },
  {
    name: "Firebase",
    category: "Backend & APIs",
  },
  {
    name: "Firestore",
    category: "Database",
  },
  // {
  //   name: "SQLite",
  //   category: "Database",
  // },
  // {
  //   name: "Hive",
  //   category: "Database",
  // },
  {
    name: "Git & GitHub",
    category: "Tools",
  },
  {
    name: "Postman",
    category: "Tools",
  },
];

export const experiences: Experience[] = [
  {
    role: "Cross Platform Mobile App Developer Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Jul 2026 — Jan 2027",
    description:
      "Developing cross-platform mobile applications using Flutter and Dart through hands-on training and practical projects.",
    achievements: [
      "Built mobile applications using Flutter and Dart",
      "Worked with REST APIs, Firebase, and state management",
      "Applied responsive UI and clean development practices",
    ],
  },
  {
    role: "ECPC Participant",
    company: "Egyptian Collegiate Programming Contest",
    period: "2026",
    description:
      "Participated in the Egyptian Collegiate Programming Contest as part of a competitive programming team and achieved a high ranking.",
    achievements: [
      "Competed in algorithmic problem solving as part of a team",
      "Solved programming problems under competitive time constraints",
      "Achieved a high ranking in the competition",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor in Computer Science and Information",
    institution: "Assiut University",
    period: "2024 — 2028",
    description:
      "My journey in Computer Science has helped me build a strong foundation in programming and problem solving while exploring different areas of software development and discovering my passion for mobile app development.",
  },
];

export const certificates: Certificate[] = [
  {
    title: "ECPC 2027 Qualification",
    issuer: "Egyptian Collegiate Programming Contest",
    date: "Aug 2026",
    credentialId: "",//"2027-ECPC Q 8-Youssif Ahmed Mohamed Shawky",
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2024",
    title: "Tech Speaker",
    description: 'Delivered a talk on "Design Systems at Scale" at ReactConf.',
  },
  {
    year: "2023",
    title: "Open Source Contributor",
    description:
      "Contributed to 12 open-source projects with 500+ GitHub stars.",
  },
  {
    year: "2022",
    title: "Hackathon Winner",
    description:
      "Won 1st place at the Global AI Hackathon with a vision-assist app.",
  },
  {
    year: "2021",
    title: "Community Builder",
    description: "Founded a local developer meetup with 500+ active members.",
  },
  {
    year: "2020",
    title: "Published Author",
    description:
      'Published "Modern Web Animations" on Medium with 100k+ reads.',
  },
  {
    year: "2019",
    title: "First Job",
    description: "Started professional career at PixelForge Agency.",
  },
];
