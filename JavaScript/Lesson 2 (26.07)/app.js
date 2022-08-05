// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array = [];
array[0] = 1;
array[1] = 2;
array[2] = 3;
array[3] = 4;
array[4] = 5;
array[5] = 6;
array[6] = 7;
array[7] = 8;
array[8] = 9;
array[9] = 10;
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book1 = {
  title: "Harry Potter",
  pageCount: 176,
  genre: "fantasy",
};

const book2 = {
  title: "Don `t cry",
  pageCount: 112,
  genre: "psychology",
};

const book3 = {
  title: "Taras Shevchenco",
  pageCount: 65,
  genre: "autobiography",
};
console.log(book1);
console.log(book2);
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

const firstBook = {
  title: "Harry Potter",
  pageCount: 176,
  genre: "fantasy",
  author: [
    {
      name: "Harry",
      age: 32,
    },
    {
      name: "Potter",
      age: 22,
    },
  ],
};

const secondBook = {
  title: "Don `t cry",
  pageCount: 112,
  genre: "psychology",
  author: [
    {
      name: "Don",
      age: 56,
    },
    {
      name: "Crt",
      age: 41,
    },
  ],
};

const thirdBook = {
  title: "Taras Shevchenko",
  pageCount: 65,
  genre: "autobiography",
  author: [
    {
      name: "Taras",
      age: 76,
    },
    {
      name: "Shevchenko",
      age: 98,
    },
  ],
};
console.log(firstBook);
console.log(secondBook);
console.log(thirdBook);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
  {
    name: "Max",
    username: "madmax",
    password: 11111,
  },
  {
    name: "Sasha",
    username: "madsasha",
    password: 22222,
  },
  {
    name: "Oleg",
    username: "madoleg",
    password: 33333,
  },
  {
    name: "Victor",
    username: "madvic",
    password: 44444,
  },
  {
    name: "Alex",
    username: "madalex",
    password: 55555,
  },
  {
    name: "Vika",
    username: "madvika",
    password: 66666,
  },
  {
    name: "Mar",
    username: "madmar",
    password: 77777,
  },
  {
    name: "Ira",
    username: "madira",
    password: 88888,
  },
  {
    name: "Olya",
    username: "madolya",
    password: 99999,
  },
  {
    name: "Jack",
    username: "madjack",
    password: 10000,
  },
];
console.log(users);
console.log(users[0].password);
console.log(users[1]["password"]);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
