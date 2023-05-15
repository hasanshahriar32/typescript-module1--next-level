type NubeDeveloper = {
  name: string;
};
type JuniorDeveloper = NubeDeveloper & {
  expertise: string;
  experience: number;
};

// union
const NewDeveloper: NubeDeveloper | JuniorDeveloper = {
  name: "hasan",
  expertise: "mern",
  experience: 2,
};
enum level {
  junior = "junior",
  senior = "senior",
}
type nextLevelDeveloper = JuniorDeveloper & {
  leaderShipExperience: number;
  level: "junior" | "senior";
};
// intersection
const developer: nextLevelDeveloper = {
  name: "next vai",
  experience: 5,
  expertise: "typescript",
  leaderShipExperience: 1,
  level: "junior",
  //   level: level.junior,
};

console.log(developer);
