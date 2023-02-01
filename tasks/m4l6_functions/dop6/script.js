//Любой год, который делится на 4 без остатка, является високосным годом
// Number.isInteger(num) - возвращает true, если число целое

function leapYear(year) {
    if (Number.isInteger(year / 4)) {
        alert('Год ' + year + ' - високосный.');
    } else {
        alert('Год ' + year + ' не високосный.');
    }
}

leapYear(1981);