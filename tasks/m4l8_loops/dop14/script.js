// Создать объект и попробовать работу цикла for in на нем.

let obj = {
    numbers: [1,2,3,4,5],
    strings: ['one', 'two', 'three', 'four', 'five'],
    state: true,
    number: 10,
    string: '10',
}

for (let prop in obj) {
    console.log(prop + ' = ' + obj[prop]);
}