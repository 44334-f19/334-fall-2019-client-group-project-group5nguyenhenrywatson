//sticky header
/**$(window).scroll(function() {
    var logoheight = $("#logo").outerHeight();
    if (window.pageYOffset > document.getElementById("header").offsetTop) {
        $("#header").addClass("sticky");
        if (logoheight >= $(window).scrollTop()) {
            $("#header").removeClass("sticky");
        }
    }
});**/

//sticky header only on scroll up
var temp = 0;
$(window).scroll(function() {
    var logoheight = $("#logo").outerHeight();
    var scroll = $(window).scrollTop();
    if ($(window).scrollTop() > document.getElementById("header").offsetTop + 300) {
        $("#header").addClass("sticky");
        $("#header").hide();
        $(".sticky").css("top", "-200px");
    }
    if (temp > scroll) {
        $("#header").show();
        $(".sticky").css("top", "0px");
        if (logoheight >= $(window).scrollTop()) {
            $("#header").removeClass("sticky");
        }
    }
    temp = $(window).scrollTop();
});