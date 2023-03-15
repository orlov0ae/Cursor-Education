const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};

const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};

const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};


// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки
// податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
// викликатись через call та працювати з даними через this

const getMyTaxes = function (salary) {
    return this.tax * salary;
}

console.log("1. Податок, сплачений в Україні з суми 5000 = ", getMyTaxes.call(ukraine, 5000));

console.log("__________________________");

// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у
// середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).
// Функція повинна викликатись через call та працювати з даними через this

const getMiddleTaxes = function () {
    return this.tax * this.middleSalary;
}

console.log("2.1 Середній податок ІТ спеціаліста, сплачений в Україні складає: ", getMiddleTaxes.call(ukraine));
console.log("2.2 Середній податок ІТ спеціаліста, сплачений в Латвії складає: ", getMiddleTaxes.call(latvia));
console.log("2.3 Середній податок ІТ спеціаліста, сплачений в Литві складає: ", getMiddleTaxes.call(litva));

console.log("__________________________");

// 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього
// податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
// Функція повинна викликатись через call та працювати з даними через this

const getTotalTaxes = function () {
    return this.tax * this.middleSalary * this.vacancies;
}

console.log("3.1 Розмір податків, сплачений ІТ фахівцями в Україні складає: ", getTotalTaxes.call(ukraine));
console.log("3.2 Розмір податків, сплачений ІТ фахівцями в Латвії складає: ", getTotalTaxes.call(latvia));
console.log("3.3 Розмір податків, сплачений ІТ фахівцями в Литві складає: ", getTotalTaxes.call(litva));

console.log("__________________________");

// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: {
// salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary –
// генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в
// залежності від вибраної країни та значення salary.
//     profit = salary - taxes;
// для виводу в консоль кожні 10 секунд використайте setInterval

const getMySalary = function () {
    const summury = {
        
    };
    const salary = (Math.floor((2000 - 1500) * Math.random() + 1500)).toFixed(2);
    const taxes = (salary * this.tax).toFixed(2);
    summury.salary = salary;
    summury.taxes = taxes;
    summury.profit = (salary - taxes).toFixed(2);

    return summury;
}

const interval = setInterval(() => console.log("Моя заробітна плата в Україні складає: ", getMySalary.call(ukraine)), 10000);

