'use strict'
//1
//Объявлена функция checkAge(age).
//В выражении проверки возраста использован оператор >=
//Вызов checkAge(20) возвращает "You are an adult"
//Вызов checkAge(8) возвращает "You are a minor"
//Вызов checkAge(14) возвращает "You are a minor"
//Вызов checkAge(38) возвращает "You are an adult"
//В теле функции есть только одна инструкция if
//В теле функции нет инструкции else или else if
function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return 'You are an adult'
  }

  return 'You are a minor'
}
console.log(checkAge(20))
console.log(checkAge(8))
console.log(checkAge(14))
console.log(checkAge(38))
//2
//Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
//Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:
//удали переменную message
//удали else
//код должен работать так же, как и до оптимизации
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam'
  // Change code below this line
  if (password === ADMIN_PASSWORD) {
    return 'Welcome!'
  }
  return 'Access denied, wrong password!'
  // Change code above this line
}
//3Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.
//available - доступное количество товаров на складе
//ordered - количество единиц товара в заказе
//Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».
//Объявлена функция checkStorage(available, ordered)
//Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
//Вызов checkStorage(100, 130) возвращает "Your order is too large, not enough goods in stock!"
//Вызов checkStorage(70, 0) возвращает "Your order is empty!"
//Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
//Вызов checkStorage(200, 250) возвращает "Your order is too large, not enough goods in stock!"
//Вызов checkStorage(150, 0) возвращает "Your order is empty!"
function checkStorage(available, ordered) {
  if (ordered === 0) {
    return (message = 'Your order is empty!')
  }
  if (ordered > available) {
    return (message = 'Your order is too large, not enough goods in stock!')
  }
  return (message = 'The order is accepted, our manager will contact you')
}
//4 Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".
//const fruits = ["apple", "plum", "pear", "orange"]
//5
//const fruits = ["apple", "plum", "pear", "orange"];
//const firstElement = fruits[0];
//const secondElement = fruits[1];
//const lastElement = fruits[3];
//6Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".
//const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
//fruits [1] = 'peach';
// fruits [3] = 'banana';
//7 Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.
const fruits = ['apple', 'peach', 'pear', 'banana']
console.log(fruits.length)
const fruitsArrayLength = fruits.length
//8
const fruits = ['apple', 'peach', 'pear', 'banana']
const lastElementIndex = fruits.length - 1
const lastElement = fruits[lastElementIndex]
//9Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.
function getExtremeElements(array) {
  const firstElement = array[0]
  const lastElementIndex = array.length - 1
  const lastElement = array[lastElementIndex]
  return [firstElement, lastElement]
}
//10Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.
function splitMessage(message, delimeter) {
  let words
  words = message.split(delimeter)
  return words
}
//11
function calculateEngravingPrice(message, pricePerWord) {
  let words
  words = message.split(' ').length * pricePerWord
  return words
}
console.log(calculateEngravingPrice('JavaScript is in my blood', 10))
console.log(calculateEngravingPrice('JavaScript is in my blood', 20))
console.log(calculateEngravingPrice('Web-development is creative work', 20))
//12
function makeStringFromArray(array, delimeter) {
    let string;
    string = array.join(delimeter)  ;
    return string;
  }
  //13
  function slugify(title) {
  let slug = title.toLowerCase().split(' ').join('-');
   return slug;
  }
  //14
  const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1,4) ;
const lastThreeEls = fruits.slice(-3);

//15
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];
const allClients = oldClients.concat(newClients);
//16
function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    let arr = firstArray.concat(secondArray);
   if (arr.length>maxLength) {
        arr.length = maxLength;
       return arr;
    }
    return arr.slice(0,);
}
//17
const start = 3;
const end = 7;
 
for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}
//18
function calculateTotal(number) {
    let sum = 0;
    for (let i = 1; i <= number; i += 1) {
      sum += i;
    }
    return sum;
  }
  //19
  const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i+=1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}
//20
function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
  for (const item of order) {
    total += item;
  }
    // Change code above this line
    return total;
  }
  //21
  function findLongestWord(string) {
	const arrayString = string.split(" ");
	let longestWord = arrayString[0];
	for (let i = 0; i < arrayString.length; i+=1) {
		if (longestWord.length < arrayString[i].length) {
			longestWord = arrayString[i];
		}
	}
	return longestWord;
}
//22
function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
    for(let i = min; i<=max; i+=1){
    numbers.push(i);
    }
    // Change code above this line
    return numbers;
  }
  //23
  function filterArray(numbers, value) {
    const filteredNumbers = [];
    for (const number of numbers) {
        if (number > value) {
            filteredNumbers.push(number);
        }
    }
    return filteredNumbers;
}
//24
function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];
   
     
    return fruits.includes(fruit);
  }
  console.log (checkFruit("plum"))
  console.log (checkFruit("mandarin"))
  console.log (checkFruit("pear"))
  console.log (checkFruit("Pear"))
  console.log (checkFruit("apple"))
  console.log (checkFruit())
  //25
  function getCommonElements(array1, array2) {
    // Пиши код ниже этой строки
    let commonElements = []
    for (let el of array1) {
      let isInSecondArray = array2.includes(el);
      if (isInSecondArray) {
        commonElements.push(el);
  }
    }
    return commonElements;
  }
  //26
  function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
  for (const item of order){
    
      total += item ;
    }
  
    // Change code above this line
    return total;
  }
  //27
  function filterArray(numbers, value) {
    // Change code below this line
    // Пиши код ниже этой строки
    const filteredNumbers = [];
    for (let number of numbers) {
      if (number > value) {
        filteredNumbers.push(number);
      }
    }
    return filteredNumbers;
    // Пиши код выше этой строки
  }
  //28
const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;
//29
function getEvenNumbers(start, end) {
    const letSum =[]
   for  (let i = start; i <= end; i += 1){
     if (i % 2 === 0){
       letSum.push(i)
   }
 }
  return letSum }
//30
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  console.log(i)
  if (i % 5 === 0) {
    number = i;
    console.log ()
    break
  }
}  
//30
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
   
  if (i % 5 === 0) {
    number = i;
     
    break;
  }
}
//31
function findNumber(start, end, divisor) {
    let number;
  
    for (let i = start; i < end; i += 1) {
      if (i % divisor === 0) {
        number = i;
        return number;
      }
    }
    return number;
  }
  findNumber(2, 6, 5)
  findNumber(8, 17, 3)
  findNumber(6, 9, 4)
  findNumber(16, 35, 7)
  //32
  function includes(array, value) {
    // Change code below this line
  for (const arr of array) {
    if (arr === value) {
      return true;}
  }
  return false;
  }