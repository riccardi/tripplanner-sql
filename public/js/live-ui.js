function initialize_gmaps() {
    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(40.705189, -74.009209);
    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map");
    // initialize a new Google Map with the options
    var map = new google.maps.Map(map_canvas_obj, mapOptions);
    // Add the marker to the map
    var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Hello World!"
    });
    // Add the marker to the map by calling setMap()
    marker.setMap(map);
}

$(document).ready(function() {
    initialize_gmaps();
    $("ol#add_items").on("click", 'li button', function(event) {
        var selected = $(this).prev().val();
        var placeId = $(this).prev().find('option[value="' + selected + '"]').attr("placeId");
        var category = $(this).prev().attr("id");
        // if category is hotel limit to one li
        console.log(category);
        console.log(placeId);
        if ($("#day1 ul." + category).find('li[placeid="' + placeId + '"]')) {
            $("#day1 ul." + category).append('<li placeid="' + placeId + '">' + selected + ' <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-remove "></span></button></li>');
        }
    });


    $(".tab-content").on("click", "li button", function(event) {
        $(this).parent().remove();
    });


});
