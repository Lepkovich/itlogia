// Создайте функцию, которая принимает массив и выводит его последнее значение
// (Подумайте, как узнать последний индекс массива, имея его длину).
// Если массив пустой - вывести сообщение об этом.
// Array.isArray() - true если массив
// .join - выводит в строку все элементы массива. В скобках можно указать разделитель.
// .length - отдает кол-во элементов в массиве

function lastElement(array) {
    if (Array.isArray(array) && array.length > 0) {
        var last = array.length - 1;
        console.log('В массиве ' + array.join('-') + ' последний элемент: ' + array[last]);
    } else if (Array.isArray(array)) {
        console.log('Массив пустой');
    } else {
        console.log('Переменная ' + array + ' не массив.');
    }
}

var a = [1,2,3,4,5];
var b = [];
var c = 525;
var d = 'первый';

lastElement(a);
lastElement(b);
lastElement(c);
lastElement(d);
