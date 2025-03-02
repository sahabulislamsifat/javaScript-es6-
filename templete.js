// const name = "Sifat";
// const age = 22;
// const address = "Rangpur, Bangladesh";

// const sentence = "Amar name " + name + " amar boyosh " + address;
// const sentenceOne = `Amar name ${name} amar boyosh ${age} amar basa ${address}`;

// console.log(sentence);
// console.log(sentenceOne);

const myInfo = {
  name: "Sifat",
  age: 22,
  address: "Rangpur",
  profession: "Student",
  passion: "coding...",
  aim: "to became a full stack engineer",
  religious: "Islam",
  subjects: ["Bangla", "English", "Math"],
};

// const sentence = `Amar name ${myInfo.name} amar profession ${
//   myInfo.profession
// } amar subject: ${myInfo.subjects.map((sub) => sub)}`;
const sentence = `Amar name ${myInfo.name} amar profession ${
  myInfo.profession
} amar subject: ${myInfo.subjects.map((sub) => sub).join("/")}`;

console.log(sentence);
