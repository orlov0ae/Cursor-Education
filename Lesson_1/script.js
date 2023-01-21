const jarPrice = 15.678;
const bottlePrice = 123.965;
const cupPrice = 90.2345;

console.log('Максимальна ціна товарів = ', Math.max(jarPrice, bottlePrice, cupPrice));

console.log('Мінімальна ціна товарів = ', Math.min(jarPrice, bottlePrice, cupPrice));

const priceSum = jarPrice + bottlePrice + cupPrice;
console.log('Сумарна ціна товарів = ', priceSum);

const priceSumFloor = Math.floor(jarPrice) + Math.floor(bottlePrice) + Math.floor(cupPrice);
console.log('Сума товарів, заокругленна до 100 в більшу сторону = ', Math.ceil(priceSumFloor / 100) * 100);

if (Math.floor(priceSum) % 2 == 0) {
    console.log('Cума всіх товарів (округлена в меншу сторону) є парним числом');
} else {
    console.log('Cума всіх товарів (округлена в меншу сторону) є непарним числом');
}

console.log('Сума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн., складає ', 500 - priceSum);

console.log('Середнє значення цін, округлене до другого знаку після коми складає', (priceSum / 3).toFixed(2));

const discount = Math.floor(Math.random() * 100);
console.log('Розмір знижки складає ', discount, '%');
const sumDiscount = (priceSum - priceSum * discount / 100).toFixed(2);
console.log('Сума до оплати зі знижкою становить ', sumDiscount);
console.log('Чистий прибуток, від продажу товарів, становить', (priceSum/2 - priceSum * discount / 100).toFixed(2))




