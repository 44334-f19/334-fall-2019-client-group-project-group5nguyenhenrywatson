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
var temp = 0; //last scroll position
$(window).scroll(function() {
    var logoheight = $("#logo").outerHeight();
    var scroll = $(window).scrollTop();
    if ($(window).scrollTop() > document.getElementById("header").offsetTop + 300) { //if the header is scrolled all the way past
        $("#header").addClass("sticky");
        $("#header").hide();
        $(".sticky").css("top", "-200px"); //hiding and preparing for css transition when shown(scroll up)
    }
    if (temp > scroll) { //if the current scroll position is less than the last
        $("#header").show();
        $(".sticky").css("top", "0px"); //show header (slide down transition)
        if (logoheight >= $(window).scrollTop()) { //returning header back to its default position when you scroll to the top of the page
            $("#header").removeClass("sticky");
        }
    }
    temp = $(window).scrollTop(); //updating last scroll position
});