// Настройки Slick-слайдера для раздела .page-section-testimonials
$(document).ready(function(){
  $('.slider-testimonials').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false
        }
      }
    ]
  });
});


// Настройки Slick-слайдера для раздела .page-section-team
$(document).ready(function(){
  $('.slider-team').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
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

// Определение ГЕО пользователя для отображения города в .geo-tag
window.onload = function () {
  jQuery("#user-city").text(ymaps.geolocation.city); 
};


// Яндекс Карта для раздела .page-section-contacts
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
              center: [55.766238, 37.605726],
              zoom: 11
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


// Кнопка "Показать все цены" в .page-section-price__show-more
$( '.page-section-price__show-more' ).click(function() {
  $(".table__price-show-more").slideDown("slow");
  $(".page-section-price__show-more").hide();
});


// Попап окно "Вызов мастера" .popup


var popup = document.getElementById("popup");
var popupButton = document.querySelector(".popup-button");
var popupButtonHeader = document.querySelector(".popup-button-header");
var popupButtonFooter = document.querySelector(".popup-button-footer");
var popupCloseButton = document.getElementsByClassName("popup__close")[0];

// When the user clicks on the button, open the modal
popupButton.onclick = function() {
  popup.style.display = "block";
}

// When the user clicks on the button in the header, open the modal
popupButtonHeader.onclick = function() {
  popup.style.display = "block";
}

// When the user clicks on the button in the footer, open the modal
popupButtonFooter.onclick = function() {
  popup.style.display = "block";
}


// When the user clicks on (x), close the modal
popupCloseButton.onclick = function() {
  popup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  console.log(event.target);
  if (event.target == popup) {
    popup.style.display = "none";
  }
}