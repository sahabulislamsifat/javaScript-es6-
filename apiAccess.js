const peoples = [
  {
    id: "01",
    name: "John Deo",
    age: 30,
    occupation: "Software Engineer",
    contact: {
      email: "johndeo01@gmail.com",
    },
    address: {
      street: "123, main street, Bangladesh",
      city: "New York, USA",
      state: "C/A",
      Zip: "944965",
    },
    social: {
      twitter: "@johndeo.com",
    },
    hobbies: ["codding", "hacking", "Photography"],
  },
  {
    id: "02",
    name: "John Deo 2",
    age: 39,
    occupation: "Unreal Engine",
    contact: {
      email: "johndeo09@gmail.com",
    },
  },
  {
    id: "03",
    name: "Messi",
    age: 30,
    occupation: "Footballer",
    address: {
      street: "123, main street, Bangladesh",
      city: "Washing tone, London",
      state: "C/A",
      Zip: "944965",
    },
    social: {
      twitter: "@messi.com",
    },
    hobbies: ["codding", "hacking", "Photography"],
  },
];

// const city = peoples[0].name;
// const city = peoples[0].address.city;
// const city = peoples[1]?.address?.city;

// console.log(city);

// peoples.map((person) => {
//   const sentence = `Person's name is ${person.name} . he lives in : ${
//     person?.address?.city || "N/A"
//   }`;
//   console.log(sentence);
// });

// const person = peoples.find((p) => p.age == 40);
const person = peoples.find((p) => p.age == 30);

// console.log(person);
console.log(person.name);
