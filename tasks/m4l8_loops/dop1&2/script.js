// Создайте массив чисел.
// 1 . Выведите все нечетные числа этого массива.
// 2 . Вывести все четные числа массива

let array=[];
while (confirm('Добавить число в масcив?')) {
    let digit = parseInt(prompt('Введите число'));
    array.push(digit);
}
console.log('Вы ввели следующие числа: ' + array);

// отдельный цикл для поиска нечетных чисел
/*
let arrayOdd=[];
for (let i=0; i<array.length; i++) {
     if (array[i] % 2 !== 0) {
         arrayOdd.push(array[i]);
     }
}
console.log('Среди них нечетные: ' + arrayOdd);
*/

// цикл сразу для разделения на нечетные/четные
let arrayEven=[];
let arrayOdd=[];
for (let i in array) {
    (array[i] % 2 !== 0)? arrayOdd.push(array[i]):arrayEven.push(array[i]);
}
console.log('Среди них четные: ' + arrayEven + ', а нечетные: ' + arrayOdd);

