// Создайте объект с любым количеством свойств. Выведите в консоль строку "В объекте N свойств.
// Это свойства: D", где N - количество свойств у этого объекта, а D - массив свойств.

var kronshtein = {
    name: 'Atlantis-45',
    brand: 'Kromax',
    weight: 45,
    maxLength: 500,
    minLength: 50,
    vesa: [100, 200, 300, 400]
};

console.log('В объекте ' + Object.keys(kronshtein).length + ' свойств. Это свойства: ' + Object.keys(kronshtein));
