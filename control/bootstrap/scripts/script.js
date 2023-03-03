new WOW({
    animateClass: 'animate__animated'
}).init();

$('.popup-link').magnificPopup({
    type: 'image'
});

$(document).ready(function() {
    $('#btnSend').onclick(function(e) {
        e.preventDefault();
        let first_name = $('#inputName').val();
        let last_name = $('#inputSurname').val();
        let phone = $('#inputPhone').val();
        let country = $('#inputCountry').val();
        let zip = $('#inputZip').val();
        let address = $('#inputAddress').val();


        if (first_name.length< 1) {
            alert('Поле Имя не заполнено!');
        }
        if (last_name.length< 1) {
            alert('Поле Фамилия не заполнено!');
        }
        if (phone.length< 1) {
            alert('Поле Телефон не заполнено!');
        }
        if (country.length< 1) {
            alert('Поле Страна не заполнено!');
        }
        if (zip.length< 1) {
            alert('Поле Индекс не заполнено!');
        }
        zip.onkeydown = (e) => {
            let number = parseInt(e.key); // мы приводим вводимые символы к цифрам. все, кроме цифр дадут NaN
            if (isNaN(number)) { // не NaN будет true
                return false; // и мы выйдем из функции (не цифры не введутся)
            }
        }
        if (zip.length !== 6) {
            alert('В поле Индекс должно быть 6 цифр!');
        }
        if (address.length< 1) {
            alert('Поле Адрес не заполнено!');
        }
    });
});