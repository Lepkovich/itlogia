// Создайте функцию, которая принимает объект и строку - название свойства.
// Функция должна проверять есть ли переданное свойство у переданного объекта и выводить в консоль соответствующее сообщение.
// obj.hasOwnProperty('key') - проверит есть ли указанное свойство в объекте

var kronshtein = {
    name: 'Atlantis-45',
    brand: 'Kromax',
    weight: 45,
    maxLength: 500,
    minLength: 50,
    vesa: [100, 200, 300, 400]
};

function check(obj, string) {
    if (obj.hasOwnProperty(string)) {
        console.log('В объекте ' + (obj) + ' есть свойство ' + string);
        console.log(obj);
    } else {
        console.log('Свойство не найдено');
        console.log(obj);
    }
}

var a = 'kronshtein';
var b = 'wall';
var c = 'brand';
var d = 'angle';

// check(b, d);
check(kronshtein, c);
console.log(kronshtein);
