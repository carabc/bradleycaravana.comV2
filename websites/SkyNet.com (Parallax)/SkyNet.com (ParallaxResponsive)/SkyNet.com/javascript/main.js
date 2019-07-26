//Center Showcase Headers/Button Parallax

var showcaseHeight = document.querySelector('#showcase-nav').offsetHeight;

window.addEventListener('scroll', function() {
  var wScroll = this.pageYOffset;
  if (wScroll <= showcaseHeight) {
    document.querySelector('.row1').style.transform =
      'translate(0px, ' + wScroll / 2 + '%)';
  }
});
