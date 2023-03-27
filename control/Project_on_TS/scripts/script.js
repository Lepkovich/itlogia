new WOW({
    animateClass: 'animate__animated'
}).init();



$(document).ready(function() {
    $('.popup-link').magnificPopup({  //подключили плагин magnificPopup
        type: 'image'                 // a с классом popup-link будут открываться на весь экран
    });

    $('#burger').on('click', function () { // по клику на бургер откроется меню
        $('#menu').addClass('open');
    })

    $('#close').on('click', function () {  // по клику на крестик меню закроется
        $('#menu').removeClass('open');
    })
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

    $('#round-1').click(function( event ) { // отслеживаем клик по кружочку
        event.stopPropagation();
        $('#round-1').addClass('active-round');  // добавили класс (изменить цвет кружка и убрать анимацию)
        $('.tech-1-text').css('display', 'block'); // отобразить тестовый блок с описанием
    });
    $('#round-2').click(function( event ) {
        event.stopPropagation();
        $('#tech-2').addClass('active-round');
        $('.tech-2-text').css('display', 'block');
    });
    $('#round-3').click(function( event ) {
        event.stopPropagation();
        $('#tech-3').addClass('active-round');
        $('.tech-3-text').css('display', 'block');
    });
    $('#round-4').click(function( event ) {
        event.stopPropagation();
        $('#tech-4').addClass('active-round');
        $('.tech-4-text').css('display', 'block');
    });
    $('#round-5').click(function( event ) {
        event.stopPropagation();
        $('#tech-5').addClass('active-round');
        $('.tech-5-text').css('display', 'block');
    });
    // и попробовать все их в цикл засунуть с i
});