let n = false;
let m = false;

while (!n) {
    n = Number(prompt ('Введіть перше число'));
    if (isNaN(n)) {
        continue;
    } else {
        n = Math.floor(n);
    }
}

while (!m) {
    m = Number(prompt ('Введіть друге число, більше першого'));
    if (isNaN(m)) {
        continue;
    } else if (m <= n) {
        m = false;
    } else {
        m = Math.floor(m);
    }
}

const isPair = confirm('Чи пропускати парні числа при складанні?');

let sum = 0;

for (let i = n; i <= m; i++) {
    if (i % 2 == 0 && isPair) {
        continue;
    } else {
        sum = sum + i;
    }
} 

console.log(sum);



