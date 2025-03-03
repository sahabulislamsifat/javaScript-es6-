const students = [
  {
    name: "Sahabul Islam Sifat",
    email: "sahabulislamsifat@gmail.com",
    avg: 46,
    fiftyPercent: false,
  },
  {
    name: "Omar Hisham Al Arabi",
    email: "omarhisahamalarabi@gmail.com",
    avg: 66,
    fiftyPercent: true,
  },
  {
    name: "Shakib Al Hasan",
    email: "shakibalhasan@gmail.com",
    avg: 57,
    fiftyPercent: true,
  },
  {
    name: "Sabbir Hosain Rafi",
    email: "sabbirhossainrafi@gmail.com",
    avg: 38,
    fiftyPercent: false,
  },
  {
    name: "Sohel Islam Imran",
    email: "sohelislamimran@gmail.com",
    avg: 49,
    fiftyPercent: false,
  },
  {
    name: "Mukit Hossen",
    email: "mukithossen@gmail.com",
    avg: 59,
    fiftyPercent: true,
  },
];

// const scic = students.filter(
//   (person) => person.avg >= 50 && person.fiftyPercent === true
// );

// console.log(scic);

// const findScic = (students) => {
//   const scic = students.filter(
//     (person) => person.avg >= 50 && person.fiftyPercent === true
//   );
//   // return scic;
//   const names = scic.map((name) => name.name);
//   return names;
// };
// const findScic = (students) => {
//   const scic = students.filter(
//     (person) => person.avg >= 50 && person.fiftyPercent
//   );
//   // return scic;
//   const names = scic.map((name) => name.name);
//   return names;
// };
// const findScic = (students) => {
//   return students
//     .filter((person) => person.avg >= 50 && person.fiftyPercent)
//     .map((name) => name.name);
// };
const findScic = (students) =>
  students
    .filter((person) => person.avg >= 50 && person.fiftyPercent)
    .map((name) => name.name);

const result = findScic(students);

console.log(result);
