$(document).ready(function () {
  var currentSection, nextSection, currentIndex = 0;
  $('body').on('keydown', function (e) {

    if (e.keyCode == 40 || e.keyCode == 38) {
      e.preventDefault();
      currentSection = $('section').eq(currentIndex);
      currentSection.removeClass('active');

      if (e.keyCode == 40) {
        currentIndex += 1;
        nextSection = $('section').eq(currentIndex);
        if (nextSection[0] == undefined) {
          currentIndex = currentIndex - 1;
          nextSection = $('section').eq(currentIndex);
        }

      }
      if (e.keyCode == 38) {
        currentIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
        nextSection = $('section').eq(currentIndex);
      }
      nextSection.addClass('active');
      $('body').scrollTo(nextSection, 300);
    }

  })
});