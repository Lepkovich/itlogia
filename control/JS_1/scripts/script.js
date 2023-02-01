var mercedes = {
    name:'Mercedes',
    model:'GL450',
    engine:4.0,
    year:2015,
    color:'black',
    hp:300,
    forSale:true
};
var bmw = {
    name:'BMW',
    model:'X6',
    engine:3.0,
    year:2018,
    color:'white',
    hp:313,
    forSale:false
};
var audi = {
    name:'Audi',
    model:'Q7',
    engine:3.0,
    year:2021,
    color:'blue',
    hp:249,
    forSale:true
};

var year = 2022;

/*п.2 добавляем год*/
mercedes.carAge = (year - mercedes.year);
bmw.carAge = (year - bmw.year);
audi.carAge = (year - audi.year);

/*п.3 в переменную names записываем все модели*/
var names = mercedes.name +', ' + bmw.name +', ' + audi.name;

/*п.4 считаем средний возраст всех моделей*/
var averageAge = (mercedes.carAge + bmw.carAge + audi.carAge)/3;


/*п.5 Хотя бы один автомобиль продаётся?*/
var atLeastOneForSale = (mercedes.forSale || bmw.forSale || audi.forSale);

/*п.6 Все авто младше 5 лет?*/
var allYoungerThanFive = ((mercedes.carAge<5) && (bmw.carAge<5) && (audi.carAge<5));

/*п.7 Хоть один автомобиль имеет менее 250 лошадиных сил?*/
var atLeastOneHasLittleHp = ((mercedes.hp<250) || (bmw.hp<250) || (audi.hp<250));

/*Вывод результатов в алерты*/
alert('Текущий год: ' + year);
alert('Годы выпуска: ' + 'Mercedes-'+ mercedes.year + ' BMW-' + bmw.year + ' Audi-' + audi.year);
alert('Все модели: ' + names);
alert('Средний возраст всех моделей: ' + averageAge);
alert('Хотя бы один автомобиль продаётся? ' + atLeastOneForSale);
alert('Все авто младше 5 лет? ' + allYoungerThanFive);
alert('Хоть один автомобиль имеет менее 250 лошадиных сил? ' + atLeastOneHasLittleHp);

var car = {};
car = audi;
if (car.name === 'Mercedes' && car.model === 'GL450') {
    alert('Мой любимый мерседес!')
} else {
    alert('Это - ' + car.name + ' ' + car.model)
}

if (car.carAge === 0) {
    alert('Новый автомобиль')
} else if (car.carAge < 4) {
    alert('Свежий автомобиль')
} else {
    alert('Лет этому авто: ' + car.carAge)
}

var consumption = (car.engine > 3)? 'Прожорливый автомобиль' : 'Экономичный автомобиль';
alert(consumption);

var russianColor = car.color;
switch (russianColor) {
    case 'black':
        russianColor='черный';
    break;
    case 'silver':
        russianColor='серебристый';
    break;
    case 'red':
        russianColor='красный';
    break;
    case 'white':
        russianColor='белый';
    break;
    case 'gray':
        russianColor='серый';
    break;
    case 'blue':
        russianColor='синий';
    break;
    default:
        alert('Невозможно определить цвет автомобиля');
    break;
}
alert(russianColor);

function a(b){
    return;
}
alert(a(5) );
