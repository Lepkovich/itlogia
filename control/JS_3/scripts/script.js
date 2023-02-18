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

    button.addEventListener('click', SingUp);

    function SingUp(e) {
        e.preventDefault();
// • Заменить слушатель события для кнопки «Sign In»: нужно проверить только то, что оба поля (Username и Password) заполнены.
// Если какое-то из полей не заполнено - вывести ошибку. Если оба заполнены - вывести через alert сообщение "Добро пожаловать, username!",
// где username - значение из соответствующего поля.
        if (button.value === 'Sign In') {  // Если кнопка уже Sign In
                let userName=document.getElementById('user-name');
                let password=document.getElementById('password');
                if (userName.value === '' || password.value === '') {
                    alert('Поля не заполнены!');
                    return;
                } else {
                    alert('Добро пожаловать, ' + userName.value + '!');
                    return;
                }
        }
        let inputs = document.querySelectorAll('input');
        let labels = document.querySelectorAll('label');
        let isValid = true;
        for (let i = 0;isValid && i < (inputs.length-2); i++) {
            if (inputs[i].value ==='') {
                alert('Заполните поле ' + labels[i].textContent);
                isValid = false;
            }
        }
// • Проверьте совпадают ли пароли из двух текстовых полей. Если пароли не совпадают, выведите сообщение об ошибке, используя alert.
        let repeatPassword = document.getElementById('repeat-password');
        let password = document.getElementById('password');
        if (repeatPassword.value !== '' && repeatPassword.value !== password.value) {
            alert('Пароли не совпадают, повторите ввод');
            repeatPassword.value = '';
            isValid = false;
        }
// • Проверьте выбран ли чекбокс. Если чекбокс не выбран, выведите сообщение об ошибке, используя alert.
        if (!checkBox.checked && isValid) {
            alert('Вы не поставили галочку на согласие обработки данных');
            isValid = false;
        }
// • Если код прошёл все проверки успешно - должен появиться попап с текстом «На вашу почту выслана ссылка, перейдите по ней,
// чтобы завершить регистрацию» и кнопкой «ОК».
// При нажатии на кнопку «ОК» окно закрывается, форма очищается и пользователя перебрасывает на страницу логина (см. п.6).
// Модального окна в макете нет, его нужно создать самостоятельно, соблюдая общую стилистику макета.

        if (isValid) {
            let popup = document.getElementById('popup'),
                closePopup = document.getElementById('close-popup');
            popup.style.display='flex';
            closePopup.addEventListener("click", signIn); // по клику на ОК с ID 'close-popup' запустим SignIn
            closePopup.onclick = function () { // и спрячем popup
                popup.style.display='none';
            }
        }
    }

// • Пароль должен содержать не менее 8 символов. Если пароль короче, то выведите сообщение об ошибке через alert.

    password.addEventListener("focusout", (e) => {
        if (password.value !== '' && password.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов');
            password.value = '';
        }
    })

// 6. При нажатии на ссылку «Already have an account?», а также на кнопку «ОК» в попапе реализовать имитацию перехода на страницу логина.
// Для этого с исходной страницей с помощью JS нужно произвести следующие действия:
// • Текст "Get your free account" заменить на "Log in to the system".
// • Блоки с полями "Full Name", "E-mail", "Repeat Password" удалить.
// • Блок с чекбоксом также удалить.
// • Текст в кнопке заменить на «Sign In».
// • Ссылку "Already have an account?" удалить.
// • Заменить слушатель события для кнопки «Sign In»: нужно проверить только то, что оба поля (Username и Password) заполнены.
// Если какое-то из полей не заполнено - вывести ошибку.
// Если оба заполнены - вывести через alert сообщение "Добро пожаловать, username!", где username - значение из соответствующего поля.

    let haveAccount = document.getElementById('have-account');

    haveAccount.addEventListener("click", signIn); // по клику на 'Already have an account?' запускаем функцию SignIn
    function signIn(e) {
        document.getElementById('title').innerText='Log in to the system'; // меняем заголовок
        let labels = document.querySelectorAll('label');
        labels.forEach((item)=>{
            if (item.className === 'form-label sign-up') {
                return;
            }
            item.remove(); // удаляем все label, кроме тех, у кого в class есть sign-up
        })
        let inputs = document.querySelectorAll('input');
        inputs.forEach((item)=>{
            if (item.id === 'user-name' || item.id === 'password') {
                item.value = '';
                return;
            } else if (item.id === 'button') {
                return;
            }
            item.remove(); // удаляем ненужные нам input
        })
        document.getElementById('button').value='Sign In'; // Поменяли кнопку на Sign In
        document.getElementById('have-account').remove(); // Удалили ссылку 'Already have an account?'

    }

}