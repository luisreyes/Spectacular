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
      console.log('hello');
      document.removeEventListener('scroll', onBodyScroll);
      elements.main_container.style.overflowX = 'hidden';
      elements.main_container.style.overflowY = 'auto';
      apollo.addClass(elements.scroll_indicator,'done');
    }
  }

}());