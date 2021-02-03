// Определение GEO пользователя
window.onload = function () {
  jQuery("#user-city").text(ymaps.geolocation.city); 
};


// Настройки Slick-слайдера
$(document).ready(function(){
  $('.slider-testimonials').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
});


// Настройки Slick-слайдера
$(document).ready(function(){
  $('.slider-team').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
});



// Яндекс Карта 
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
              center: [55.766238, 37.605726],
              zoom: 13
        });
    // Создаем геообъект
    var geoObjectOffice = new ymaps.Placemark([55.765954, 37.565147], {
            iconCaption: 'Fixper (офис)',
            balloonContent: '<strong>Москва, Расторгуевский переулок, 16с1</strong> <br>8:00—21:00 без выходных'
            }, {
            preset: 'islands#dotIcon',
            iconColor: '#96317D'
        });
        var geoObjectCallcenter = new ymaps.Placemark([55.774715, 37.625154], {
          iconCaption: 'Fixper (диспетчерская)',
          balloonContent: '<strong>Москва, Троицкая улица, 10с1</strong> <br>7:00—23:00 без выходных'
          }, {
          preset: 'islands#dotIcon',
          iconColor: '#96317D'
      });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(geoObjectOffice)
                  .add(geoObjectCallcenter);
};


// Кнопка "Показать все цены" 

$( '.page-section-price__show-more' ).click(function() {
  $(".table__price-show-more").slideDown("slow");
  $(".page-section-price__show-more").hide();
});