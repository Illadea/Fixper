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


// Выбор проблемы в .page-section-online-diagnostics
$('.page-section-online-diagnostics__problem-item').click(function() {
  $(".page-section-online-diagnostics__inner-choose-problem").hide();
  $(".page-section-online-diagnostics__inner-problem-choosen").show("slow");
});
// Выбрать другую проблему в .page-section-online-diagnostics
$('.page-section-online-diagnostics__subtitle-choose-problem').click(function() {
  $(".page-section-online-diagnostics__inner-problem-choosen").hide();
  $(".page-section-online-diagnostics__inner-choose-problem").show("slow");
});
// Прогресс-бар в .page-section-online-diagnostics
if ($(window).width() > 450) {
  $(function() {
    $('.problem-answer__progress-bar').easyPieChart({
      barColor: '#FFC464',
      trackColor: '#e0dcdc',
      scaleColor: false,
      lineCap: 'round',
      lineWidth: 7,
      size: 100,
      animate: {
        duration: 5000,
        enabled: true
      },
    });
  });
}
else {
  $(function() {
    $('.problem-answer__progress-bar').easyPieChart({
      barColor: '#FFC464',
      trackColor: '#e0dcdc',
      scaleColor: false,
      lineCap: 'round',
      lineWidth: 7,
      size: 80,
      animate: {
        duration: 5000,
        enabled: true
      },
    });
  });
}


// Кнопка "Показать все цены" в .page-section-price__show-more
$('.page-section-price__show-more').click(function() {
  $(".table__price-show-more").slideDown("slow");
  $(".page-section-price__show-more").hide();
});


// Попап окно "Вызов мастера"
const popup = document.getElementById("popup"),
      popupBtn = document.querySelectorAll(".popup-button"),
      popupCloseBtn = document.querySelectorAll(".popup__close"),
      popupThankYou = document.getElementById("popup-thank-you");

function showPopup() {
    popupBtn.forEach(item => {
    item.addEventListener('click', () => {
      popup.style.display = "block";
    });
  });
}

function closePopup() {
  popupCloseBtn.forEach(item => {
    item.addEventListener('click', () => {
      popup.style.display = "none";
      popupThankYou.style.display = "none";
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target == popupThankYou) {
      popupThankYou.style.display = "none";
    } else if (event.target == popup) {
      popup.style.display = "none";
    }
  });
}

showPopup();
closePopup();

// Форма обратной связи
$(document).ready(function() {
	//E-mail Ajax Send
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
      popup.style.display = "none";
      popupThankYou.style.display = "block";
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});


// Яндекс Карта для раздела .page-section-contacts
ymaps.ready(init);
function init() {
      ymaps.geolocation.get({
        // Зададим способ определения геолокации
        // на основе ip пользователя.
        provider: 'yandex',
        // Включим автоматическое геокодирование результата.
        autoReverseGeocode: true
    }).then(function (result) {
        // Выведем результат геокодирования.
        let geoTag = document.getElementById('user-city');
        geoTag.innerHTML = result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.AdministrativeArea.AdministrativeAreaName;
    });
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
