// в одной миле 1609,34 метров. В одном метре 0.000621371 миль
function convertToMiles(metr) {
    return metr * 0.000621371;
}

var m = 10000; // здесь пишем кол-во метров, которые нужно перевести
var miles = convertToMiles(m);
alert('В ' + m + ' метрах - ' + miles.toFixed(3) + ' миль.');
// .toFixed(n) - округляет переменную до n знаков после запятой
