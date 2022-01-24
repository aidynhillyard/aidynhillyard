$(()=>{
console.log("test");

// Clicking the hamburger icon toggles the link menubar

const hamburgerMenuClick = function(event) {
    event.preventDefault();
    $('.list-nav-links').toggle();
}

$('.list-nav-links').on('click', hamburgerMenuClick);





})
