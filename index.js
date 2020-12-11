// $(document).ready(function() {
//   // Transition effect for navbar 
//   $(window).scroll(function() {
//     // checks if window is scrolled more than 500px, adds/removes solid class
//     if($(this).scrollTop() > 800) { 
//         $('.navbar').addClass('solid');
//     } else {
//         $('.navbar').removeClass('solid');
//     }
//   });
// });
$(window).scroll(function () {
  if ($(window).scrollTop() >= 800) {
  $('.navbar').css('background','#001D36');
  } else {
  $('.navbar').css('background','transparent');
  }
});