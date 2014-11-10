(function(){

	// var drag_origin;

	var elements = {
    	mobileMenu: document.getElementById('app-mobile-navigation').querySelector('.mobile-menu'),
    	mobileMenuButton: document.getElementById('app-mobile-navigation').querySelector('.mobile-menu-toggle'),
    	mobileMenuButtonIcon: document.getElementById('app-mobile-navigation').querySelector('.mobile-menu-toggle').querySelector('.fa'),
    	mainMenuButton: document.getElementById('main-menu-button'),
    	mainMenu: document.getElementById('app-page-content').querySelector('.header-menu')
  	};

	elements.mobileMenuButton.addEventListener('click', onMobileMenuClick);
	elements.mainMenuButton.addEventListener('click', onMenuClick);

	function onMenuClick(){
		apollo.toggleClass(elements.mainMenu,'open');
	}

	function onMobileMenuClick(){

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