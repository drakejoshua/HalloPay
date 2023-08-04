var menuBtn = document.getElementById("menu-btn");
var mobileMenu = document.querySelector("div#mobile-menu > div");
var menuActive = false;

menuBtn.addEventListener( "click", function() {
    if ( menuActive )
    {
        mobileMenu.style.setProperty( "block-size", "0px" );
        menuActive = false;
    }
    else
    {
        menuActive = true;
        mobileMenu.style.setProperty( "block-size", "80px" );
    }
})