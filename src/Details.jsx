// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/bookshelf.png";
import projectImage2 from "./assets/projects/budiDao.png";
import projectImage3 from "./assets/projects/buymeAcoffee.png";
import projectImage4 from "./assets/projects/cryptoverse.png";
import projectImage5 from "./assets/projects/tokenSwap.png";
import projectImage6 from "./assets/projects/adminPodomoro.png";
import projectImage7 from "./assets/projects/polyvote.png";
import projectImage8 from "./assets/projects/iKhlas.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Eko Yanuarso Budi",
  tagline: "I build and currently learning WEB3",
  img: profile,
  about: `I earned a bachelor's degree in computer engineering after successfully completing my studies at the Institut Teknologi Telkom Purwokerto. I gained expertise in creating web applications while in college and kept learning new technologies like ReactJS and Web3. Decentralized applications and blockchain, in my opinion, will be crucial in determining how the web develops in the future. With my aptitude for problem-solving, experience in company growth, and knowledge of community management, I am certain that I can provide something of value to any team.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/eko-yanuarso-budi/",
  github: "https://github.com/ekoyanu99",
  twitter: "https://twitter.com/ekoyanu99",
  instagram: "https://www.instagram.com/_ekoyanu99",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Business Development And Community",
    Company: `Litedex Protocol`,
    Location: "Jakarta",
    Type: "Contract",
    Duration: "Mar 2023 - Apr 2023",
  },
  {
    Position: "Community Officer",
    Company: `Litedex Protocol`,
    Location: "Jakarta",
    Type: "Internship",
    Duration: "Nov 2022 - Feb 2023",
  },
  {
    Position: "Independent Study",
    Company: `BISA AI Academy`,
    Location: "Bandung",
    Type: "Internship",
    Duration: "Aug 2022 - Dec 2022",
  },
  {
    Position: "Community Angel",
    Company: `Harmony`,
    Location: "Mountain View, CA",
    Type: "Freelance",
    Duration: "Jul 2020 - Jan 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  // {
  //   Position: "Frontend Development",
  //   Company: "Udemy, YouTube, Google, Medium",
  //   Location: "Online",
  //   Type: "Full Time",
  //   Duration: "Jan 2022 - Present",
  // },
  {
    Position: "Informatics Engineering",
    Company: `Institut Teknologi Telkom Purwokerto`,
    Location: "Banyumas",
    Type: "Bachelor",
    Duration: "Sep 2019 - Aug 2023",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "PolyVote",
    image: projectImage7,
    description: `PolyVote is e-voting using smart contract blockchain polygon`,
    techstack: "ReactJS, Smart Contract, Blockchain",
    previewLink: "https://vote.blockchainscope.xyz/",
    githubLink: "https://github.com/ekoyanu99/poly-vote",
  },
  {
    title: "iKhlasXYZ",
    image: projectImage8,
    description: `This is project submission for BNSP Certification Junior Web Developer`,
    techstack: "PHP, CSS",
    previewLink: "",
    githubLink: "https://github.com/ekoyanu99/iKhlasXYZ",
  },
  {
    title: "Bookshelf App",
    image: projectImage1,
    description: `This is project submission for class on Dicoding, user can input title, writer, year, and boolean read or no`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://bookshelf-apps-liard.vercel.app/",
    githubLink: "https://github.com/ekoyanu99/bookshelf-apps",
  },
  {
    title: "BudiDAO",
    image: projectImage2,
    description: `BudiDAO like another Decentralized Autonomos this part of learn buildspace x thirdweb, user who hold BudiDAO NFT can particiate proposal `,
    techstack: "ReactJS, Solidity for SmartContract",
    previewLink: "https://budi-dao.vercel.app/",
    githubLink: "https://github.com/ekoyanu99/dao-dashboard",
  },
  {
    title: "BuyMeACoffee Using Ethereum",
    image: projectImage3,
    description: `This is part of Weekly Learning Alchemy i made smartcontract deploy, get abi then use ABI on web, user can send tip to the deployer which is me and i can withdaw money (Ethereum goerli testnet) `,
    techstack: "NextJS, Solidity for SmartContract",
    previewLink: "",
    githubLink: "https://github.com/ekoyanu99/BuyMeACoffee-dApp",
  },
  {
    title: "CryptoVerse",
    image: projectImage4,
    description: `Crypto verse is a web that you can know about Global Crypto Stats data by RapidAPI, on the page News i made user can search by Crypto tag that user want, only top 100 crypto shown `,
    techstack: "ReactJS, RapidAPI",
    previewLink: "https://crypto-verse-rosy.vercel.app/",
    githubLink: "https://github.com/ekoyanu99/crypto-verse",
  },
  {
    title: "TokenSwap",
    image: projectImage5,
    description: `This is simple token swap website part of Weekly Learning Challengen Alchemy - Build Dapp tokenswap with 0x api, user can connect and see realtime price on this Dapp `,
    techstack: "HTML/CSS, JavaScript, 0xZero & 1Inch API",
    previewLink: "https://dex.blockchainscope.xyz/",
    githubLink: "https://github.com/ekoyanu99/token-swap",
  },
  {
    title: "Admin Podomoro",
    image: projectImage6,
    description: `This is project admin podomoro for submission fullstack development class MSIB Bisa AI Batch 3, database using mongoDB atlas, client podomoro fetching data api by admin `,
    techstack: "JavaScript, EJS, Bootstrap",
    previewLink: "",
    githubLink: "https://github.com/ekoyanu99/server-podomoro",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "ekoyanu99@gmail.com",
  phone: "+62 85786 609192",
};
