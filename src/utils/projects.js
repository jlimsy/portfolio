const projects = [
  {
    id: "virtual-garden",
    name: "Design Your Virtual Garden Wallpaper",
    img: "virtual-garden.png",
    description: "",
    skills: ["javascript", "html", "css"],
  },
  {
    id: "retrogram",
    name: "Retrogram",
    img: "retrogram.png",
    description:
      "Instagram rebranded into a retro desktop application to showcase your polaroids",
    skills: ["javascript", "html", "css"],
  },
  {
    id: "catneed",
    name: "catneed",
    img: "catneed.png",
    description: "A resource-sharing platform among cat rescuers and owners.",
    skills: ["javascript", "html", "css"],
  },
  {
    id: "babelbites",
    name: "babelbites",
    img: "babelbites.png",
    description:
      "Aspiring polyglots can keep abreast of news which can be searched by topic, country, and language. Text from the news can be translated with the translation API to more than 100 languages. Users can also create and edit commentaries on the news articles they have read.",
    skills: ["javascript", "html", "css"],
  },
  {
    id: "fitcommit",
    name: "fitcommit",
    img: "fitcommit.png",
    description:
      "A fitness tracking app to monitor progress of strength training. Roulette feature provides inspiration for exercises which users can add to their favourites and future workout plan. ",
    skills: ["javascript", "html", "css"],
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
