// У цьому завданні вам необхідно створити клас Student та розробляти методи
// всередині цього класу.


class Student {
    constructor (university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marksArr = [];
        this.study = true;
    }
    
    getInfo() {
        return console.log(`Студент ${this.course} ${this.university} ${this.fullName}`);
    }

    get marks() {
        return this.marksArr;
    }

    set marks(mark) { 
        if (this.study) {
            this.marksArr.push(mark);
        }
        else if (!this.study) {
            console.log("Студента відраховано");
        }
    }

    getAverageMark() {
        const sumMark = this.marksArr.reduce((acum, mark) => {
            acum = acum + mark;
            return acum;
        }, 0)
        return sumMark / this.marksArr.length;
    }

    dismiss() {
        this.marksArr = null;
        this.study = false;
    }

    recover() {
        this.marksArr = [];
        this.study = true;
        return console.log("Студента відновлено");
    }
    
};






// 1. У стдентів повинні бути наступні властивості: university, course, fullName, вони
// передаються при створенні студента(в конструктор).

const studentFirst = new Student("Вищої Школи Психотерапії м.Одеса", "1го курсу", "Остап Родоманський Бендер");


// 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії
// м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про
// курс, учбовий заклад та імені

studentFirst.getInfo();


// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

// 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту.
// Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5,
// 4, 4, 5, 5]

studentFirst.marks = 5;
studentFirst.marks = 4;
studentFirst.marks = 4;
studentFirst.marks = 5;
studentFirst.marks = 5;
console.log("Оцінки студента: ", studentFirst.marks);

// 5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

console.log("Середня оцінка студента - ", studentFirst.getAverageMark());

// 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу
// – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок,
// просто повертається завжди null замість масиву оцінок)

studentFirst.dismiss();
studentFirst.marks = 5;
studentFirst.marks = 4;
studentFirst.marks = 4;
studentFirst.marks = 5;
studentFirst.marks = 5;
console.log("Оцінки студента: ", studentFirst.marks);

// 7. Створіть метод this.recover, який дозволить поновити студента

studentFirst.recover();
studentFirst.marks = 5;
studentFirst.marks = 4;
studentFirst.marks = 4;
studentFirst.marks = 5;
studentFirst.marks = 5;
console.log("Оцінки студента: ", studentFirst.marks);

// Advanced

// 1. Створіть новий клас BudgetStudent, який повністю наслідує клас Student

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        setInterval(() => this.getScholarship(), 30000);
    }

    getScholarship() {
        if (!this.study) {
            return console.log("Вас відраховано! Яка може бути стипендія?");
        } else if (this.getAverageMark() > 4 && this.study) {
            return console.log("Ви отримали 1400 грн стипендії");
        } else {
            return console.log("Ви не отримали стипендію");
        }
    }

}


const studentSecond = new BudgetStudent("Cursor", "FEA курсу", "Студентко Студент Студентович");

// 2. Бюджетний студент може отримати стипендію за допомогою методу
// this.getScholarship. Отримання стипендії супроводжується виведенням інформації
// в консоль: Ви отримали 1400 грн. стипендії

// 3. Метод отримання стипендії автоматично викликається кожні 30 секунд післе
// створення об'єкту. Підказка: викликайте його в constructor

// 4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище
// або дорівнює 4.0

// 5. Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно
// :) )

studentSecond.getInfo();

studentSecond.marks = 4;
studentSecond.marks = 4;
studentSecond.marks = 4;
studentSecond.marks = 4;
studentSecond.marks = 5;
studentSecond.getScholarship();


studentSecond.marks = 3;
studentSecond.marks = 3;
studentSecond.marks = 3;
studentSecond.marks = 4;
studentSecond.marks = 3;
studentSecond.getScholarship();


studentSecond.dismiss();
studentSecond.getScholarship();