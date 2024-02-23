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
