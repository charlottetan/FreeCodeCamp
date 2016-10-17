$(document).ready(function() {
  var method = localStorage.getItem('lastSigninMethodDeprecated'),
    btnSelector = 'a.btn.btn-lg.btn-block.btn-social';
  if (method) {
    try {
      var obj = JSON.parse(method);
    } catch(e) {
      console.error('Invalid sign in object stored', method);
      return;
    }
    $.each($(btnSelector), function(i, item) {
      if (
        $(item).attr('href') === obj.methodLink &&
        $(item).hasClass(obj.methodClass)
      ) {
        $(item).addClass('active');
        $(item).attr('title', 'This is your last signin method');
        return false;
      }
    });
  }

  $(btnSelector).click(function() {
    var obj = {};
    $(this).removeClass('active');
    obj.methodClass = $(this).attr('class').split(' ').pop();
    obj.methodLink = $(this).attr('href');
    localStorage.setItem('lastSigninMethodDeprecated', JSON.stringify(obj));
  });
});
