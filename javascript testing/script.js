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
$(window).scroll(function() {
    var logoheight = $("#logo").outerHeight();
    var scroll = $(window).scrollTop();
    //if the header is scrolled all the way past or if scroll down
    if ((scroll > document.getElementById("header").offsetTop + 300) && (temp < scroll)) { 
        //hiding and preparing for css transition when shown(scroll up)
        $("#header").addClass("sticky");
        $("#header").hide();
        $(".sticky").css("top", "-200px"); 
    }
    if (temp > scroll) { //if the last scroll position is greater than the current
        //deadzone to requre the user to scroll at a certain speed for the header to show up
        var deadzone = temp - 50; 
        if (deadzone > scroll) {
            $("#header").show();
            $(".sticky").css("top", "0px"); //show header (slide down transition)
        }
        //returning header back to its default position when you scroll to the top of the page
        if (logoheight >= scroll) { 
            $("#header").removeClass("sticky");
        }
    }
    temp = $(window).scrollTop(); //updating last scroll position
});