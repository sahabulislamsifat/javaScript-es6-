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
    name: "Neymar jr",
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
    hobbies: ["Foodie", "Traveling", "Graphics"],
  },
];

const peopleList = document.getElementById("people-list");
const personInfo = document.getElementById("person-info");

const renderPeopleList = (people) => {
  // people.map((person) => console.log(person.name));
  people.map((person) => {
    const li = document.createElement("li");
    li.textContent = person.name;
    li.classList.add(
      "cursor-pointer",
      "text-indigo-500",
      "font-semibold",
      "text-xl"
    );

    li.addEventListener("click", () => {
      handlePersonClick(person.id);
    });

    peopleList.appendChild(li);
  });
};

const displayPersonInfo = (person) => {
  // console.log(personInfo);
  console.log(person);
  personInfo.classList.remove("hidden");
  document.getElementById("no-selection").classList.add("hidden");

  personInfo.innerHTML = `
        <h2 class="text-2xl font-bold mb-2">${person.name}</h2>
        <p>Email : ${person.contact?.email || "N/A"}</p>
        <p>City : ${person.address?.city || "N/A"}</p>
        <p>Hobbies : ${person?.hobbies?.map(
          (hobbies) => hobbies || "Not Available"
        )}</p>

  `;
};

const handlePersonClick = (id) => {
  const findPerson = peoples.find((p) => p.id == id);
  // console.log(findPerson);
  displayPersonInfo(findPerson);
};

renderPeopleList(peoples);
// handlePersonClick(2);
