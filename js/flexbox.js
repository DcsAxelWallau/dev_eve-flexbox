$(document).ready(function () {
  var nextSection, currentSection = 0;
  $('body').on('keydown', function (e) {

    if (e.keyCode == 40) {
      currentSection += 1;
      nextSection = $('section').eq(currentSection);
      if (nextSection[0] == undefined) {
        currentSection = currentSection - 1;
        nextSection = $('section').eq(currentSection);
      }
      $('body').scrollTo(nextSection, 300);
    }

    if (e.keyCode == 38) {
      e.preventDefault();
      currentSection = currentSection - 1 < 0 ? 0 : currentSection - 1;
      nextSection = $('section').eq(currentSection);
      $('body').scrollTo(nextSection, 300);
    }

  })
});