// let firstWindowHeight = document.getElementById('about').clientHeight;
// console.log(firstWindowHeight)
// const navBarLogo = document.getElementById('navBarLogo').clientHeight;
// $(window).scroll(function () {
//   if ($(window).scrollTop() >= firstWindowHeight) {
//   $('.navbar img').attr('src', '/resources/hugoAvatar-fliped.png');
//   $('.topLogo').css('height', '50px');
//   $('.topLogo').css('margin-left', '30px');
//   $('.topLogo').css('width', '50px');
//   $('.navbar').css('background','rgba(0, 29, 54, 0.3)');
//   $('.logoImg').css('width', '150px');
//   } else {
//   $('.navbar img').attr('src', '/resources/logoTop.png');
//   $('.topLogo').css('width', '130px');
//   $('.topLogo').css('background','none');
//   $('.navbar').css('background','transparent');
//   $('.topLogo').css('margin-left', '0px');
//   }
// });

let firstWindowHeight = document.getElementById('about').clientHeight;
console.log(firstWindowHeight)
const navBarLogo = document.getElementById('navBarLogo').clientHeight;
$(window).scroll(function () {
  if ($(window).scrollTop() >= firstWindowHeight) {
  $('.navbar').css('background','rgba(0, 29, 54, 0.3)');
  } else {
  $('.navbar').css('background','transparent');
  }
});