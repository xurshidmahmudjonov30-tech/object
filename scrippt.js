let person = {
  firstName: "xurshidjon",
  lastName: "Mahmudjonov",
  age: 13,
  birthYear: 2014,
  email: "xurshidmahmudjonov30@gmail.com",

  grades: {
    matem: 5,
    english: 5,
    informatika: 5,
    history: 5,
  }
};

console.log(person);


let firstNameInput = prompt("Ismingizni kiriting:");
let lastNameInput = prompt("Familiyangizni kiriting:");
let ageInput = Number(prompt("Yoshingizni kiriting:"));
let birthYearInput = Number(prompt("Tug'ilgan yilingizni kiriting:"));
let emailInput = prompt("Emailingizni kiriting:");

let mathInput = Number(prompt("Matematika bahoingiz:"));
let englishInput = Number(prompt("Ingliz tili bahoingiz:"));
let informaticsInput = Number(prompt("Informatika bahoingiz:"));
let historyInput = Number(prompt("Tarix bahoingiz:"));

person.firstName = firstNameInput;
person.lastName = lastNameInput;
person.age = ageInput;
person.birthYear = birthYearInput;
person.email = emailInput;

person.grades.math = mathInput;
person.grades.english = englishInput;
person.grades.informatics = informaticsInput;
person.grades.history = historyInput;
