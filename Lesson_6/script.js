const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];




// 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"]
// - яка повертає список предметів для конкретного студента. Зверніть увагу –
// назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл


function getSubjects(student) {

    const subj = Object.keys(student.subjects).map((subject) => {
        return subject[0].toUpperCase()+ subject.slice(1).replaceAll("_", " ");
    })
    return subj;
}

console.log('1.1. Список предметів студента "', students[0].name, '" - ', getSubjects(students[0]));
console.log('1.2. Список предметів студента "', students[1].name, '" - ', getSubjects(students[1]));
console.log('1.3. Список предметів студента "', students[2].name, '" - ', getSubjects(students[2]));

console.log('____________________');


// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню
// оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у
// попередніх домашніх завданнях :)


function getAverageMark(student) {
    
    const allMarks = Object.values(student.subjects);
   
    const allMarksConcat = allMarks[0].concat(allMarks[1], allMarks[2]);
    
    const marksSum = allMarksConcat.reduce((sum, mark) => {
        return sum + mark;
    }, 0)
    
    return (marksSum / allMarksConcat.length).toFixed(2);
}

console.log('2.1. Середня оцінка студента "', students[0].name, '" - ', getAverageMark(students[0]));
console.log('2.2. Середня оцінка студента "', students[1].name, '" - ', getAverageMark(students[1]));
console.log('2.3. Середня оцінка студента "', students[2].name, '" - ', getAverageMark(students[2]));

console.log('____________________');


// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya",
// "averageMark": 3.79} – яка повертає інформацію загального виду по переданому
// студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути
// виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo(student) {
    const studentInfo = {

    };

    studentInfo.name = student.name;
   
    studentInfo.averageMark = getAverageMark(student);

    studentInfo.course = student.course;

    return studentInfo;
}

console.log('3.1. Інформація про студетна: ', getStudentInfo(students[0]));
console.log('3.2. Інформація про студетна: ', getStudentInfo(students[1]));
console.log('3.3. Інформація про студетна: ', getStudentInfo(students[2]));

console.log('____________________');


// 4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка
// повертає імена студентів у алфавітному порядку.

function getStudentsNames(students) {
    return students.map((student) => student.name).sort();
}

console.log('4. Перелік студентів:', getStudentsNames(students));


// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого
// студента зі списку по показнику середньої оцінки.

function getBestStudent (students) {
    const studentsRate = students.map((student) => {
        return {
            name: student.name,
            rate: getAverageMark(student)
        };
    });
    

    const BestStudent = studentsRate.sort((a,b) => {
	return b.rate - a.rate;
});
    return BestStudent[0].name;
}

console.log('5. Найкращий студент: ', getBestStudent (students));

console.log('____________________');


// 6. Cтворіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
// повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх
// повторень.

function calculateWordLetters(word) {

    const letterCounts = {

    };
  
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        
    if (!letterCounts[letter]) {
      letterCounts[letter] = 0;
    }
        
    letterCounts[letter]++;
  }
  
  return letterCounts;
}


console.log('6. Калькуляція слова "тест"', calculateWordLetters("тест"));

console.log('____________________');