new WOW({
    animateClass: 'animate__animated'
}).init();

$('.popup-link').magnificPopup({
    type: 'image'
});

$(document).ready(function() {

    $('#inputZip').keydown(function (e) { // проверяем поле Индекс на вводимые символы
        let number = parseInt(e.key); // мы приводим вводимые символы к цифрам. все, кроме цифр дадут NaN
        if (isNaN(number)) { // любая нецифра (NaN) будет true
            return false; // и мы выйдем из функции (не цифры не введутся)
        }

    });

    $('#btnSend').bind('click', function (e) {
        e.preventDefault();
        for (let a = 1; a < $('input').length; a++) { // первый input не трогаем (он в шапке сайта
            if ($('input').eq(a).val() < 1) {  // если в поле нет ни одного символа, выведем alert
                alert('Заполните все поля');
                return false;
            }
            if ($('#inputZip').val().length !==6) {
                alert('В поле Индекс должно быть 6 цифр');
                return false;
            }
        }
        $('#makeOrder').addClass("hideElement");
        $('#thankYou').removeClass("hideElement");

    });
});

