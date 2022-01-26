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

// P R O J E C T - 1

// Log offset of img
let img1 = $('#img-project1');
// console.log(img1.offset());

// Hover Over

$('#img-and-img-overlay1').hover(function(){
    let overlay1 = $('#img-project1-overlay')
    overlay1.show();
    $('#img-project1-overlay').show();
    // console.log("You hovered over.")

    // Get x,y coordinates for img
    overlay1.css('left', img1[0].x);
    overlay1.css('top', img1[0].y);
},

// Stop hovering (re-hide overlay)
function(){
    $('#img-project1-overlay').hide();
    // console.log("You stopped hovering.")
});

// P R O J E C T - 2

// Log offset of img
let img2 = $('#img-project2');
// console.log(img2.offset());

// Hover Over

$('#img-and-img-overlay2').hover(function(){
    let overlay2 = $('#img-project2-overlay')
    overlay2.show();
    $('#img-project2-overlay').show();
    // console.log("You hovered over.")

    // Get x,y coordinates for img
    overlay2.css('left', img2[0].x);
    overlay2.css('top', img2[0].y);
},

// Stop hovering (re-hide overlay)
function(){
    $('#img-project2-overlay').hide();
    // console.log("You stopped hovering.")
});

// P R O J E C T - 3

// Log offset of img
let img3 = $('#img-project3');
// console.log(img3.offset());

// Hover Over

$('#img-and-img-overlay3').hover(function(){
    let overlay3 = $('#img-project3-overlay')
    overlay3.show();
    $('#img-project3-overlay').show();
    // console.log("You hovered over.")

    // Get x,y coordinates for img
    overlay3.css('left', img3[0].x);
    overlay3.css('top', img3[0].y);
},

// Stop hovering (re-hide overlay)
function(){
    $('#img-project3-overlay').hide();
    // console.log("You stopped hovering.")
});



})
