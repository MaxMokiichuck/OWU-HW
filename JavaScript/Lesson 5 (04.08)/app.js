// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b) {
  return a * b;
}
console.log(rectangleArea(5, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let Pi = 3.14;
function circleArea(Pi, r) {
  return Pi * r * r;
}
console.log(circleArea(Pi, 15));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(h, r) {
  return 2 * 3.14 * r * (h + r);
}
console.log(cylinderArea(2, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
let array = ["max", "oleg", "igor", "sasha"];
function arrayShown(array) {
  for (const arrayItem of array) {
    console.log(arrayItem);
  }
}
arrayShown(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphCreator(text) {
  document.write(`<h3><i>${text}</i></h3>`);
}
paragraphCreator("Hi my friend!");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function tableCreator(text) {
  document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}
tableCreator("Line");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function tableNumber(text, count) {
  document.write(`<ul>`);
  for (let i = 0; i < count; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write(`</ul>`);
}
tableNumber("Position", 6);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = [1, "hi", true];
function notesGenerator(array) {
  document.write(`<ul>`);
  for (const arrayItems of array) {
    document.write(`<li>${arrayItems}</li>`);
  }
  document.write(`</ul>`);
}
notesGenerator(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
  {
    id: 1041,
    name: "Max",
    age: 24,
  },
  {
    id: 5132,
    name: "Oleg",
    age: 43,
  },
  {
    id: 3144,
    name: "Igor",
    age: 18,
  },
];
function usersTable(array) {
  for (const user of array) {
    document.write(`<div>`);
    document.write(`id-${user.id} name-${user.name} age-${user.age};`);
    document.write(`</div>`);
  }
}
usersTable(users);

// - створити функцію яка повертає найменьше число з масиву
let num = [1, 2, 3, 4, -7];
function minNumber(array) {
  let min = array[0];
  for (const minItem of array) {
    if (minItem < min) {
      min = minItem;
    }
  }
  return min;
}
console.log(minNumber(num));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];
const funct = (array) => {
  let sum = 0;
  for (const arrayItem of array) {
    sum += arrayItem;
  }
  return sum;
};
console.log(funct(numbers));
