'use strict';
$(document).ready(function() {
$('#burger').on('click', function () {
    $('#menu').addClass('open');
})

$('#menu').on('click', function () {
        $('#menu').removeClass('open');
})

let loader = $('.loader');

$('#submit').click(function () { // обработчик клика по кнопке
    let product = $('#product');
    let name = $('#name');
    let phone = $('#phone');
    let hasError = false; // флаг наличия ошибки изначально на false

    $('.error-input').hide(); // прячем все сообщения об ошибке до проверки
    $('input').css('border-color', 'rgb(130, 19, 40)')

    if (!product.val()) { // если input пустой
        product.css('border-color', 'red'); // рамку input делаем красной
        product.next().show(); // показываем сообщение (следующий за input div)
        hasError = true; // выставляем флаг о наличии ошибки
    }
    if (!name.val()) {
        name.css('border-color', 'red');
        name.next().show();
        hasError = true;
    }
    if (!phone.val()) {
        phone.css('border-color', 'red');
        phone.next().show();
        hasError = true;
    }
    if (phone.val() && isNaN(parseInt(phone.val()))) { //если phone заполнен, но в нем не цифры
        phone.css('border-color', 'red');
        phone.next().show();
        phone.next().text('В телефоне должны быть только цифры'); //меняем сообщение об ошибке
        hasError = true;
    }

    if (!hasError) {  // если ошибки не было
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout ",
            data: { product: product.val(), name: name.val(), phone: phone.val() }
        })
            .done(function( msg ) {
                loader.hide();
                if (msg.success) {
                    $('form').hide();
                    $('.order-done').css('display', 'flex');
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!')
                }
            });
    }
})
});