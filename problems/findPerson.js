const candidate = [
  { name: "Abul Hossain", job: "Government", salary: 70000 },
  { name: "Babul Hossain", job: "Private", salary: 90000 },
  { name: "Kabul Hossain", job: "Private", salary: 30000 },
  { name: "Mokber Mia", job: "Government", salary: 25000 },
  { name: "Sodor Uddin", job: "Private", salary: 170000 },
  { name: "Bokul Ahmed", job: "Government", salary: 50000 },
];

// const findCandidate = candidate.find(
//   (shortlist) =>
//     (shortlist.job === "Government" && shortlist.salary >= 30000) ||
//     (shortlist.job === "Private" && shortlist.salary >= 80000)
// );
const findCandidate = candidate.filter(
  (shortlist) =>
    (shortlist.job === "Government" && shortlist.salary >= 30000) ||
    (shortlist.job === "Private" && shortlist.salary >= 80000)
);

// console.log(findCandidate);

const lottery = Math.floor(Math.random() * findCandidate.length);

console.log(findCandidate[lottery].name, "you are win...");
