// в одной миле 1609,34 метров. В одном метре 0.000621371 миль
function convertMetrMiles(number, lenth) {
    if (lenth==='миль') {
    alert('В ' + number + ' милях - ' + (number * 1609.34) + ' метров.')  ;
    } else if (lenth==='метры') {
        alert('В ' + number + ' метрах - ' + (number * 0.000621371).toFixed(3) + ' миль.')  ;
    } else {
        alert('Введите метры или мили');
    }
}

var number = 100; // здесь пишем число, которое нужно перевести
var lenth = 'метры'; // здесь пишем что будем переводить

convertMetrMiles(number, lenth);
// .toFixed(n) - округляет переменную до n знаков после запятой
