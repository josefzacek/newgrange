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



$(window).scroll(function() {
  var scrollToTop = $(window).scrollTop()

  if ($('#section-1').offset().top < scrollToTop) {
    var sectionOnePosition = (scrollToTop / sectionOne) * 100;
    if (sectionOnePosition > 100) {
      sectionOnePosition = 0;
    }
    $(".nav-item.link-one .bar").css('width', sectionOnePosition + "%");
  } else {
    $(".nav-item.link-one .bar").css('width', 0 + "%");
  }


  if ($('#section-2').offset().top < scrollToTop) {
    var sectionTwoPosition = ((scrollToTop - sectionOne) / sectionTwo) * 100;
    if (sectionTwoPosition > 100) {
      sectionTwoPosition = 0;
    }
    $(".nav-item.link-two .bar").css('width', sectionTwoPosition + "%");
  } else {
    $(".nav-item.link-two .bar").css('width', 0 + "%");
  }


  if ($('#section-3').offset().top < scrollToTop) {
    var sectionThreePosition = ((scrollToTop - sectionOne - sectionTwo) / sectionThree) * 100;
    if (sectionThreePosition > 100) {
      sectionThreePosition = 0;
    }
    $(".nav-item.link-three .bar").css('width', sectionThreePosition + "%");
  } else {
    $(".nav-item.link-three .bar").css('width', 0 + "%");
  }


  if ($('#section-4').offset().top < scrollToTop) {
    var sectionFourPosition = ((scrollToTop - sectionOne - sectionTwo - sectionThree) / sectionFour) * 100;
    if (sectionFourPosition > 100) {
      sectionFourPosition = 0;
    }
    $(".nav-item.link-four .bar").css('width', sectionFourPosition + "%");
  } else {
    $(".nav-item.link-four .bar").css('width', 0 + "%");
  }


  if ($('#section-5').offset().top < scrollToTop) {
    var sectionFivePosition = ((scrollToTop - sectionOne - sectionTwo - sectionThree - sectionFour) / sectionFive) * 100;
    if (sectionFivePosition > 100) {
      sectionFivePosition = 0;
    }
    $(".nav-item.link-five .bar").css('width', sectionFivePosition + "%");
  } else {
    $(".nav-item.link-five .bar").css('width', 0 + "%");
  }


  if ($('#section-6').offset().top < scrollToTop) {
    var sectionSixPosition = ((scrollToTop - sectionOne - sectionTwo - sectionThree - sectionFour - sectionFive) / sectionSix) * 100;
    if (sectionSixPosition > 100) {
      sectionSixPosition = 0;
    }
    $(".nav-item.link-six .bar").css('width', sectionSixPosition + "%");
  } else {
    $(".nav-item.link-six .bar").css('width', 0 + "%");
  }
})
