ymaps.ready(init); 

function init() {  
	var myMap = new ymaps.Map ("jobMap", { 
		center: [59.961953, 30.402106],  // Координаты объекта
		zoom: 14,  // Маштаб карты
		controls: []
	}); 

	var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
		iconLayout: 'default#image',
		iconImageHref: '../img/map-icons/marker-blue.svg',
		iconImageSize: [28, 32]
	});

	myMap.geoObjects.add(myPlacemark);
}; 

