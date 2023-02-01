// Создайте функцию, которая принимает массив и выводит его первое значение.
// Если массив пустой - вывести сообщение об этом.
// Array.isArray() - true если массив
// .join - выводит в строку все элементы массива. В скобках можно указать разделитель.
// .length - отдает кол-во элементов в массиве

function firstElement(array) {
    if (Array.isArray(array) && array.length > 0) {
        console.log('Первый элемент массива ' + array.join('-') + ' : ' + array[0]);
    } else if (Array.isArray(array)){
        console.log ('Массив ' + array + ' - пустой.');
    } else {
        console.log(array + ' - это не массив :(')
    }
}

var a = [1,2,3,4,5];
var b = [];
var c = 525;
var d = 'первый';

firstElement(a);
firstElement(b);
firstElement(c);
firstElement(d);



