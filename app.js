$(()=>{
console.log("test");

// Clicking the hamburger icon toggles the link menubar

const hamburgerMenuClick = function(event) {
    event.preventDefault();
    $('.list-nav-links').toggle();
}

// Event Delegation

$('.list-nav.-links').on('click', hamburgerMenuClick);


// *************
// Show/Hide Div
// *************

$(document).ready(function (){
    $("#click-me").click(function (){
        $("#quote").toggle()
    });
});


// *************
// Smooth Scroll
// *************

// Code Adapted from Stack Overflow: https://stackoverflow.com/questions/6677035/scroll-to-an-element-with-jquery

        $(document).ready(function (){
            $("#smooth-about-me").click(function (){
                $('html, body').animate({
                    scrollTop: $("#about-me-section").offset().top
                }, 2000);
            });
        });

        $(document).ready(function (){
            $("#smooth-skills").click(function (){
                $('html, body').animate({
                    scrollTop: $("#skills-section").offset().top
                }, 2000);
            });
        });

        $(document).ready(function (){
            $("#smooth-projects").click(function (){
                $('html, body').animate({
                    scrollTop: $("#projects-section").offset().top
                }, 2000);
            });
        });

        $(document).ready(function (){
            $("#smooth-contact").click(function (){
                $('html, body').animate({
                    scrollTop: $("#contact-me-section").offset().top
                }, 2000);
            });
        });
    


})
