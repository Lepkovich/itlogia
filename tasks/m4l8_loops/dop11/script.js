// Создать функцию, которая считает сумму всех четных чисел в переданном ей массиве.

let sum=0;

let evenSum = function (array) {
    for (let i in array) {
        if (array[i]%2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}

let array = [
    2,3,4,5,6,7,8
]

console.log('Сумма четных чисел массива ' + array.join('|') + ' равна: ' + evenSum(array));
