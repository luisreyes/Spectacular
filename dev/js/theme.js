(function(){

  var elements = {
    scroll_indicator: document.body.querySelector('.scroll-indicator'),
    main_container: document.getElementById('app-main').querySelector('.main-container')
  };

  document.addEventListener('scroll', onBodyScroll);

  function onBodyScroll(e){
    hideIndicator();
  }

  function hideIndicator(){
    if( window.innerWidth < 768 ){
      document.removeEventListener('scroll', onBodyScroll);
      apollo.addClass(elements.main_container, 'overflows');
      apollo.addClass(document.documentElement, 'overflows');
      apollo.addClass(document.body, 'overflows');
      apollo.addClass(elements.scroll_indicator,'done');
    }
  }

}());