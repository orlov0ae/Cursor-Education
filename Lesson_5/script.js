// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив
// випадкових цілих чисел. У функції є параметри: length - довжина масиву, min –
// мінімальне значення цілого числа, max – максимальне значення цілого числа.
// Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

const length = Math.abs(Math.floor(Number(prompt("Введіть довжину масиву"))));
const minValue = Math.floor(Number(prompt("Введіть мінімальне число з діапазону чисел для масиву")));

let maxValue;

while (true) {
    maxValue = Math.floor(Number(prompt("Введіть максимальне число з діапазону чисел для масиву")));
    if (maxValue > minValue) {
        break;
    }
}


function getRandomArray(minValue, maxValue, length) {
    const array = [];    
    for (i = 0; i < length; i += 1) {
        array[i] = Math.floor((maxValue - minValue) * Math.random() + minValue);
    }
    return array;
}

console.log('1. Рандомний масив: ', getRandomArray(minValue, maxValue, length));

console.log('_____________________');

// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї
// аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

function getModa(...numbers) {
    const res = numbers.reduce((acum, item, index, array, m = 0) => {
    let moda = array.filter((number) => number == item).length;
    Number.isInteger(item) && moda > m? ((acum = item), (m = moda)): acum;
        return acum;
    }, 0);
    return res;
}

console.log('2. Функція "МОДА" - ', getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log('_____________________');

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх
// переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ Приклад:
//getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

function getAverage(...numbers) {
    let res = 0;
    numbers.reduce((sum, item, index, numbers) => {
        if (Number.isInteger(item)) {
            res = sum + item;
            return res;
        }
    })
    return res / numbers.length;    
}

const average = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log('3. Функція "середнє арифметичне" - ', average);

console.log('_____________________');


// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї
// аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
//Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

function getMedian(...numbers) {
    const arrSorted = numbers.sort((a, b) => a - b ).filter((number) => (number = Number.isInteger(number)));
    const indexOfMedian = arrSorted.length / 2;
    
    let median

    if (Number.isInteger(indexOfMedian)) {
        median = (numbers[indexOfMedian] + numbers[(indexOfMedian - 1)]) / 2;
    } else {
        median = numbers[Math.floor(indexOfMedian)];
    }
    return median;

}

console.log('4.1. Медіана №1 дорівнює: ', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('4.2. Медіана №2 дорівнює: ', getMedian(1, 2, 3, 4));
console.log('4.3. Медіана №3 дорівнює: ', getMedian(1, 2, 3, 4, 5));

console.log('_____________________');


// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані
// як аргументи функції. Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function filterEvenNumbers(...numbers) {
    const numbersFiltered = numbers.filter((number) => (number = number % 2 != 0));
    return numbersFiltered;
}

console.log('5. Масив з відфільтрованими парними числами: ', filterEvenNumbers(1, 2, 3, 4, 5, 6));

console.log('_____________________');


// 6. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить
// погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити
// масив на слова за допомогою функції .split(" "), після чого масив необхідно буде
// склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати
// список цих слів у майбутньому. Приклад: replaceBadWords("Are you fucking
// kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy
// ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

function replaceBadWords(string) {
    const array = string.split(' ');
    const arrayCensored = array.map((item, index, array) => {
        
        if (item.includes('fuck')) {
            return item.replace(('fuck'), "****");
        } else if (item.includes('shit')) {
            return item.replace(('shit'), "****");
        }
        return item;
    });
    return arrayCensored.join(' ');
}

console.log('6.1. Цензура: ', replaceBadWords('Are you fucking kidding?'));
console.log('6.2. Цензура: ', replaceBadWords('Holy shit!'));
console.log('6.3. Цензура: ', replaceBadWords("It's bullshit!"));

console.log('_____________________');
