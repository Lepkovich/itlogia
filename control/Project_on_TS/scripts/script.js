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
    $('.tech-img').on('click', function () {
      for (let i=1; i<6; i++) {
          //$('.tech-(i)-text')
      }
    })
    $('#round-1').on('click', function (){
        $('#tech-1').addClass('active-round');  // добавили класс (изменить цвет кружка и убрать анимацию)
        $('.tech-1-text').css('display', 'block'); // отобразить описание

    })
});