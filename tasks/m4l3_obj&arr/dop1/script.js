// Создайте объект с любым количеством свойств. Выведите его в консоль.
// После чего удалите одно из свойств объекта (использовать оператор delete) и выведите измененный объект опять в консоль.


var kronshtein = {
    name: 'Atlantis-45',
    brand: 'Kromax',
    weight: 45,
    maxLength: 500,
    minLength: 50,
    vesa: [100, 200, 300, 400]
};
console.log(kronshtein);

delete kronshtein.brand;

console.log(kronshtein);

