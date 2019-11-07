$(document).ready(function() {
    //sticky header only on scroll up (with deadzone)
    var temp = 0; //last scroll position
    $(window).scroll(function() {
        var logoheight = $("#yorkilogo").outerHeight() + parseInt($("#logowrapper").css("margin-top")) + parseInt($("#logowrapper").css("margin-bottom"));
        console.log(logoheight);
        var headerheight = $("#header").outerHeight();
        var scroll = $(window).scrollTop();
        //if the header is scrolled all the way past or if scroll down
        if ((scroll > document.getElementById("header").offsetTop + (headerheight + logoheight)) && (temp < scroll)) { 
            //hiding and preparing for css transition when shown(scroll up)
            $("#header").addClass("sticky");
            //adding animation for when you scroll down
            if (scroll <= headerheight + logoheight + 100) {
                $("#header").hide();
            } else {
                $("#header").slideUp();
            }
            $(".sticky").css("top", "-" + headerheight + "px"); 
        }
        if (temp > scroll) { //if the last scroll position is greater than the current (scroll up)
            //deadzone to requre the user to scroll at a certain speed for the header to show up
            var deadzone = temp - 40; 
            if (deadzone > scroll) {
                $("#header").show();
                $(".sticky").css("top", "0px"); //show header (slide down transition)
            }
            //returning header back to its default position when you scroll to the top of the page
            if (logoheight >= scroll) { 
                $("#header").removeClass("sticky");
            }
            //if the user doesn't scroll fast enough to reveal the header and if they are near the top of the page, show the header regardless
            if ($("#header").is(":hidden") && (logoheight + headerheight >= scroll)) {
                $("#header").removeClass("sticky");
                $("#header").show();
            }
        }
        temp = $(window).scrollTop(); //updating last scroll position
    });
    //js slide dropdown menu
    $(window).resize(function() {
        if ($(window).width() > 1000) { //if the window is resized to above 1000
            $("#navlinks").css("display", "flex"); //display the desktop version of nav
            $("#aboutcontainer").hover(function() { //dropdown function w/ animation
                $("#dropdown").slideDown(200);
            }, function() {
                $("#dropdown").slideUp(200);
            });
        } else { //if window is resized to below 1000, hide menu and display mobile hamburger
            $("#navlinks").hide();
        }
    });
    //if user hasnt resized the window and theyre on desktop (normal dropdown function)
    if ($(window).width() > 1000) {
        $("#aboutcontainer").hover(function() {
            $("#dropdown").slideDown(200);
        }, function() {
            $("#dropdown").slideUp(200);
        });
    }
    //mobile
    $("#menubutton").click(function() { //mobile hamburger animation
        $("#navlinks").slideToggle(200);
    });
});

