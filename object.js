// const myInfo = {
//   name: "Sifat",
//   age: 22,
//   address: "Rangpur",
//   profession: "Student",
//   passion: "coding...",
//   aim: "to became a full stack engineer",
//   religious: "Islam",
//   contact: {
//     call: "01632165523",
//     email: "sahabulislamsifat@gmail.com",
//   },
// };

// OBJECT SPREAD

// const objectTwo = myInfo;
// const objectTwo = { ...myInfo };

// objectTwo.relationship = "Single";
// myInfo.age = 21;

// console.log(myInfo);
// console.log(objectTwo);

// const myName = myInfo.name;
// const myAge = myInfo.age;

// console.log(myName, myAge);

// OBJECT DESTRUCTURING

// const { name, age } = myInfo;
// const { contact } = myInfo;
// const {
//   contact: { email },
// } = myInfo;
// const { contact: myContact } = myInfo;

// console.log(name);
// console.log(name, age);
// console.log(contact);

// const { email } = contact;
// const { email } = myContact;

// console.log(email);

// OBJECT ACCESS : Dot Notation and Bracket Notation

const myInfo = {
  name: "Sifat",
  age: 22,
  address: "Rangpur",
  profession: "Student",
  passion: "coding...",
  aim: "to became a full stack engineer",
  religious: "Islam",
  //   contact: {
  //     call: "01632165523",
  //     email: "sahabulislamsifat@gmail.com",
  //   },
};

for (let key in myInfo) {
  console.log(myInfo[key]);
}

// const s = "name";

// console.log(myInfo.name);
// console.log(myInfo["name"]);
// console.log(myInfo[s]);
