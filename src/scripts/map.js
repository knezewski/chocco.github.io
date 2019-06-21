
 ;(function(){


  ymaps.ready(init);

var placemarks = [
    {
        latitude: 55.75,
        longitude: 37.57,
        hintContent: '<div class="hint">ул.Новый Арбат, д.31/12 </div>',
        balloonContent: [
            '<div class="balloon">',
            'Самые вкусные батончики у нас . Заходите к нам по адресу... ',
            '</div>',
        ]
    },
    {
        latitude: 55.78,
        longitude: 37.62,
        hintContent: '<div class="hint">ул.Пятницкая, д.22 </div>',
        balloonContent: [
            '<div class="balloon">',
            'Самые вкусные батончики у нас . Заходите к нам по адресу... ',
            '</div>',
        ]
    },
    {
        latitude: 55.78,
        longitude: 37.59,
        hintContent: '<div class="hint">ул. Знаменка, д. 9с1</div>',
        balloonContent: [
            '<div class="balloon">',
            'Мы работаем с 9-00 до 20-00','<br>',
            'Самые вкусные батончики у нас . Заходите к нам по адресу... ',
            '</div>',
        ]
    },
    
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [55.75, 37.63],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag','dblClickZoom']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/lalbelMap.png',
                iconImageSize: [28, 35],
                iconImageOffset: [-23, -57],
                iconImageClipRect: [[415, 0], [461, 57]]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'img/lalbelMap.png',
                size: [28, 35],
                offset: [-50, -50]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}
})()