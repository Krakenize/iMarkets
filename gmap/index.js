map = new GMaps({
    div: '#map',
    zoom: 14,
    lat: 42.8700509,
    lng: 74.5784573//,
    //click: function(e) {
    //    alert('click');
    //},
    //dragend: function(e) {
    //    alert('dragend');
    //}
});
map.addMarker({
    lat: 42.882491,
    lng: 74.576974,
    title: "ast.kg",
    icon: "http://ast.kg/images/logo_2.png",

    click: function(e) {
        //alert('You clicked in this marker');
    },
    infoWindow: {
        content: '<p>AlaToo Smart Technologies</p>'
    }
});
init();
function init(){
    GMaps.geolocate({
        success: function(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            map.setCenter(lat, lng);
            map.addMarker({
                lat: lat,
                lng: lng,
                draggable: true,
                click: function(e) {
                    //alert('You clicked in this marker');
                },
                infoWindow: {
                    content: '<p>Your geolocation</p>'
                },
                dragend: function(e) {
                    //init();
                }
            });
            map.drawRoute({
                origin: [lat, lng],
                destination: [42.882625, 74.576492],
                travelMode: 'driving',
                strokeColor: '#0000ff',
                strokeOpacity: 0.4,
                strokeWeight: 5
            });
        },
        error: function(error) {
            alert('Geolocation failed: '+error.message);
        },
        not_supported: function() {
            alert("Your browser does not support geolocation");
        },
        always: function() {
            alert("Done!");
        }
    });
}