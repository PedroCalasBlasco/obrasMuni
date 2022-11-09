  var crs22185 = new L.Proj.CRS(
      "EPSG:22185",
      "+proj=tmerc +lat_0=-90 +lon_0=-60 +k=1 +x_0=5500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crss", //http://spatialreference.org/ref/epsg/25830/proj4/
      {
        resolutions: [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5],
        //Origen de servicio teselado
        //origin:[0,0]
      }
    );

    var map = L.map("map").setView([-31.617462, -60.71049], 8);
    
    map.flyTo([-31.617462, -60.71049], 13);

    var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    var stadia_dark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });

    proj4.defs(
      "EPSG:22185",
      "+proj=tmerc +lat_0=-90 +lon_0=-60 +k=1 +x_0=5500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"
    );


    var baseMaps = {
    "OpenStreetMap": osm,
    "Dark": stadia_dark
    };

    var layerControl = L.control.layers(baseMaps).addTo(map);

