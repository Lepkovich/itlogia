// Создайте массив различных чисел. Подсчитайте количество цифр, которые больше 10.

let array = [
    5, 15, 23, 2, 100, 4, 11, 10, 2, 12
];
let counter = 0;
let elements = 0;

for (let i=0; i<array.length; i++) {
    if (array[i]>10) {
        counter+=1;
    }
    elements = i+1;
}
console.log('В массиве из ' + elements + ' элементов, кол-во элементов больше 10: ' + counter);
