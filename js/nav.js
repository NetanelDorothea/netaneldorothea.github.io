document.addEventListener('DOMContentLoaded', function () {
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    window.onscroll = function() { navDrop() };

    function navDrop() {
        // off top
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.background = "rgba(0,0,0,0.4)";
            document.getElementById("navbar").style.backdropFilter = "blur(22px)";
            // document.getElementById("navbar").style.borderBottom = "2px solid rgba(0, 0, 0, 0.0)";
            document.getElementById("navbar").style.boxShadow = "2px 4px 10px rgba(0, 0, 0, 0.25)";
            if (window.innerWidth >= 800) {
                document.getElementById("logo-img").style.height = "40px";
            }
            
        } else {
            document.getElementById("logo-img").style.height = "60px";
            document.getElementById("navbar").style.background = "none";
            document.getElementById("navbar").style.backdropFilter = "blur(1px)";
            // document.getElementById("navbar").style.borderBottom = "2px solid white";
            document.getElementById("navbar").style.boxShadow = "none";
            if (window.innerWidth >= 800) {
                document.getElementById("logo-img").style.height = "60px";
            } else {
                document.getElementById("logo-img").style.height = "40px";
            }
        }
    }
});