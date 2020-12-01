// Descrizione:
// Usado jQuery riproducete l'effetto dei menu a tendina del sito revolut (https://www.revolut.com/) usate lo screenshot di seguito per riprodurre anche il layout della navbar.
// Attenzione:
// Dovete riprodurre solo la navbar ed i menu a tendina, non tutto il sito. Fate attenzione che in questo caso non abbiamo un solo menu a tendina ma piú di uno. Il menu deve diventare visibile quando facciamo hover  o click ( a vs discrezione ) su uno dei link principali nella navbar. Ogni link della navbar ha il suo menu nascosto che deve apparire.
// Buon lavoro e buon divertimento


$(function(){

  var dropDown = $('a.drop-down');
  var menu = $('div.menu');
  var navBarRight =$('#navbar-right');
dropDown.mouseenter(function(){
  switch ($(this)[0]) {
      case dropDown[0]:
      menu.removeClass('active');
      $('.tariffazione').addClass('active');
      break;
      case dropDown[1]:
      menu.removeClass('active');
      $('.conti').addClass('active');
      break;
      case dropDown[2]:
      menu.removeClass('active');
      $('.prodotti').addClass('active');
      break;
      case dropDown[3]:
      menu.removeClass('active');
      $('.azienda').addClass('active');
      break;
      default:
      menu.removeClass('active');
  }
});

menu.mouseleave(function(){
  menu.removeClass('active');
});

navBarRight.mouseleave(function(){
  menu.removeClass('active');
});

}); //function ready
