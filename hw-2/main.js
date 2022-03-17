// #### Task 1 💻
// Создайте переменные, затем сложите их и выведите результат в консоль разработчика.
// ```javascript

let x = 20;
let y = 58;
let z = 42;
let result = x + y + z;
console.log(result);

//     #### Task 2 💻
// Создайте переменные:
//     - количество секунд в минуте
//     - количество минут в часу
//     - количество часов в сутках
//     - количество суток в году
// Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**

const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerDay = 24;
let daysPerYear = 365;
let myAgeInYears = 33;

let myAgeInSeconds = myAgeInYears * daysPerYear * hoursPerDay * minutesPerHour * secondsPerMinute;
console.log(myAgeInSeconds);

// #### Task 3 💻
// Создайте две переменные. Поместите в них переменную **`count`** и превратите 
// в строку, а **`userName`** наоборот в число. Попробуйте реализовать задачу 
// двумя разными способами.

    let count = 42;
    let userName = '42';

    let countInString1 = String(count);
    let countInString2 = '' + count;
    let countInString3 = `${count}`;
    let countInString4 = count.toString();

    console.log(countInString4);
    console.log(typeof countInString4);

    let userNameNumber1 = +userName;
    let userNameNumber2 = Number(userName);
    let userNameNumber3 = parseInt(userName);
    let userNameNumber4 = parseFloat(userName);
    let userNameNumber5 = userName*1;
    
    console.log(userNameNumber5);
    console.log(typeof userNameNumber5);

    // #### Task 4 💻
    // Имеется три переменные:    
    // ```javascript
    //   let a = 1
    //   let b = 2
    //   let c = "белых медведей"  ```
    // Сложите переменные так, чтобы в результате получилось выражение: 
    // **`12 белых медведей`** и результат выведите в консоль.

    let a = 1;
    let b = 2;
    let c = "белых медведей";

    let text1 = `${a}${b} ${c}`;
    let text2 = '' + a + b + ' ' + c;

    console.log(text1);

//     #### Task 5 💻
// Создайте переменные и поместите в них нижеприведенные слова. 
// Затем создайте еще одну переменную **`lengthWords`** и посчитайте 
// в ней длинну всех слов из списка:
//     - доступ 
//     - морпех
//     - наледь
//     - попрек
//     - рубило

    let word1 = 'доступ';
    let word2 = 'морпех';
    let word3 = 'наледь';
    let word4 = 'попрек';
    let word5 = 'рубило';
    
    let lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;
    
    console.log(lengthWords);

//     #### Task 6 💻
// Создать 3 переменные разных типов и вывести в консоль для каждой из них 
// строку следующего вида:    
//  `Variable: %variable name% have type: %type variable%`

let task6Number = 5;
let task6String = 'TEXT';
let task6Boolean = true;

let description1 = `Variable: ${task6Number} have type: ${typeof task6Number}`
let description2 = `Variable: ${task6String} have type: ${typeof task6String}`
let description3 = `Variable: ${task6Boolean} have type: ${typeof task6Boolean}`

console.log(description1);
console.log(description2);
console.log(description3);

// #### Task 7 💻
// Запросить у пользователя имя и возраст и вывести их в консоль.

let yourName = prompt('Введите Ваше имя');
let yourAge = prompt('Введите Ваш возраст');

if (yourName && yourAge){
    let client = `Имя: ${yourName}; Возрат: ${yourAge}`;
    console.log(client);
} else {   
    console.log('Не все данные введены. Нужно что-то сделать');     
}

// ### ADVANCED level
// #### Task 1 👨‍🏫 
// Поменяйте значение переменных местами не создавая дополнительной переменной:
// ```javascript
//     let m = 4
//     let n = 3

    let m = 4;
    let n = 3;

    // Вариант 1
    // n = m + n;
    // m = n - m;
    // n = n - m;
    // console.log(m,n); 
    
    // Вариант 2
    [m,n] = [n,m];
    console.log(m,n); 

    // #### Task 2 👨‍🏫 

    // В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить 
    // все вторые символы слов!
    // ```javascript
    //     let codeWord1 = "обернись";
    //     let codeWord2 = "неужели";
    //     let codeWord3 = "огурцы";
    //     let codeWord4 = "липкие";
    //     let codeWord5 = "?!";
    // Создайте переменную **`cipher`** и поместите туда необходимые символы

    let codeWord1 = "обернись";
    let codeWord2 = "неужели";
    let codeWord3 = "огурцы";
    let codeWord4 = "липкие";
    let codeWord5 = "?!";

    let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]; 
    console.log(cipher);
