import MoviesDB from "@/components/icons/moviesdb";
import SkillArc from "@/components/icons/skillarc";
import ByteJobs from "@/components/icons/bytejobs";
import MyName from "@/components/icons/named-logo";

export const projects = [
  {
    slug: "skillarc",
    desc: "Online code editor",
    name: "Skill Arc",
    url: "https://skillarc.vercel.app",
    icon: SkillArc,
    techused: [5, 6, 7, 11, 12, 21, 31, 32, 33, 34, 36, 41, 42, 44],
    about: `
    Practice platform for data structure and algorithm problems with playground page for online web based code editor.
    It supports execution of more than 5 languages programs. 
    <br/>Use Case: Codeforces users can write and test their code without leaving their browser and with the
    familiar VS Code UI
    `,
  },
  {
    slug: "moviesdb",
    desc: "Movie lookup site",
    name: "MoviesDB",
    url: "https://tmdb-codesbyayush.netlify.app",
    icon: MoviesDB,
    techused: [5, 6, 7, 11, 12, 21, 31, 32, 33, 34, 36, 41, 42, 44],
    about: `
    Looking for your next movie fix? Look no further than MoviesDB! This website leverages the TMDb API to provide list of trending movies and TV Shows worldwide to find exactly what you're in the mood for. High-quality posters and backdrops visually enhance your browsing experience. With a constantly updated database, you'll always discover the latest releases and hidden gems. Whether you're a movie buff or a casual viewer, MoviesDB is your one-stop shop for everything cinema!
    `,
  },
  {
    slug: "auth-example",
    desc: "Full stack auth implementation",
    name: "Auth Implementation",
    url: "https://github.com/codesbyayush/Authentication-System",
    icon: MyName,
    techused: [5, 6, 7, 11, 12, 21, 31, 32, 33, 34, 36, 41, 42, 44],
    about: `
    NextAuth.js and JWTs provide a powerful solution for full-stack authentication in Next.js applications. Users can log in through familiar providers like Google or custom forms, with NextAuth handling the verification process seamlessly. Once a user logs in successfully, a JSON Web Token (JWT) containing encrypted user information is generated. This JWT acts like a digital key, stored securely in a user's browser cookie.  Pages and features requiring login check for the presence of this JWT before granting access. By leveraging NextAuth for token management and JWTs for stateless security, your application benefits from a smooth user experience and robust protection on both the front-end and back-end.
    `,
  },
  {
    slug: "old-portfolio",
    desc: "Old Portfolio website",
    name: "Portfolio v1",
    url: "https://ayushpatel.vercel.app",
    icon: MyName,
    techused: [5, 6, 7, 11, 12, 21, 31, 32, 33, 34, 36, 41, 42, 44],
    about: `
    This website is like my online scrapbook for learning web development! It all started with late nights, coffee, and a ton of curiosity about how websites work. Back then, I was just starting to code, and this is where I put all my projects. They might not be perfect (everyone starts somewhere!), but they show how much I've learned.
    <br />
    Check out my old portfolio website, Maybe you'll get inspired to start your own web development journey!
    `,
  },
  {
    slug: "blogsite",
    desc: "Personal static blog",
    name: "Blogsite",
    url: "https://blog-ayush.vercel.app/",
    icon: MyName,
    techused: [5, 6, 7, 11, 12, 21, 31, 32, 33, 34, 36, 41, 42, 44],
    about: `
    Join me on my technical writing journey. This is a space where I share my thoughts, experiences, and passions. Let's explore life together, laugh a little, and learn from each other!
    `,
  },
  {
    slug: "redisclone",
    desc: "Redis basic functionality clone",
    name: "Redis clone",
    url: "https://github.com/codesbyayush/codecrafters-redis-typescript",
    icon: MyName,
    techused: [5, 6, 7, 11, 12, 21, 31, 32, 33, 34, 36, 41, 42, 44],
    about: `
    This project provides a simpler Redis CLI client similar to the official one, but with built-in replication support. Manage Redis instances, monitor replication, and ensure data availability - all from the command line.
    `,
  },
  {
    slug: "natours",
    desc: "Tours package booking site",
    name: "Natours",
    url: "https://github.com/codesbyayush/NatureTours",
    icon: MyName,
    techused: [5, 6, 7, 11, 12, 21, 31, 32, 33, 34, 36, 41, 42, 44],
    about: `
    Unleash your wanderlust with our tour finding website, built with a powerful backend leveraging Pug for dynamic templates (Pug.js templating engine). Search by destination, interests, or travel style to discover unforgettable adventures curated for every explorer. Explore detailed descriptions, captivating photos, and insightful reviews – all presented with a user-friendly interface powered by modern web technologies.  Plan your dream getaway with ease and embark on a journey you'll never forget!
    `,
  },
  {
    slug: "jobscrapper",
    desc: "Job and internship web scrapper",
    name: "Scrapper",
    url: "",
    icon: MyName,
    techused: [5, 6, 7, 11, 12, 21, 31, 32, 33, 34, 36, 41, 42, 44],
    about: `
    Slash through the internship application process with our automated web scraper! Powered by Puppeteer, this tool gathers internship opportunities from various websites, saving you hours of manual searching.  All the essential details - descriptions, deadlines, and companies -  are stored in a clean JSON format for easy access.  Let automation handle the grunt work, so you can focus on applying and landing your dream internship!
    `,
  },
  {
    slug: "snippetier",
    desc: "Code blocks sharing platform",
    name: "Snippetier",
    url: "https://snippetier.vercel.app",
    icon: MyName,
    techused: [5, 6, 7, 11, 12, 21, 31, 32, 33, 34, 36, 41, 42, 44],
    about: `
    This platform allows users to share snippets of code, like implementations of different algorithms, with the community. Others can view, use, and improve upon these snippets, fostering collaboration and knowledge sharing in the world of coding.
    `,
  },
  {
    slug: "socketchat",
    desc: "Web socket based chat and calling web-app",
    name: "Socket Chat",
    url: "https://github.com/codesbyayush?tab=repositories",
    icon: MyName,
    techused: [5, 6, 7, 11, 12, 21, 31, 32, 33, 34, 36, 41, 42, 44],
    about: `
    Ditch the downloads and experience seamless communication with Sockketchat! This innovative platform leverages websockets for real-time chat, while WebRTC empowers you to make direct video calls within your browser. No data is stored on Sockketchat's servers, prioritizing your privacy and keeping your conversations confidential. With Sockketchat, connecting with friends and family has never been easier - enjoy instant messaging, face-to-face calls, and all the benefits of real-time interaction in one secure platform.
    `,
  },
  // {
  //   slug: "bytejobs",
  //   desc: "Job search and management platform",
  //   name: "ByteJobs",
  //   url: "",
  //   icon: ByteJobs,
  //   techused: [5, 6, 7, 11, 12, 21, 31, 32, 33, 34, 36, 41, 42, 44],
  //   about: `
  //   ByteJobs supercharges your internship hunt. We use automation to gather opportunities from multiple sites, saving you time and endless browsing. Filter by skills, location, or company to find your perfect fit. All details - descriptions, deadlines, companies - are organized for easy access and presented beautifully using modern frontend technologies. Land your dream internship with ByteJobs!
  //   `,
  // },
];
