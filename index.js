let firstWindowHeight = document.getElementById('about').clientHeight;
$(window).scroll(function () {
  if ($(window).scrollTop() >= firstWindowHeight) {
  $('.navbar').css('background','rgba(0, 29, 54, 0.3)');
  } else {
  $('.navbar').css('background','transparent');
  }
});