ymaps.ready(init); 
var myMap;
var filterMap;

function init() {  
	myMap = new ymaps.Map ("map", { 
		center: [55.771771, 37.590232],  // Координаты объекта
		zoom: 12,  // Маштаб карты
		controls: []
	}); 

	filterMap = new ymaps.Map ("filter-map", { 
		center: [55.771771, 37.590232],  // Координаты объекта
		zoom: 12,  // Маштаб карты
		controls: []
	}); 

	myMap.controls.add( 
		new ymaps.control.ZoomControl() 
	);

	filterMap.controls.add( 
		new ymaps.control.ZoomControl() 
	);

	var iconWhite = ymaps.templateLayoutFactory.createClass('<div class="icon-price"><a>130 Р</a></div>');
	var iconBlue = ymaps.templateLayoutFactory.createClass('<div class="icon-price icon-price--blue">150 Р</div>');
	var iconCircle = ymaps.templateLayoutFactory.createClass('<div class="map-marker-count">25</div>');

	product1 = new ymaps.Placemark([55.788368, 37.508930], { // Координаты метки объекта
		balloonContentHeader: '<strong><a href="#">Product designer</a></strong>',
		balloonContentBody: '150 000 Р',
		balloonContentFooter: 'Веб инвест &#8226; Информационные технологии',
	}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#imageWithContent',
			// Своё изображение иконки метки.
			iconImageHref: 'img/map-icons/white.png',
			// Размеры метки.
			iconImageSize: [48, 48],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-24, -24],
			// Смещение слоя с содержимым относительно слоя с картинкой.
			iconContentOffset: [15, 15],
			// Макет содержимого.
			iconContentLayout: iconWhite
        }); // Тип метки


	product2 = new ymaps.Placemark([55.729077, 37.574813], { // Координаты метки объекта
		balloonContentHeader: '<strong><a href="#">Product designer</a></strong>',
		balloonContentBody: '100 000 Р',
		balloonContentFooter: 'Веб инвест &#8226; Информационные технологии',
		iconContent: "100 Р" // Надпись метки
	},{
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#imageWithContent',
		// Своё изображение иконки метки.
		iconImageHref: 'img/map-icons/blue.png',
		// Размеры метки.
		iconImageSize: [48, 48],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-24, -24],
		// Смещение слоя с содержимым относительно слоя с картинкой.
		iconContentOffset: [15, 15],
		// Макет содержимого.
		iconContentLayout: iconBlue
		}); // Тип метки

	product3 = new ymaps.Placemark([55.733609, 37.633715], { // Координаты метки объекта
		balloonContentHeader: '<strong><a href="#">Product designer</a></strong>',
		balloonContentBody: '130 000 Р',
		balloonContentFooter: 'Веб инвест &#8226; Информационные технологии',
		iconContent: "130 Р" // Надпись метки
	},{
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#imageWithContent',
		// Своё изображение иконки метки.
		iconImageHref: 'img/map-icons/white-circle.png',
		// Размеры метки.
		iconImageSize: [48, 48],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-24, -24],
		// Смещение слоя с содержимым относительно слоя с картинкой.
		iconContentOffset: [15, 15],
		// Макет содержимого.
		iconContentLayout: iconCircle
		}); // Тип метки

	myMap.geoObjects.add(product1);
	myMap.geoObjects.add(product2); 
	myMap.geoObjects.add(product3);

}; 