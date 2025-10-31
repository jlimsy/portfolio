const projects = [
  {
    id: "virtual-garden",
    name: "Design Your Virtual Garden Wallpaper",
    img: "virtual-garden.png",
    description: "Design and download your own virtual garden wallpaper",
    skills: ["javascript", "html", "css"],
  },
  {
    id: "retrogram",
    name: "Retrogram",
    img: "retrogram.png",
    description:
      "Instagram rebranded into a retro desktop application to showcase your polaroids",
    skills: ["react", "javascript", "html", "css"],
  },
  {
    id: "catneed",
    name: "catneed",
    img: "catneed.png",
    description: "A resource-sharing platform among cat rescuers and owners.",
    skills: ["MERN", "javascript", "html", "css"],
  },
  {
    id: "babelbites",
    name: "babelbites",
    img: "babelbites.png",
    description:
      "Aspiring polyglots can keep abreast of news, translate highlighted text to more than 100 languages, and create notes.",
    skills: ["React", "javascript", "html", "css"],
  },
  {
    id: "fitcommit",
    name: "fitcommit",
    img: "fitcommit.png",
    description:
      "A fitness tracking app to monitor progress of strength training. Roulette feature provides inspiration for exercises which users can add to their favourites and future workout plan. ",
    skills: ["MERN", "javascript", "html", "css"],
  },
  {
    id: "othello",
    name: "Othello",
    img: "othello.png",
    description:
      "A 2-player board game where players conquer each other by flipping opposing discs to player's disc and the winner is determined by the number of coloured discs at the end of the game",
    skills: ["javascript", "html", "css"],
  },
];

const projectsArray = projects.map((proj) => proj.id);

export { projects, projectsArray };
