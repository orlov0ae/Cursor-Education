const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


// - Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
function getPairs() {
    const boys = [];
    const girls = [];
    for (let i = 0; i < students.length; i += 1) {
        if (students[i].slice(-1) === 'а') {
            girls.push(students[i]);
        } else {
            boys.push(students[i]);
        }
    }
    const pairs = [];
    for (let i = 0; i < boys.length; i += 1) {
        pairs.push([boys[i], girls[i]]);
    }
    return pairs
}

const pairs = getPairs(students);
console.log("Пари студентів:", pairs);

// - Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
function pairsVsProjects() {
    const pairsVsProjects = [];
    for (i = 0; i < pairs.length; i += 1) {
        pairsVsProjects.push([pairs[i].join(' і '), themes[i]]);
    }
    return pairsVsProjects;
}

const pairsProjects = pairsVsProjects(pairs, themes);
console.log("Проекти, призначені парам студенів:", pairsProjects);


// - Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
function studentsRating() {
    const studentsRating = [];
    for (i = 0; i < students.length; i += 1) {
        studentsRating.push([students[i], marks[i]]);
    }
    return studentsRating
}

const rating = studentsRating(students, marks);
console.log("Оцінки окремих студентів:", rating);

// - Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
function pairsRating() {
    const pairsRating = [];
    for (i = 0; i < pairsProjects.length; i += 1) {
        let rate = Math.floor((5 - 3) * Math.random() + 3);
        pairsRating.push([...pairsProjects[i], rate]);
    }
    return pairsRating
}

const ratingForPairs = pairsRating(pairsProjects);
console.log('Оцінки, призначені парам студентів за проект:', ratingForPairs);


//___________________________________________________
console.log('______________________________');
console.log('Перевірка початкових масивів');
console.log(students);
console.log(themes);
console.log(marks);