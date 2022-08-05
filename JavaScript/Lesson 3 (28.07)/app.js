// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
if (x !== 0) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 60;
if (time >= 0 && time <= 15) {
  console.log("quater1");
} else if (time > 15 && time <= 30) {
  console.log("quater2");
} else if (time > 30 && time <= 45) {
  console.log("quater3");
} else if (time > 45 && time <= 59) {
  console.log("quater4");
} else {
  console.log("Wrong time!");
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 434;
if (day > 0 && day <= 11) {
  console.log("First");
} else if (day > 12 && day <= 20) {
  console.log("Second");
} else if (day > 21 && day <= 31) {
  console.log("Third");
} else {
  console.log("Wrong day!");
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
switch (8) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Wrong day!!!");
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let a = 11;
let b = 10;
if (a > b) {
  console.log(`a = ${a} bigger than b = ${b}`);
} else if (a < b) {
  console.log(`a = ${a} lover than b = ${b}`);
} else if (a == b) {
  console.log("the same");
} else {
  console.log("???");
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let h = "" || "default";
console.log(h);
