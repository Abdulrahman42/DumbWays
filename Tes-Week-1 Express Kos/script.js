const houses = [{
        name: 'Rumah Bang Haji',
        address: 'Jalan Kaliurang no 34 Yogyakarta',
        longitude: -6.291389,
        latitude: 106.730367,
        price: 'Rp.700.000',
        cover: 'https://id2-cdn.pgimgs.com/listing/16267193/UPHO.91001965.C400X300/Rumah-Cluster-Sutera-Narada-Alam-Sutera-Tangerang-Selatan-Indonesia.jpg'
    },
    {
        name: 'Rumah Bang Jono',
        address: 'Jalan Ketupat no 5 Ciputat',
        longitude: -6.290760,
        latitude: 106.732405,
        price: 'Rp.900.000',
        cover: 'https://id2-cdn.pgimgs.com/listing/16267193/UPHO.91001965.C400X300/Rumah-Cluster-Sutera-Narada-Alam-Sutera-Tangerang-Selatan-Indonesia.jpg'
    },
    {
        name: 'Rumah Bang Bang Tut',
        address: 'Jalan Soekarno no 35 Yogyakarta',
        longitude: -6.292349,
        latitude: 106.728457,
        price: 'Rp.790.000',
        cover: 'https://id2-cdn.pgimgs.com/listing/16267193/UPHO.91001965.C400X300/Rumah-Cluster-Sutera-Narada-Alam-Sutera-Tangerang-Selatan-Indonesia.jpg'
    },
    {
        name: 'Rumah Bang Roy',
        address: 'Jalan Mana no 3 Yogyakarta',
        longitude: -6.292210,
        latitude: 106.731150,
        price: 'Rp.750.000',
        cover: 'https://id2-cdn.pgimgs.com/listing/16267193/UPHO.91001965.C400X300/Rumah-Cluster-Sutera-Narada-Alam-Sutera-Tangerang-Selatan-Indonesia.jpg'
    },
    {
        name: 'Rumah Bang Kai',
        address: 'Jalan Majapahit no 07 Yogyakarta',
        longitude: -6.291431,
        latitude: 106.731644,
        price: 'Rp.800.000',
        cover: 'https://www.sukajadihotel.com/wp-content/uploads/2016/06/sukajadi-hotel-executive-triple-bed.jpg'
    },
    {
        name: 'Rumah Bang Jojo',
        address: 'Jalan ini no 7 Sawah Lama',
        longitude: -6.293647,
        latitude: 106.732508,
        price: 'Rp.400.000',
        cover: 'hotel1.jpg'
    }
]
// Looping card by id with value from array of object 
var card = document.getElementById("demo")
for (var i = 0; i < houses.length; i++) {
    card.innerHTML +=
        // console.log(houses[i].cover);
        '<div class="col-6 mt-2"> <div class="card"><img src= "' + houses[i].cover + '"   class="card-img-top" alt="..."><div class="card-body"><a href="#" class="btn btn-primary btn1">' +
        houses[i].price + '</a><h6>' +
        houses[i].name + '</h6><p>' + houses[i].address +
        '</p><span class="badge badge-pill badge-primary">' + houses[i]
        .longitude + '</span><span class="badge badge-pill badge-primary">' + houses[i]
        .latitude + '</span></div></div></div>';
};

// Creating map options
var mapOptions = {
    center: [-6.297230, 106.732841],
    zoom: 15
}
// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);

// Creating a marker
// Looping Marker with value from array of object
for (var i = 0; i < houses.length; i++) {
    var marker = L.marker([houses[i].longitude, houses[i].latitude]);
    console.log(marker);
    marker.bindPopup(
        ' <img src="' + houses[i].cover + '"class="card-img-top" alt="..."><div class="card-body"><h6>' +
        houses[i].name + '</h6><p>' + houses[i].address +
        '</p><span class="badge badge-pill badge-primary">' + houses[i]
        .longitude + '</span><span class="badge badge-pill badge-primary">' + houses[i]
        .latitude + '</span><a href="#" class="btn btn-primary btn2">' + houses[i].price + '</a></div>').openPopup();
    // Adding marker to the map
    marker.addTo(map);
}