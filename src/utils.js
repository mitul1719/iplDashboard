import { db } from "./config/db";

export const getPlayers = (() => {
  return Object.assign(
    {},
    ...db.map((item) => {
      const { Team1, Team2, Team1Players, Team2Players } = item;
      return {
        [Team1]: Team1Players,
        [Team2]: Team2Players,
      };
    })
  );
})();

export const image_properties = Object.freeze({
  "India national cricket team":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
  "Mumbai Indians":
    "http://t2.gstatic.com/images?q=tbn:ANd9GcTGOQyXb0bp1ikIvWtQNRVLbsoz05OpO-w0jjuuIewCZckSLJ9C",
  "India national cricket team2":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
  "India national cricket team3":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
  "India national cricket team4":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
  "India national cricket team5":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
  "India national cricket team6":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
  "India national cricket team7":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
  "India national cricket team8":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
  "India national cricket team9":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
  "India national cricket team10":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
  "India national cricket team11":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
  "India national cricket team12":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
  "India national cricket team13":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
  "India national cricket team14":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
});
