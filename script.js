// page progress bar
function pageScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("page-progress-bar-line").style.width = scrolled + "%";
}

window.onscroll = function(){
  pageScroll()
};

// scroll to anchor
var navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var sectionName = this.getAttribute('href').substring(1);
    document.getElementById(sectionName).scrollIntoView(true);
  });
});

// close mobile navigation on link click
var mainNavigation = document.getElementById("navbarNav");
var mainNavigationLinks = document.querySelectorAll("a.nav-link");
var mainNavigationToggler = document.querySelector(".navbar-toggler");
mainNavigationLinks.forEach(function(e){
  e.addEventListener('click', function (event) {
    mainNavigationToggler.classList.add("collapsed");
    mainNavigation.classList.remove("show");
  })    
});

// animate banner text using GSAP
window.onload = function() {
  gsap.to(".banner h1",
    {opacity: 1, duration: 3},
  );
  gsap.to(".banner h1",
    {x: 0, duration: 1}
  );
}

// animate large text in each section
gsap.set("h1.large-text-with-stroke", {
  scale: 0.4,
  y: "120px"
});

function scaleLargeText(text){
  gsap.to(text, {
    scale: 1,
    y: "0px",
    duration: 1,
    scrollTrigger: {
      trigger: text,
      start: "top 90%",
    }
  });
}

scaleLargeText("#about h1.large-text-with-stroke");
scaleLargeText("#winter-solstice h1.large-text-with-stroke");
scaleLargeText("#directions h1.large-text-with-stroke");
scaleLargeText("#resources h1.large-text-with-stroke");

// animate headings and subheadings to fade in and go up
function animateHeadings(selector, trigger){
  gsap.set(selector, {y: "100px", opacity: 0.8});
  gsap.to(selector, {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
    }
  });
} 

animateHeadings("#about .row:nth-child(1)");
animateHeadings("#about .row:nth-child(2)");
animateHeadings("#winter-solstice > .row:nth-child(1) .container > .row:nth-child(1)");
animateHeadings("#visitor-centre .row:nth-child(1)");
animateHeadings("#visitor-centre .row:nth-child(2)");
animateHeadings("#directions .row:nth-child(1)");
animateHeadings("#directions .row:nth-child(2)");
animateHeadings("#resources .row:nth-child(1)");
animateHeadings("#resources .row:nth-child(2)");
