$("#home_btn").click(function () {
    $("#block").html($('#home').html());
});
$("#wishlist_btn").click(function () {
    $("#block").html($('#wishlist').html());
});
$("#categories_btn").click(function () {
    $("#block").html($('#categories').html());
});
$("#map_btn").click(function () {
    $("#block").html($('#map').html());
});
$("#add_btn").click(function () {
    $("#block").html($('#add').html());
});

$("#block").html($('#home').html());

$('.item').hover(function (e) {
    $(this).addClass("black_active");
    $(this).siblings().removeClass("black_active");
})