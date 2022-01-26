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

// *******************************************
// Original Attempt with Nathaniel's Code, Too
// *******************************************

// Log offset of img
let img1 = $('#img-project1');
console.log(img1.offset());

// Hover Over

$('#img-and-img-overlay1').hover(function(){
    let overlay1 = $('#img-project1-overlay')
    overlay1.show();
    $('#img-project1-overlay').show();
    console.log("You hovered over.")

    // Get x,y coordinates for img
    overlay1.css('left', img1[0].x);
    overlay1.css('top', img1[0].y);
},

// Stop hovering (re-hide overlay)
function(){
    $('#img-project1-overlay').hide();
    console.log("You stopped hovering.")
});




})
