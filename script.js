$(document).ready(function() {
    // Utilize the scrollspy functionality provided by Bootstrap
    $('body').scrollspy({ target: '#sidebar' });

    // Smooth scrolling using jQuery's `animate` method for the sidebar links
    $("#sidebar a").on('click', function(event) {
        if (this.hash !== "" && this.hash !== "#") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    
      $("#homeButton").on('click', function(event) {
        event.preventDefault();
        scrollToTop();
    });

    // Function to check if the element is in the viewport
    function isScrolledIntoView(elem) {
        let docViewTop = $(window).scrollTop();
        let docViewBottom = docViewTop + $(window).height();
        let elemTop = $(elem).offset().top;
        let elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // Function to animate the progress bar
    function animateProgressBar(pb) {
        if (!$(pb).hasClass('animated')) {
            $(pb).addClass('animated');
            $(pb).css('width', $(pb).attr('aria-valuenow') + '%');
        }
    }

    // Check if progress bars are in view on scroll and animate them
    $(window).scroll(function() {
        $('.progress-bar').each(function() {
            if (isScrolledIntoView(this)) {
                animateProgressBar(this);
            }
        });
    });

    // Image toggle for the hero section
    const heroImage = document.querySelector('#hero img');
    heroImage.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
     
});