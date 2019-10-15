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

//sticky header only on scroll up (with delay)
var temp = 0; //last scroll position
var scrolled = false;
$(window).scroll(function() {
    var logoheight = $("#logo").outerHeight();
    var scroll = $(window).scrollTop();
    if ($(window).scrollTop() > document.getElementById("header").offsetTop + 300) { //if the header is scrolled all the way past
        $("#header").addClass("sticky");
        $("#header").hide();
        $(".sticky").css("top", "-200px"); //hiding and preparing for css transition when shown(scroll up)
    }
    if (temp  > scroll) { //if the last scroll position is greater than the current
        if (scrolled == false) { //if the header hasnt been displayed, display it
            var deadzone = temp - 20; //added deadzone to stop header from showing up weirdly on mobile
            setTimeout(function() { //checking to see if user is still scrolling up after set amount of time
                if (deadzone > scroll) {
                    console.log("show")
                    $("#header").show();
                    $(".sticky").css("top", "0px"); //show header (slide down transition)
                    if (logoheight >= $(window).scrollTop()) { //returning header back to its default position when you scroll to the top of the page
                        $("#header").removeClass("sticky");
                    }
                    scrolled = true; //running this function once eliminate setTimeout firing multiple times which results in the header not showing
                }
            }, 400);
        }
        if (scrolled == true) { //if the header has already been displayed keep displaying it
            $("#header").show();
            $(".sticky").css("top", "0px"); //show header (slide down transition)
            if (logoheight >= $(window).scrollTop()) { //returning header back to its default position when you scroll to the top of the page
                $("#header").removeClass("sticky");
            }
        }
    }
    if (scroll > temp) { //resetting header show process if scroll down
        scrolled = false;
    }
    temp = $(window).scrollTop(); //updating last scroll position
});