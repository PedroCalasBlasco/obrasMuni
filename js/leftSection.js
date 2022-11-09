const closeButtonSidebar = () => { 
    const buttonSidebar = document.querySelector("#buttonSidebar");
    buttonSidebar.style.display = 'none'; 
}

let cont = 0;

const openButtonSidebar = () => { 

    const buttonSidebar = document.querySelector("#buttonSidebar");
    
    if(cont % 2 == 0){ 
        buttonSidebar.style.display = 'block'; 
    }else{
        buttonSidebar.style.display = 'none';
    }

    cont++;
    
}

let layer, layer2 = null;

const featureSelected = (e) => {

    map.flyTo([-31.617462, -60.71049], 13);


    const leftButtons = document.querySelectorAll(".leftButtons")

    for (var item of leftButtons) {
        item.classList.remove("active");
    }
        
    leftButtons[e].classList.add("active")

   
    if (layer) {
        map.removeLayer(layer)
    }

    if (layer2) {
        map.removeLayer(layer2)
    }


    switch (e) {
        case 0:

            stadia_dark.addTo(map)
            map.removeLayer(osm)
            
            fetch(
                "https://geoserver.santafeciudad.gov.ar/geoserver/sitmax/wfs?version=1.1.0&service=wfs&request=GetFeature&typeName=sitmax:proyectos_obras_2023_led_linea&outputFormat=json"
            )
            .then((res) => res.json())
            .then((data) => {
            console.log("PEDRO", data.features);
            layer = L.Proj.geoJson(data, {
                style: function (feature) {
                    return {
                    color: "rgb(255,255,255)",
                    weight: 3,
                   
                    dashOffset: "0",
                    };
                },
                onEachFeature: function (feature, layer) {
                    return layer.bindPopup(feature.properties.descripcio);
                },
                }).addTo(map);
            })
                .catch((err) => console.error(err));
            
            fetch(
                    "https://geoserver.santafeciudad.gov.ar/geoserver/sitmax/wfs?version=1.1.0&service=wfs&request=GetFeature&typeName=sitmax:proyectos_obras_2023_ep_linea&outputFormat=json"
            )
            .then((res) => res.json())
            .then((data) => {
            console.log("PEDRO", data.features);
            layer2 = L.Proj.geoJson(data, {
                style: function (feature) {
                    return {
                        color: "rgb(255,255,255)",
                        weight: 3,  
                        dashOffset: "0",
                        };
                    },
                    onEachFeature: function (feature, layer) {
                        return layer.bindPopup(`${feature.properties.descripcio}</h5>`);
                    },
                }).addTo(map);
            })
                    .catch((err) => console.error(err));

            break;
        case 1:
    
            map.removeLayer(stadia_dark)
            osm.addTo(map)

            fetch(
                    "https://geoserver.santafeciudad.gov.ar/geoserver/sitmax/wfs?version=1.1.0&service=wfs&request=GetFeature&typeName=sitmax:proyectos_obras_2023_sdu&outputFormat=json"
                )
                .then((res) => res.json())
                .then((data) => {
                console.log("PEDRO", data.features);
                layer = L.Proj.geoJson(data, {
                    pointToLayer: function (feature, latlng) { 
                        return L.circleMarker(latlng, {
                            radius: 5,
                            fillColor: "blue",
                            color: "blue"
                        });
                    },
                    onEachFeature: function (feature, layer) {
                        return layer.bindPopup(`<h5>${feature.properties.titulo}</h5>${feature.properties.descripcion}`);
                    },
                    }).addTo(map);
                })
                    .catch((err) => console.error(err));


            break;
        case 2:

            stadia_dark.addTo(map)
            map.removeLayer(osm)

            fetch(
                "https://geoserver.santafeciudad.gov.ar/geoserver/sitmax/wfs?version=1.1.0&service=wfs&request=GetFeature&typeName=sitmax:proyectos_obras_2023_ep_poligono&outputFormat=json"
            )
            .then((res) => res.json())
            .then((data) => {
            console.log("PEDRO", data.features);
            layer = L.Proj.geoJson(data, {
                style: function (feature) {
                    return {
                    color: "rgb(120,255,0)",
                    weight: 1,
                    dashOffset: "0",
                    };
                },
                onEachFeature: function (feature, layer) {
                    return layer.bindPopup(feature.properties.nombre);
                },
                }).addTo(map);
            })
                .catch((err) => console.error(err));
            
            
            break;
        
        case 3:

             stadia_dark.addTo(map)
            map.removeLayer(osm)

            fetch(
                "https://geoserver.santafeciudad.gov.ar/geoserver/sitmax/wfs?version=1.1.0&service=wfs&request=GetFeature&typeName=sitmax:proyectos_obras_2023_areas_movilidad&outputFormat=json"
            )
            .then((res) => res.json())
            .then((data) => {
            console.log("PEDRO", data.features);
            layer = L.Proj.geoJson(data, {
                style: function (feature) {
                    switch (feature.properties.id) { 
                        case 1:
                            return {
                                color: "white",
                                fillColor: "rgb(25, 25, 115)",
                                fillOpacity: 0.3,
                                weight: 2,
                            }
                        case 2: 
                            return {
                                color: "white",
                                fillColor: "rgb(115,25,25)",
                                fillOpacity: 0.3,
                                weight: 2, 
                            }
                        case 3:
                            return {
                                color: "white",
                                fillColor: "rgb(25, 115, 25)",
                                fillOpacity: 0.3,
                                weight: 2, 
                            }
                    }
  
                },
                onEachFeature: function (feature, layer) {
                    return layer.bindPopup(`<h5>${feature.properties.nombre_pro}</h5>${feature.properties.actividad}`);
                },
                }).addTo(map);
            })
                .catch((err) => console.error(err));
            
            
            break;
        
        case 4:

            map.removeLayer(stadia_dark)
            osm.addTo(map)

            fetch(
                "https://geoserver.santafeciudad.gov.ar/geoserver/sitmax/wfs?version=1.1.0&service=wfs&request=GetFeature&typeName=sitmax:proyectos_obras_2023_mandapeatones_movilidad&outputFormat=json"
            )
            .then((res) => res.json())
            .then((data) => {
            console.log("PEDRO", data.features);
            layer = L.Proj.geoJson(data, {
                style: function (feature) {
                    return {
                    color: "rgb(125,10,10)",
                    weight: 3,
                    dashOffset: "0",
                    };
                },
                onEachFeature: function (feature, layer) {
                    return layer.bindPopup(feature.properties.descripcio);
                },
                }).addTo(map);
            })
                .catch((err) => console.error(err));
            
            
            fetch(
                "https://geoserver.santafeciudad.gov.ar/geoserver/sitmax/wfs?version=1.1.0&service=wfs&request=GetFeature&typeName=sitmax:proyectos_obras_2023_vias_movilidad&outputFormat=json"
            )
            .then((res) => res.json())
            .then((data) => {
            console.log("PEDRO", data.features);
            layer2 = L.Proj.geoJson(data, {
                style: function (feature) {
                    return {
                    color: "rgb(125,10,10)",
                    weight: 3,
                    dashOffset: "0",
                    };
                },
                onEachFeature: function (feature, layer) {
                    return layer.bindPopup(`<h5>${feature.properties.calle}</h5><p>${feature.properties.nombre_pro}</p><p>${feature.properties.actividad}</p>`);
                },
                }).addTo(map);
            })
                .catch((err) => console.error(err));
            
            
            break;
        
        case 5:

            map.removeLayer(stadia_dark)
            osm.addTo(map)

            fetch(
                "https://geoserver.santafeciudad.gov.ar/geoserver/sitmax/wfs?version=1.1.0&service=wfs&request=GetFeature&typeName=sitmax:proyectos_obras_2023_acceso_al_suelo&outputFormat=json"
            )
            .then((res) => res.json())
            .then((data) => {
            console.log("PEDRO", data.features);
            layer = L.Proj.geoJson(data, {
                style: function (feature) {
                    return {
                    color: "red",
                    weight: 2,
                    dashOffset: "0",
                    };
                },
                onEachFeature: function (feature, layer) {
                    return layer.bindPopup(`<h5>${feature.properties.nombre}</h5><p>${feature.properties.descipcion}</p>`);
                },
                }).addTo(map);
            })
                .catch((err) => console.error(err));
        
            fetch(
                "https://geoserver.santafeciudad.gov.ar/geoserver/sitmax/wfs?version=1.1.0&service=wfs&request=GetFeature&typeName=sitmax:proyectos_obras_2023_escriturados&outputFormat=json"
            )
            .then((res) => res.json())
            .then((data) => {
            console.log("PEDRO", data.features);
            layer2 = L.Proj.geoJson(data, {
                pointToLayer: function (feature, latlng) { 
                        return L.circleMarker(latlng, {
                            radius: 5,
                            fillColor: "red",
                            color: "red"
                        });
                    },
                onEachFeature: function (feature, layer) {
                    return layer.bindPopup(`<h5>${feature.properties.nombre}</h5><p>${feature.properties.descripcio}</p>`);
                },
                }).addTo(map);
            })
                .catch((err) => console.error(err));
            
             break;
    
        case 6:

            map.removeLayer(stadia_dark)
            osm.addTo(map)
            
            
            fetch(
                "https://geoserver.santafeciudad.gov.ar/geoserver/sitmax/wfs?version=1.1.0&service=wfs&request=GetFeature&typeName=sitmax:proyectos_obras_2023_obras_integracion_urbana&outputFormat=json"
            )
            .then((res) => res.json())
            .then((data) => {
            console.log("PEDRO", data.features);
            layer = L.Proj.geoJson(data, {
                style: function (feature) {
                    return {
                    color: "rgb(85,6,85)",
                    weight: 2,
                    dashOffset: "0",
                    };
                },
                onEachFeature: function (feature, layer) {
                    return layer.bindPopup(`<h5>${feature.properties.nombre}</h5><p>${feature.properties.descripcio}</p>`);
                },
                }).addTo(map);
            })
                .catch((err) => console.error(err));
            
            
    
            fetch(
                "https://geoserver.santafeciudad.gov.ar/geoserver/sitmax/wfs?version=1.1.0&service=wfs&request=GetFeature&typeName=sitmax:proyectos_obras_2023_viviendas&outputFormat=json"
            )
            .then((res) => res.json())
            .then((data) => {
            console.log("PEDRO", data.features);
            layer2 = L.Proj.geoJson(data, {
                style: function (feature) {
                    return {
                    color: "rgb(85,86,85)",
                    weight: 3,
                    dashArray: "10, 10",
                    dashOffset: "0",
                    };
                },
                onEachFeature: function (feature, layer) {
                    return layer.bindPopup(`<h5>${feature.properties.nombre}</h5><p>${feature.properties.descripcio}</p>`);
                },
                }).addTo(map);
            })
                .catch((err) => console.error(err));
            
            
            break;
    }
 
}
 



