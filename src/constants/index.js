export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Mayengbam Ranjit Luwang",
    position: "Teammate of Chainlink Constellation Hackathon",
    img: "assets/review1.png",
    review:
      "Working with Yingjie during the Hackathon was a really nice experience. He is an excellent smart contract developer and a great team player. The communication was smooth and he was always ready to help and share his knowledge. Definitely a great asset to any team.",
  },
  {
    id: 2,
    name: "name",
    position: "position",
    img: "assets/review2.png",
    review: "review",
  },
];

export const myProjects = [
  {
    title: "VSkill - Decentralized Skill Verification Platform",
    desc: "VSkill is a blockchain-based platform revolutionizing skill verification. It offers a transparent system where skills are validated by impartial verifiers, earning corresponding NFT as a proof of their abilities. Through smart contracts and a unique incentive structure, VSkill bridges the gap between claimed and verified skills.",
    subdesc:
      "Users submit skill evidence via IPFS for verification by randomly selected verifiers. Verifiers stake funds and earn reputation for accurate assessments, facing penalties for poor performance. Approved skills are certified as NFTs. This self-regulating system, powered by smart contracts, ensures high-quality, efficient skill verification across various domains.",
    href: "https://github.com/cqlyj/VSkill",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#001235",
      border: "0.2px solid #001235",
      boxShadow: "0px 0px 60px 0px #001235",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Solidity",
        path: "/assets/solidity.svg",
      },
      {
        id: 2,
        name: "Foundry",
        path: "/assets/foundry.png",
      },
      {
        id: 3,
        name: "Chainlink",
        path: "assets/chainlink.png",
      },
      {
        id: 4,
        name: "IPFS",
        path: "/assets/ipfs.png",
      },
      {
        id: 5,
        name: "Openzeppelin",
        path: "/assets/openzeppelin.png",
      },
    ],
  },
  {
    title: "Constellation-stablecoin - Gold-Backed Stablecoin",
    desc: "The Gold-Backed Stablecoin Project offers a digital currency that merges gold's stability with blockchain flexibility. This innovative stablecoin is directly backed by gold tokens, providing a secure and transparent financial instrument that adapts to market conditions.",
    subdesc:
      "Gold tokens represent physical gold ownership, backing a stablecoin with a dynamic ratio. Smart contracts manage the system on a blockchain, while users interact via a React frontend for easy token management and transfers.",
    href: "https://constellation-stablecoin.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#c4a14f",
      border: "0.2px solid #c4a14f",
      boxShadow: "0px 0px 60px 0px ##c4a14f",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Solidity",
        path: "/assets/solidity.svg",
      },
      {
        id: 2,
        name: "Hardhat",
        path: "/assets/hardhat.png",
      },
      {
        id: 3,
        name: "Chainlink",
        path: "assets/chainlink.png",
      },
      {
        id: 4,
        name: "Openzeppelin",
        path: "/assets/openzeppelin.png",
      },
      {
        id: 5,
        name: "Vite",
        path: "/assets/vite.png",
      },
      {
        id: 6,
        name: "React.js",
        path: "/assets/react.png",
      },
    ],
  },
  // {
  //   title: "CarePulse - Health Management System",
  //   desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
  //   subdesc:
  //     "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
  //   href: "https://www.youtube.com/watch?v=lEflo_sc82g",
  //   texture: "/textures/project/project3.mp4",
  //   logo: "/assets/project-logo3.png",
  //   logoStyle: {
  //     backgroundColor: "#60f5a1",
  //     background:
  //       "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
  //     border: "0.2px solid rgba(208, 213, 221, 1)",
  //     boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
  //   },
  //   spotlight: "/assets/spotlight3.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
  // {
  //   title: "Horizon - Online Banking Platform",
  //   desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
  //   subdesc:
  //     "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
  //   href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
  //   texture: "/textures/project/project4.mp4",
  //   logo: "/assets/project-logo4.png",
  //   logoStyle: {
  //     backgroundColor: "#0E1F38",
  //     border: "0.2px solid #0E2D58",
  //     boxShadow: "0px 0px 60px 0px #2F67B64D",
  //   },
  //   spotlight: "/assets/spotlight4.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
  // {
  //   title: "Imaginify - AI Photo Manipulation App",
  //   desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
  //   subdesc:
  //     "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
  //   href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
  //   texture: "/textures/project/project5.mp4",
  //   logo: "/assets/project-logo5.png",
  //   logoStyle: {
  //     backgroundColor: "#1C1A43",
  //     border: "0.2px solid #252262",
  //     boxShadow: "0px 0px 60px 0px #635BFF4D",
  //   },
  //   spotlight: "/assets/spotlight5.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [2.8, -6.3, 0]
      : isMobile
      ? [4, -7, 0]
      : isTablet
      ? [6.5, -4.2, 0]
      : [9, -5.5, 0],
    polygonLogoPosition: isSmall
      ? [3, 3.2, 0]
      : isMobile
      ? [4.5, 2, 0]
      : isTablet
      ? [6.5, 5.8, 0]
      : [10.6, 5, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-12, 5, -2]
      : isTablet
      ? [-15, 12.5, 0]
      : [-22.6, 10, 0],
    ethLogoPosition: isSmall
      ? [-4.5, -11, -10]
      : isMobile
      ? [-6, -12, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -9, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "CodeHawks",
    pos: "Smart Contract Security Researcher",
    duration: "2024 - Present",
    title:
      "CodeHawks serves as a incredible powerful platform for smart contract competitive auditing. I have been working as a smart contract security researcher, conducting security audits and writing comprehensive reports to ensure the safety of smart contracts.",
    icon: "/assets/codeHawks.jpg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Foundry",
    pos: "Smart Contract Developer",
    duration: "2023 - 2024",
    title:
      "Foundry is a incredible platform for developing smart contracts. I have used it to create various phenomenal projects like VSkill and write a ton of test cases to ensure the security of the contracts.",
    icon: "/assets/foundry.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Chainlink",
    pos: "Smart Contract Developer",
    duration: "2023",
    title:
      "Chainlink Constellation Hackathon was a great opportunity to work with Chainlink's technology. I developed a gold-backed stablecoin project, integrating Chainlink's functionality and work with teammate all over the world.",
    icon: "/assets/chainlink.png",
    animation: "salute",
  },
];
