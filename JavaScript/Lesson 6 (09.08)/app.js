// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
var a = "hello world";
var b = "lorem ipsum";
var c = "javascript is cool";
console.log(a.length);
console.log(b.length);
console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
var a = "hello world";
var b = "lorem ipsum";
var c = "javascript is cool";
console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(c.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
var a = "HELLO WORLD";
var b = "LOREM IPSUM";
var c = "JAVASCRIPT IS COOL";
console.log(a.toLowerCase());
console.log(b.toLowerCase());
console.log(c.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
var stri = " dirty string   ";
console.log(stri.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = "Ревуть воли як ясла повні";
const stringToArray = (str) => str.split(" ");
console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let numArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let numStr = numArray.map((value) => value.toString());
console.log(numStr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let numb = [11, 21, 3];
const sortNumb = (direction, array) => {
  if (direction === "ascending") {
    array.sort((a, b) => a - b);
  } else if (direction === "descending") {
    array.sort((a, b) => b - a);
  }
  return array;
};
console.log(sortNumb("ascending", numb));
console.log(sortNumb("descending", numb));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];
console.log(
  coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration)
);
let filtered = coursesAndDurationArray.filter(
  (value) => value.monthDuration > 5
);
console.log(filtered);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//    color:'', // 'red','black'
// }
let deckOfCards = [
  {
    cardSuit: null,
    value: "Joker",
    color: "black",
  },
  {
    cardSuit: null,
    value: "Joker",
    color: "red",
  },
  {
    cardSuit: "spade",
    value: "ace",
    color: "black",
  },
  {
    cardSuit: "clubs",
    value: "ace",
    color: "black",
  },
  {
    cardSuit: "diamond",
    value: "ace",
    color: "red",
  },
  {
    cardSuit: "heart",
    value: "ace",
    color: "red",
  },
  {
    cardSuit: "spade",
    value: "king",
    color: "black",
  },
  {
    cardSuit: "clubs",
    value: "king",
    color: "black",
  },
  {
    cardSuit: "diamond",
    value: "king",
    color: "red",
  },
  {
    cardSuit: "heart",
    value: "king",
    color: "red",
  },
  {
    cardSuit: "spade",
    value: "queen",
    color: "black",
  },
  {
    cardSuit: "clubs",
    value: "queen",
    color: "black",
  },
  {
    cardSuit: "diamond",
    value: "queen",
    color: "red",
  },
  {
    cardSuit: "heart",
    value: "queen",
    color: "red",
  },
  {
    cardSuit: "spade",
    value: "jack",
    color: "black",
  },
  {
    cardSuit: "clubs",
    value: "jack",
    color: "black",
  },
  {
    cardSuit: "diamond",
    value: "jack",
    color: "red",
  },
  {
    cardSuit: "heart",
    value: "jack",
    color: "red",
  },
  {
    cardSuit: "spade",
    value: "10",
    color: "black",
  },
  {
    cardSuit: "clubs",
    value: "10",
    color: "black",
  },
  {
    cardSuit: "diamond",
    value: "10",
    color: "red",
  },
  {
    cardSuit: "heart",
    value: "10",
    color: "red",
  },
  {
    cardSuit: "spade",
    value: "9",
    color: "black",
  },
  {
    cardSuit: "clubs",
    value: "9",
    color: "black",
  },
  {
    cardSuit: "diamond",
    value: "9",
    color: "red",
  },
  {
    cardSuit: "heart",
    value: "9",
    color: "red",
  },
  {
    cardSuit: "spade",
    value: "8",
    color: "black",
  },
  {
    cardSuit: "clubs",
    value: "8",
    color: "black",
  },
  {
    cardSuit: "diamond",
    value: "8",
    color: "red",
  },
  {
    cardSuit: "heart",
    value: "8",
    color: "red",
  },
  {
    cardSuit: "spade",
    value: "7",
    color: "black",
  },
  {
    cardSuit: "clubs",
    value: "7",
    color: "black",
  },
  {
    cardSuit: "diamond",
    value: "7",
    color: "red",
  },
  {
    cardSuit: "heart",
    value: "7",
    color: "red",
  },
  {
    cardSuit: "spade",
    value: "6",
    color: "black",
  },
  {
    cardSuit: "clubs",
    value: "6",
    color: "black",
  },
  {
    cardSuit: "diamond",
    value: "6",
    color: "red",
  },
  {
    cardSuit: "heart",
    value: "6",
    color: "red",
  },
];

let find = deckOfCards.find(
  (value) => value.cardSuit === "spade" && value.value === "ace"
);
console.log(find);

let filterSix = deckOfCards.filter((value) => value.value === "6");
console.log(filterSix);

let filterRed = deckOfCards.filter((value) => value.color === "red");
console.log(filterRed);

let filterDiamond = deckOfCards.filter((value) => value.cardSuit === "diamond");
console.log(filterDiamond);

let filter = deckOfCards.filter(
  (value) =>
    (value.cardSuit === "spade" && value.value > "8") ||
    (value.value === "10" && value.cardSuit === "spade") ||
    (value.value === "Joker" && value.color === "black")
);
console.log(filter);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//    spades:[],
//    diamonds:[],
//    hearts:[],
//    clubs:[]
// }
let reduce = deckOfCards.reduce(
  (accum, card) => {
    if (card.cardSuit === "spade") {
      accum.spades.push(card);
    } else if (card.cardSuit === "diamond") {
      accum.diamonds.push(card);
    } else if (card.cardSuit === "heart") {
      accum.hearts.push(card);
    } else if (card.cardSuit === "clubs") {
      accum.clubs.push(card);
    } else {
      accum.joker.push(card);
    }
    return accum;
  },
  {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
    joker: [],
  }
);
console.log(reduce);

let str1 = "   $%^&Harry   @#$%^&*()  Potter   @#$%";
const norm = (st) => {
  let string = st
    .split("")
    .map((value) =>
      (value >= "A" && value <= "Z") || (value >= "a" && value <= "z")
        ? value
        : " "
    )
    .join("")
    .trim();
  while (string.includes("  ")) {
    string = string.replace("  ", " ");
  }
  return string;
};
console.log(norm(str1));
