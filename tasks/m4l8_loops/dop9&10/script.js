// 9. Создайте массив цифр. С помощью цикла найдите максимальное число в этом массиве.
// 10. Создайте массив цифр. С помощью цикла найдите минимальное число в этом массиве.

let array = [
    3, 5, 8, 15, 99, -5, -100, 58
];

let maxNum=0;
let minNum=0;

for (var i in array) {
    if (array[i]>maxNum) {
        maxNum = array[i];
    } else if (array[i]<minNum) {
        minNum = array[i];
    }
}

console.log('Из массива ' +array.join('|')+ ' минимальное число: ' +minNum+ ', максимальное: ' +maxNum);