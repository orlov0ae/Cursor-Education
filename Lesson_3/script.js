// HW #3

console.log('1 - Функція, яка отримує будь-яке число, та виводить найбільшу цифру в цьому числі');

const number = Math.floor(Number(prompt("Введіть ціле число")));

function getMaxDigit() {
    const numString = String(number);
    let maxNum = 0;
    for (let i = 0; i < numString.length; i++) {
        if (Number(numString[i]) > maxNum) {
            maxNum = Number(numString[i]);
        }
        
    }
    return maxNum;
    }


console.log('Найбільша цифра з числа', number, ' - ', getMaxDigit(number));

console.log('_______________________________________________');

//______________________________________________________________

console.log('2 - Функція підведення числа у ступінь');

const numToPow = Math.floor(Number(prompt("Введіть ціле число, яке потрібно підвести в ступінь")));
const powIndex = Math.floor(Number(prompt("Введіть ступінь у яку треба підвести число")));

function powerOfNumber() {
    let calc = 1;
    for (let i = 0; i < powIndex; i++) {
        calc = calc * numToPow;
    }
    return calc;
}

console.log('Число ', numToPow, ' в ступені ', powIndex, ' дорівнює ', powerOfNumber(numToPow, powIndex));

console.log('_______________________________________________');

//______________________________________________________________

console.log("3 - Функція, яка форматує ім'я, роблячи першу букву великою");

const setName = prompt("Введіть ім'я");

function firstLetterUp() {
    const nameNormalized = setName.toLowerCase();
    const nameFirstLetterUp = (nameNormalized[0]).toUpperCase() + nameNormalized.slice(1);
    return nameFirstLetterUp;
}

console.log(firstLetterUp(setName));

console.log('_______________________________________________');

//______________________________________________________________

console.log("4 - Функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%)");

const salary = Number(prompt("Введіть суму заробітньої плати"));

function netSalary() {
    const netSalary = salary - salary * 0.195;
    return netSalary
}

console.log('Заробітня плата, після відрахування податків, складає ', netSalary(salary));

console.log('_______________________________________________');

//______________________________________________________________

console.log("5 - Функція, яка повертає випадкове ціле число в діапазоні від N до M");

const numberN = Math.abs(Math.floor(Number(prompt("Введіть ціле число N"))));
let check = true;
let numberM
while (check) {
    numberM = Math.abs(Math.floor(Number(prompt("Введіть ціле число M, більше за N"))));
    if (numberM > numberN) {
        break;
    }
    
}

function random() {
    const a = Math.random();
    const random = (Math.floor((numberM - numberN) * a + numberN)).toFixed();
    return random
}

console.log('Випадкове ціле число в діапазоні від' , numberN, ' до ', numberM, '- ', random(numberN, numberM));

console.log('_______________________________________________');

//______________________________________________________________

console.log("6 - Функція генерації випадкового паролю (тільки числа)");

let digits = Math.abs(Math.floor(Number(prompt("Введіть кількість символів (ціле число більше за 8), за яких має скадатися пароль"))));
if (digits < 8) {
    digits = 8;
}

function password() {
    let password ="";
    for (let i = 0; i < digits; i++) {
        password = password + String(Math.floor(Math.random() * 10));
    }
    return password;
}

console.log('Ваш пароль, що складається з ', digits, ' символів - ', password(digits));

console.log('_______________________________________________');

//______________________________________________________________