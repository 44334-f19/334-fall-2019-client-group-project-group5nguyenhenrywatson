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

//sticky header only on scroll up (with deadzone)
var temp = 0; //last scroll position
var scrolled = false;
$(window).scroll(function() {
    var logoheight = $("#logo").outerHeight();
    var scroll = $(window).scrollTop();
    if (($(window).scrollTop() > document.getElementById("header").offsetTop + 300) && (temp < scroll)) { //if the header is scrolled all the way past
        $("#header").addClass("sticky");
        $("#header").hide();
        $(".sticky").css("top", "-200px"); //hiding and preparing for css transition when shown(scroll up)
        console.log("hide");
    }
    if (temp > scroll) { //if the last scroll position is greater than the current
        var deadzone = temp - 50; //added deadzone to requre the user to scroll at a certain speed for the header to show up
        if (deadzone > scroll) {
            console.log("show")
            $("#header").show();
            $(".sticky").css("top", "0px"); //show header (slide down transition)
        }
        if (logoheight >= $(window).scrollTop()) { //returning header back to its default position when you scroll to the top of the page
            $("#header").removeClass("sticky");
        }
    }
    temp = $(window).scrollTop(); //updating last scroll position
});