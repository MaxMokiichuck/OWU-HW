// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array = [];
array[0] = "Hello";
array[1] = 12;
array[2] = true;
array[3] = [1, 2, 3, 4, 5];
array[4] = {
  name: "Max",
};
console.log(array);
console.log(array[4]);
console.log(array[4]["name"]);

let array1 = ["Hello", 12, true, [1, 2, 3, 4, 5], { name: "Max" }];
console.log(array1);

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const book1 = {
  title: "title",
  pageCount: 200,
  genre: "genre",
};

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
const book2 = {
  title: "title",
  pageCount: 200,
  genre: "genre",
  authors: [
    {
      name: "Oleg",
      age: 24,
    },
  ],
};
console.log(book2);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
  {
    name: "max",
    username: "madllmax",
    password: 123432,
  },
  {
    name: "oleg",
    username: "legovi4",
    password: 142313,
  },
  {
    name: "vik",
    username: "vikvik",
    password: 622155,
  },
  {
    name: "san",
    username: "san32",
    password: 542442,
  },
  {
    name: "arse",
    username: "arsennnn",
    password: 243214,
  },
  {
    name: "fasal",
    username: "fsaslll",
    password: 753736,
  },
  {
    name: "maxim",
    username: "madllllmax",
    password: 242242,
  },
];
console.log(users);
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);
console.log(users[6]);

users[7] = {
  name: "fisha",
  username: "fiasisai",
  password: 646442,
};

console.log(users[7].name);
