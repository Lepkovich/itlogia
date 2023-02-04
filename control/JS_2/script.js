//Создайте массив clients для хранения информации о клиентах интернет-магазина:

let clients = [
      {
        firstName: 'Александр',
        lastName: 'Иванчук',
        date: '11-29-1990',
        phone: '8 (929) 988-90-09',
        amounts: [2546,2098,764,7266]
    },
      {
        firstName: 'Анатолий',
        lastName: 'Стаценко',
        date: '02-12-1987',
        phone: null,
        amounts: [563, 8287, 889]
    },
      {
        firstName: 'Марина',
        lastName: 'Петрова',
        date: '07-26-1997',
        phone: '8 (899) 546-09-08',
        amounts: [6525, 837, 1283, 392]
    },
      {
        firstName: 'Иван',
        lastName: 'Караванов',
        date: '09-12-1999',
        phone: null,
        amounts: [7634, 283, 9823, 3902]
    },
      {
        firstName: 'Оксана',
        lastName: 'Абрамова',
        date: '01-24-2002',
        phone: '8 (952) 746-99-22',
        amounts: [342, 766, 362]
    },
]

//1. Создайте пустой объект newClient.
/*
let newClient = {};

// 2. Запросите у пользователя по порядку все данные о клиенте - имя, фамилию, дату рождения, телефон.
// При запросе данных сохраняйте их в соответствующие свойства объекта newClient - firstName, lastName, date, phone.
// Дату запросите в формате мм-дд-гггг (месяц-день-год).

newClient.firstName= prompt('Как вас зовут?');
newClient.lastName = prompt(newClient.firstName + ', Ваша фамилия?');
let month = prompt(newClient.firstName + ', введите номер месяца рождения (мм)');
let day = prompt(newClient.firstName + ', введите день рождения (дд)');
let year= prompt(newClient.firstName + ', введите год рождения (гггг)');
let date = month + '-' + day + '-' + year;
newClient.date = date;
newClient.phone = prompt(newClient.firstName + ', введите Ваш телефон в формате 8 (ххх) ххх-хх-хх');

// 3. В качестве свойства amounts для объекта newClient установите пустой массив.
newClient.amounts = [];

// 4. Затем создайте цикл while, который будет работать следующим образом: пока пользователь отвечает «ОК» на вопрос «Добавить покупку для клиента X?»
// (где X - имя клиента из объекта newClient), программа должна запрашивать сумму покупки и добавлять ее в массив amounts объекта newClient.
// Соответственно, если пользователь нажмет «Отмена», программа должна прекратить выполнение цикла.

while (confirm('Добавить покупку для клиента ' + newClient.firstName + '?')) {
  let amount = parseInt(prompt('Введите сумму покупки'));
  newClient.amounts.push(amount);
  console.log(newClient.amounts);
}

// 5. Добавьте получившийся объект newClient в массив clients

clients.push(newClient);
console.log(clients);
*/

// Часть 2
// 1. Создайте функцию fullName, которая принимает объект и возвращает имя и фамилию в одной строке – «Иван Иванов».
// Проверить функцию можно вызвав ее для первого объекта и получив имя и фамилию первого клиента.

function fullName(obj) {
  return obj.firstName +' '+ obj.lastName;
}

console.log(fullName(clients[0]));

/*
2. Создайте функцию getBirthday, которая на основе даты рождения клиента выдает строку в нужном формате: «1 мая» или «1 мая (сегодня)».
Описание функции:
- Принимает строку (не объект) с датой рождения в формате мм-дд-гггг
- Преобразует полученную строку в объект типа new Date, и с помощью функции toLocaleString этого объекта формирует строку в формате «число месяц» (к примеру: «14 января», «23 марта»).
- Проверяет, сегодня ли день рождения у клиента, если да, то добавляет в итоговую строку « (сегодня)». Для этого можно сравнить дни и месяцы в имеющихся объектах дат.
- Возвращает из функции созданную строку
Пример работы функции:
    В функцию попадает строка “07-01-2000”. Если сегодня 1 июля, то функция вернет строку «1 июля (сегодня)». Если же сегодня не 1 июля - функция вернет «1 июля».
Проверить функцию можно вызвав ее для свойства даты первого объекта и получив отформатированную дату.
 */
// let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(date.toLocaleString('de-DE', options));

function getBirthday(string) {
  let month = parseInt(string.slice(0, 2));   // возьмем две цифры месяца из строки
  month = month - 1;            // месяцы начинаются с 0, поэтому май это 5-1=4
  let day = parseInt(string.slice(3, 5));      // возьмем две цифры дня из строки

  let newDate = new Date();              // передаем в newDate текущую дату
  let todayMonth = newDate.getMonth();  // берем текущий месяц
  let todayDay = newDate.getDate();     // берем текущий день
  let consoleDate = newDate.toLocaleString('ru-RU', {day: '2-digit', month: 'long'});

  if (month === todayMonth && day === todayDay) {
    return consoleDate + ' (сегодня)';
  }
  newDate.setMonth(month, day);     // передаем в newDate месяц и дату из string
  return newDate.toLocaleString('ru-RU', {day: '2-digit', month: 'long'});
}



console.log(getBirthday(clients[0].date));
console.log(getBirthday('02-05-1980')); // контроль
