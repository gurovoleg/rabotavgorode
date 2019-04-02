ymaps.ready(init); 

function init() {  
	var myMap = new ymaps.Map ("companyMap", { 
		center: [55.771771, 37.590232],  // Координаты объекта
		zoom: 10,  // Маштаб карты
		controls: []
	}); 

	var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
		iconLayout: 'default#image',
		iconImageHref: '../img/map-icons/marker.png',
		iconImageSize: [28, 32]
	});

	myMap.geoObjects.add(myPlacemark);
}; 