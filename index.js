
// Update function fetch data from 'data.json'
function updateMap() {
    fetch("data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases> 255){
                    color = "rgb(255,0,0)";
                }
                else {
                    color = `rgb(${cases},0,0)`;
                }


                // GO TO MAPBOX WEBSITE AND LINK TO HTML
                // Set marker options.
                    new mapboxgl.Marker({
                    color: color,
                    draggable: false 
                })
                    .setLngLat([longitude,latitude])
                    .addTo(map);
                    
            });
        });
};

// updating data at every 2 seconds
let interval = 2000;
setInterval(updateMap(), interval);