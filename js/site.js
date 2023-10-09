// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function thankYou() {
  var txt;
  if (confirm("Your response was received!")) {
    txt = "Thank you for joining our Mailing List!";
  }
  document.getElementById("thankYouMessage").innerHTML = txt;

  setTimeout(function() {
    document.getElementById("thankYouMessage").style.display='none';
  }, 60000);
}