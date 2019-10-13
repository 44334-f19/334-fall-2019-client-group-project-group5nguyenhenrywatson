$(window).scroll(function() {
    var logoheight = $("#logo").outerHeight();
    if (window.pageYOffset > document.getElementById("header").offsetTop) {
        $("#header").addClass("sticky");
        $("#logo").css("margin-bottom", "150px");
        if (logoheight >= $(window).scrollTop()) {
            $("#header").removeClass("sticky");
            $("#logo").css("margin-bottom", "0");
        }
    }
});