// Создайте функцию, которая принимает два параметра - массив строк и строку.
// Функция должна искать в массиве указанную строку и в зависимости от того, найдена ли она, возвращать true или false.

let array = [
    'дом',
    'улица',
    'квартира',
    'подъезд',
    'дорога',
    'город'
]

let findString = function (array, string) {
    for (let i of array) {
        if (i===string) {
            return true;
        }
    }
    return false;
}

console.log(findString(array, 'квартира'));
console.log(findString(array, 'студия'));

