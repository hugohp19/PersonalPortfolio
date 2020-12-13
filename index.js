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
let firstWindowHeight = document.getElementById('about').clientHeight;
console.log(firstWindowHeight)
$(window).scroll(function () {
  if ($(window).scrollTop() >= firstWindowHeight) {
  $('.navbar').css('background','rgba(0, 29, 54, 0.3)');
  } else {
  $('.navbar').css('background','transparent');
  }
});