new WOW({
    animateClass: 'animate__animated'
}).init();



$(document).ready(function() {
    $('.popup-link').magnificPopup({  //подключили плагин magnificPopup
        type: 'image'                 // a с классом popup-link будут открываться на весь экран
    });
    // --------- обработка меню
    $('#burger').on('click', function () { // по клику на бургер откроется меню
        $('#menu').addClass('open');
    })

    $('#close').on('click', function () {  // по клику на крестик меню закроется
        $('#menu').removeClass('open');
    })

    $('li').click(function (event) {  // по клику на li (на самом деле на a)
        event.stopPropagation();
        $('li').removeClass('active'); // удалим у всех li класс active
        $(event.target).parent().addClass('active'); // // добавим класс active родителю a (li)
    })
    //   ---------- "Посмотреть ещё 3 проекта"
    $('#trigger').on('click', function () { // раскроем проекты по клику на "Посмотреть ещё 3 проекта"
        $('.project').css('display', 'grid');
        $('#trigger').css('display', 'none'); // и уберем саму надпись
    })

    //----------------- отслеживаем клики на кружочки по дому

    $('.tech-img').on('click', function () {  //отследим клик на любую область дома
        for (let i=1; i<6; i++) {
          $('.' + "tech-" + i + "-text").css('display', 'none'); // уберем все текстовые описания
          $('#' + "round-" + i).removeClass('active-round'); // уберем оформление нажатого кружка
      }
    })

    for (let a = 1; a < 6; a++) {
        $('#round-' + a).click(function( event ) { // отслеживаем клик по кружочку
            event.stopPropagation();
            $('#tech-' + a).addClass('active-round'); // добавили класс (изменить цвет кружка и убрать анимацию)
            $('.tech-' + a + '-text').css('display', 'block'); // отобразить тестовый блок с описанием
        });
    }

    // -------- валидация формы Заказать консультацию

    $('#submit').click(function (event) {
        let name = $('#name');
        let phone = $('#phone');
        let hasError = false; // флаг наличия ошибки
        $('.error-input').hide(); // все сообщения об ошибке скрываем
        $('input').css('border-color', '#ffffff')

        if (!name.val()) {
            name.next().show();
            name.css('border-color', 'red')
            hasError = true;
        }
        if (!phone.val()) {
            phone.next().show();
            phone.css('border-color', 'red')
            hasError = true;
        }
        if (phone.val() && isNaN(parseInt(phone.val()))) { //если phone заполнен, но в нем не цифры
            phone.css('border-color', 'red');
            phone.next().show();
            phone.next().text('В телефоне должны быть только цифры'); //меняем сообщение об ошибке
            hasError = true;
        }

        if (!hasError) {  // если ошибки не было
            loader.css('display', 'flex');  // - добавить loader
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout ",
                data: { product: product.val(), name: name.val(), phone: phone.val() } // - проверить данные
            })
                .done(function( msg ) {
                    loader.hide();
                    if (msg.success) {
                        $('form').hide();
                        $('.order-done').css('display', 'flex'); // - сделать блок order-done
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!')
                    }
                });
        }

    })
});