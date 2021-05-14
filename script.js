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

// get height of fixed navigation container
var navigationContainerHeight = $("#navigation-container").height()

// add height of navigation conntainer + progress bar to each section
$('*[id*=section-] .col').each(function() {
  $(this).css ("margin-top",navigationContainerHeight + 4)
});

var sectionOne = $("#section-1").height();
var sectionTwo = $("#section-2").height();
var sectionThree = $("#section-3").height();
var sectionFour = $("#section-4").height();
var sectionFive = $("#section-5").height();
var sectionSix = $("#section-6").height();
var scrollToTop = $(window).scrollTop()
