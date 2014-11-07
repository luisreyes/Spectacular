(function(){

	// var drag_origin;

	var elements = {
    	mobileMenu: document.getElementById('app-navigation').querySelector('.mobile-menu'),
    	mobileMenuButton: document.getElementById('app-navigation').querySelector('.menu-toggle'),
    	mobileMenuButtonIcon: document.getElementById('app-navigation').querySelector('.menu-toggle').querySelector('.fa')
  	};

	elements.mobileMenuButton.addEventListener('click', onMenuClick);

	function onMenuClick(){

		elements.mobileMenu.style.display = 'table';

		elements.mobileMenu.offsetWidth = elements.mobileMenu.offsetWidth;

		apollo.toggleClass(document.documentElement, 'active');
		apollo.toggleClass(document.body, 'active');
		apollo.toggleClass(elements.mobileMenuButton, 'active');
		apollo.toggleClass(elements.mobileMenu, 'active');
		apollo.toggleClass(elements.mobileMenuButtonIcon, 'fa-reorder fa-close');

		elements.mobileMenuButton.offsetWidth = elements.mobileMenuButton.offsetWidth;


		elements.mobileMenu.addEventListener( 'webkitTransitionEnd', function( event ) { 
			if( !apollo.hasClass(elements.mobileMenu, 'active') ){
				elements.mobileMenu.style.display = 'none';
			}
		}, false );

	}
	// function onMenuDown(e){

	// 	if(window.innerWidth < 600){
	// 	  console.log("start");
	// 	  drag_origin = [elements.menu.offsetLeft,elements.menu.offsetTop];
	// 	  document.body.style.overflow = 'hidden';
	// 	  elements.menu.addEventListener('touchend', onMenuUp);
	// 	  elements.menu.addEventListener('touchcancel', onMenuUp);
	// 	  elements.menu.addEventListener('touchmove', onMenuMove);
	// 	}
	// }

	// function onMenuUp(e){
	// 	console.log("end");
	// 	document.body.style.overflow = 'visible';
	// 	elements.menu.removeEventListener('touchmove', onMenuMove);
	// 	//apollo.addClass( elements.menu, 'inactive' );
	// }

	// function onMenuMove(e){
	// 	var event = e || window.event;
	// 	console.log(event);
	// 	//apollo.removeClass( elements.menu, 'inactive' );
	// 	//debugger;
	// 	elements.menu.style.left = event.targetTouches[0].clientX - ( elements.menu.offsetWidth/2 ) +'px';
	// 	elements.menu.style.top = event.targetTouches[0].clientY - ( elements.menu.offsetHeight/2 ) +'px';
	// }

}());
(function(){

  // var elements = {};

  // document.addEventListener('scroll', onBodyScroll);

  // // Background Parallax
  // var amount = 2;

  // // Cache Header Section
  // var h = document.getElementsByTagName('header')[0];
  // // Add Scroll Listener
  // document.addEventListener('scroll', onBodyScroll);
  // // Listener Function
  // function onBodyScroll(e){
  //   if( window.innerHeight > window.innerWidth ){
  //     // Set Style
  //     h.style.backgroundPositionY = window.pageYOffset/amount +'px';
  //   }
  // }

}());