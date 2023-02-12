// 1. Создайте обработчик события полной загрузки страницы и добавляйте новый код только в эту функцию.
// Внимание, в этом случае невозможно будет использовать подход с указанием функции в атрибуте html.
// То есть в JS коде вам надо находить элементы, и для них создавать функции-обработчики нужных событий.
// 2. В поле "Full Name" запретите вводить цифры.

window.onload = function () { // сначала дождемся когда все элементы страницы будут загружены
// 2. В поле "Full Name" запретите вводить цифры.

    let fullName = document.getElementById('full-name');

    fullName.onkeydown = (e) => {
        let number = parseInt(e.key); // мы приводим вводимые символы к цифрам. все, кроме цифр дадут NaN
        if (!isNaN(number)) { // не NaN будет true
            return false; // и мы выйдем из функции (не цифры не введутся)
        }
    }
// 3. В поле "Your username" запретите вводить точки и запятые.

    let userName = document.getElementById('user-name');

    userName.onkeydown = (e) => {
        if (e.key === '.' || e.key === ',') { // ввод . или , дадут true
            return false; // выйдем из функции (,. не введутся)
        }
    }

// 4. При изменении значения чекбокса выводите в консоль соответствующее сообщение: “Согласен” или “Не согласен”.
    let checkBox = document.getElementById('agreement');

    checkBox.addEventListener('click', (e) => {
        if (checkBox.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен')
        }
    })

// 5. При нажатии на кнопку “Sign Up”:
// • Проверьте на существование значения в каждом текстовом поле.
// Если какое-то поле не заполнено, выведите сообщение об ошибке, используя alert.
// Сообщение должно быть следующего вида: "Заполните поле E-mail".

    let button = document.getElementById('button');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        let inputs = document.querySelectorAll('input');
        let labels = document.querySelectorAll('label');
        let isValid = true;
        for (let i = 0;isValid && i < (inputs.length-2); i++) {
            if (inputs[i].value ==='') {
                alert('Заполните поле ' + labels[i].textContent);
                isValid = false;
            } else {
                console.log(inputs[i].value); // контроль
            }
        }
    })

}