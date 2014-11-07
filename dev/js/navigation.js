(function(){

	// var drag_origin;

	var elements = {
    	mobileMenu: document.getElementById('app-header').querySelector('.mobile-menu'),
    	mobileMenuButton: document.getElementById('app-header').querySelector('.menu-toggle')
  	};

	elements.mobileMenuButton.addEventListener('click', onMenuClick);

	function onMenuClick(){
		apollo.toggleClass(document.body, 'active');
		apollo.toggleClass(elements.mobileMenuButton, 'active');
		apollo.toggleClass(elements.mobileMenu, 'active');
		elements.mobileMenuButton.offsetWidth = elements.mobileMenuButton.offsetWidth;

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