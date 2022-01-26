$(()=>{
console.log("test");

// Clicking the hamburger icon toggles the link menubar

const hamburgerMenuClick = function(event) {
    event.preventDefault();
    $('.list-nav-links').toggle();
}

// Event Delegation

$('.list-nav.-links').on('click', hamburgerMenuClick);

// *****************
// JQUERY HOVER OVER
// *****************

// Attempt from StackOverflow #1

// Nathaniel's Solution

// let img1 = $('#img-project1-overlay');
// console.log(img1.offset());

// $(document).ready(function() {
//     $('img-project1').hover(function(){
//         let overlay = $('#img-project1-overlay')
//         overlay.show();

//         overlay.css('left', img1[0].x);
//         overlay.css('top', img1[0].y)
//         console.log("You hovered over.")
//     },
//     function(){
//         $('#img-project-overlay').hide();
//         console.log("You stopped hovering.")
//     });
// });


// ****************
// Original Attempt
// ****************

    $('#img-project1').hover(function(){
        $('#img-project1-overlay').show();
        console.log("You hovered over.")
    },
    function(){
        $('#img-project1-overlay').hide();
        console.log("You stopped hovering.")
    });




})
