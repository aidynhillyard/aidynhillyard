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

$(document).ready(function() {
    $('#img-project1').hover(function(){
        $('#img.project1-overlay').show();
        console.log("You hovered over.")
    },
    function(){
        $('#img-project1-overlay').hide();
        console.log("You stopped hovering.")
    });
});

// Attempt from StackOverlow #2
// $(document).ready(function() {
//     $('#img-project1').hover(function(){
//         $(this).parent().children('#img-project-overlay1').animate ({
//             opacity: "toggle",}
//         );
//     });
// });

// Attempt from Jquery Documentation
// const showOverlay = function() {
//     $('#img-project1').mouseover(function() {
//         $('#img-project1-overlay').show();
//     });
// }

// const hideOverlay = function() {
//     $('#img-project1').mouseout(function() {
//     $('#img-project1-overlay').hide();
//     });
// }

//     $('#img-project1-overlay').on('mouseover', showOverlay);
//     $('#img-project1-overlay').on('mouseout', hideOverlay)






})
