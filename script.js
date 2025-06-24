console.log("hello world!");
let personName = "younis";
personName = "Mahdi";
personName = "louna";
console.log(personName);

let x = 10.5;
console.log(x + 10);
console.log(8 < 5);
let y;
console.log(y);
const mallaJaw = [
  "amine",
  "Liwa",
  "mahdi",
  "haroun",
  "zied",
  "nourhene",
  "dorra",
  "younis",
  "yacine",
  "hedi",
  "mehdi",
  "yessine",
];
const mallaJawInfo = [
  { firstName: "amine", lastName: "chbeb", numeroTel: 28325249, sleepHours: 5 },
  {
    firstName: "liwa",
    lastName: "abassi",
    numeroTel: 92555772,
    sleepHours: 12.5,
  },
  {
    firstName: "mahdi",
    lastName: "badis",
    numeroTel: 85258555,
    sleepHours: 1.5,
  },
  {
    firstName: "haroun",
    lastName: "ben youssef",
    numeroTel: 555895259,
    sleepHours: 7,
  },
  {
    firstName: "zied",
    lastName: "ben youssef",
    numeroTel: 555895259,
    sleepHours: 7,
  },
];
const mehdiInfo = {
  firstName: "mehdi",
  lastName: "ben taher",
  numeroTel: 26010400,
  sleepHours: 8,
};
console.log(mallaJaw[2] + " est present");

for (let i = 0; i < 12; i++) {
  console.log(mallaJaw[i] + " est present");
}
mallaJaw.forEach(function (x) {
  console.log("for each : " + x);
});

function sleepy(sleephours, mallaJawFirstName) {
  if (sleephours > 3) {
    console.log(mallaJawFirstName + " had more that average sleep hours !");
  } else {
    console.log(mallaJawFirstName + " has poor sleep habits !");
  }
}
function add(z, w) {
  const y = z + w;
  return y;
}
const res = add(850, 150);
console.log(res / 2);
mallaJawInfo.forEach(function (x) {
  sleepy(x.sleepHours, x.firstName.toUpperCase());
});