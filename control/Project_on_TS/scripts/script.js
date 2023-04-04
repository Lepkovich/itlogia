new WOW({ // плагин для animate.css (анимация сработает не во время загрузки страницы, а когда мы долистаем до блока
    animateClass: 'animate__animated'
}).init();

$(document).ready(function() {


    $('.popup-link').magnificPopup({  //подключили плагин magnificPopup
        type: 'image'                 // a с классом popup-link будут открываться на весь экран
    });

    $(function () {
        $('.popup').magnificPopup({  // обработчик popup окна от magnificPopup
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
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

    let mediaQuery = window.matchMedia('(min-width: 768px)'); // для экрана 768px и больше mediaQuery.matches = true

    // $(window).resize(function() {
    //    mediaQuery = window.matchMedia('(min-width: 768px)'); // перезаписали mediaQuery после изменения окна
    //    $('.tech-img').off(); // убрали все обработчики кликов по дому
    // });

    // function handleTabletChange(e) {if (!e.matches)}
        if (!mediaQuery.matches) {  // отследим клики только на экранах меньше 768px
            let removeDivs = function ()  {
                for (let i = 1; i < 6; i++) {
                    $('.' + "tech-" + i + "-text").css('display', 'none'); // уберем все текстовые описания
                    $('#' + "round-" + i).removeClass('active-round'); // уберем оформление нажатого кружка
                }
            }

            $('.tech-img').on('click', function () {  //отследим клик на любую область дома
                removeDivs();
            })

            for (let a = 1; a < 6; a++) {
                $('#round-' + a).click(function (event) { // отслеживаем клик по кружочку
                    event.stopPropagation();
                    removeDivs();
                    $('#round-' + a).addClass('active-round'); // добавили класс (изменить цвет кружка и убрать анимацию)
                    $('.tech-' + a + '-text').css('display', 'block'); // отобразить тестовый блок с описанием
                });
            }
     }
    // - для отработки разных экранов нужно перезагрузка страницы!

    // mediaQuery.addListener(handleTabletChange);
    // handleTabletChange(mediaQuery);

    // ------------------ Слайдер
    $('.slider').slick({
        centerMode: true,
        dots: true,
        autoplay: false,
        centerPadding: '60px',
        slidesToShow: 3,
        variableWidth: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                Infinity: true,
                slidesToShow: 1
            },
        }]
    });

    // -------- валидация формы Заказать консультацию


    let checkbox = $('#checkbox');
    function checkCheckbox() {  // отрисовка галочки по состоянию чекбокса
    if (checkbox.is(':checked')) {
        $('.custom-checkbox-tick').css('display', 'inline-block');
    } else {
        $('.custom-checkbox-tick').css('display', 'none');
    }
    }
    checkCheckbox(); // вызов функции

    $('#custom-checkbox').click(function () { //отработка клика по квадратику чекбокса
        checkbox.trigger('click'); // вкл/выкл чекбокса
        checkCheckbox(); // перерисовываем галочку
        return false;
    })
    $('#custom-checkbox-text').click(function () { // отработка клика по тексту соглашения
        checkbox.trigger('click');
        checkCheckbox();
        return false;
    })

    $('#phone').mask('+380 (00) 00-00-000'); // маска ввода телефона на странице
    $('#phone-1').mask('+380 (00) 00-00-000'); // маска ввода телефона на popup форме

    $('#submit').click(function (event) { // клик по кнопке "Нужна консультация"
        event.preventDefault();
        let name = $('#name');
        let phone = $('#phone');
        let checkboxError = $('#checkbox-error');
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
        // ----- настроили маску ввода, поэтому следующий блок не актуален:
        // if (phone.val() && isNaN(parseInt(phone.val()))) { //если phone заполнен, но в нем не цифры
        //     phone.css('border-color', 'red');
        //     phone.next().show();
        //     phone.next().text('В телефоне должны быть только цифры'); //меняем сообщение об ошибке
        //     hasError = true;
        // }

        if (phone.val().length < 19) { //если phone заполнен не до конца (19 символов - длина всей маски)
            phone.css('border-color', 'red');
            phone.next().show();
            phone.next().text('В телефоне должно быть 12 цифр'); //меняем сообщение об ошибке
            hasError = true;
        }

        if (!checkbox.prop('checked')) {
            checkboxError.show();
            checkboxError.css('margin-top', '10px');
            hasError = true;
        }

        if (!hasError) {  // если ошибки не было
            // loader.css('display', 'flex');  // - добавить loader
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: { name: name.val(), phone: phone.val() }
            })
                .done(function( msg ) {
                    // loader.hide();
                    if (msg.success) {
                        alert('Возникла ошибка при отправке формы')
                    } else {
                        $('#consult-form').hide();
                        $('.order-done').css('display', 'flex');
                    }
                });
        }

    })

    // -------- валидация popup формы Записаться на экскурсию
    let popupForm = $('#popup-form');
    $('.popup').click(function (){
        popupForm.css('display', 'flex');
        // popupForm.css('opacity', '1');
        // popupForm.css('visibility', 'visible');

    })

    let checkbox1 = $('#checkbox-1');
    function checkCheckbox1() {  // отрисовка галочки по состоянию чекбокса
        if (checkbox1.is(':checked')) {
            $('.custom-checkbox-tick').css('display', 'inline-block');
        } else {
            $('.custom-checkbox-tick').css('display', 'none');
        }
    }
    checkCheckbox1(); // вызов функции

    $('#custom-checkbox-1').click(function () { //отработка клика по квадратику чекбокса
        checkbox1.trigger('click'); // вкл/выкл чекбокса
        checkCheckbox1(); // перерисовываем галочку
        return false;
    })
    $('#custom-checkbox-text-1').click(function () { // отработка клика по тексту соглашения
        checkbox1.trigger('click');
        checkCheckbox1();
        return false;
    })
    $('#submit-1').click(function (event) { // клик по кнопке "Записаться на экскурсию"
        event.preventDefault();
        let name1 = $('#name-1');
        let phone1 = $('#phone-1');
        let checkboxError1 = $('#checkbox-error-1');
        let hasError1 = false; // флаг наличия ошибки
        $('.error-input').hide(); // все сообщения об ошибке скрываем
        $('input').css('border-color', '#ffffff')

        if (!name1.val()) {
            name1.next().show();
            name1.css('border-color', 'red')
            hasError1 = true;
        }
        if (!phone1.val()) {
            phone1.next().show();
            phone1.css('border-color', 'red')
            hasError1 = true;
        }
        // if (phone1.val() && isNaN(parseInt(phone1.val()))) { //если phone заполнен, но в нем не цифры
        //     phone1.css('border-color', 'red');
        //     phone1.next().show();
        //     phone1.next().text('В телефоне должны быть только цифры'); //меняем сообщение об ошибке
        //     hasError1 = true;
        // }

        if (phone1.val().length < 19) { //если phone заполнен не до конца (19 символов - длина всей маски)
            phone1.css('border-color', 'red');
            phone1.next().show();
            phone1.next().text('В телефоне должно быть 12 цифр'); //меняем сообщение об ошибке
            hasError1 = true;
        }

        if (!checkbox1.prop('checked')) {
            checkboxError1.show();
            checkboxError1.css('margin-top', '10px');
            hasError1 = true;
        }

        if (!hasError1) {  // если ошибки не было
            // loader.css('display', 'flex');  // - добавить loader
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: { name: name1.val(), phone: phone1.val() }
            })
                .done(function( msg ) {
                    // loader.hide();
                    if (msg.success) {
                        $('#signup-form').hide();
                        $('.order-done-1').css('display', 'block');
                    } else {
                        alert('Возникла ошибка при отправке формы')
                    }
                });
        }

    })
});