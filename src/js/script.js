/* Loading screen */

window.onload = function() {
    gsap.to('.loading-screen', {
        duration: 1,
        opacity: 0,
        onComplete: function() {
            document.querySelector('.loading-screen').style.display = 'none';
            locomotiveScroll.update();
        }
    });
};

/* Service animation */

document.querySelectorAll('.services-btn').forEach(button => {
    const originalText = button.textContent;
    const originalColor = window.getComputedStyle(button).color;

    button.addEventListener('mouseenter', () => {
        gsap.to(button, { 
            duration: 0.3, 
            color: "#ee4037", 
            onStart: () => button.textContent = 'Book Now',
            ease: "power1.out"
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, { 
            duration: 0.3, 
            color: originalColor, 
            onStart: () => button.textContent = originalText,
            ease: "power1.in"
        });
    });
});

/* Locomotive Scroll */

gsap.registerPlugin(ScrollTrigger);

const scroller = document.querySelector('#scroller');

const locomotiveScroll = new LocomotiveScroll({
  el: scroller,    
  smooth: true,
  getDirection: true,
  multiplier: 0.7,
  smartphone: {
      smooth: true,
  },
  tablet: {
      smooth: true,
  },
});

const anchorLinks = document.querySelectorAll('a[href^=\\#]:not([href$=\\#])');

anchorLinks.forEach((anchorLink) => {
    let hashval = anchorLink.getAttribute('href');
    let target = document.querySelector(hashval);

    anchorLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        locomotiveScroll.scrollTo(target);
        locomotiveScroll.update();
    });
});
