// start js

	$(function(){

		// start height 100%

			WinHeight = $(window).height();

			$('.section-top,#MenuContent').css('height', WinHeight);

			// start resize height 
			$(window).resize(function(){

				WinHeight = $(window).height();

			    $('.section-top,#MenuContent').css('height', WinHeight);

			});

		// end height 100%


		// Start Material Menu

			function MaterialMenu() {
				
				$('#MenuBTN').click(function() {
					
					$('#MenuBTN').toggleClass('opened-btn');
				
					$('#MenuContent').toggleClass('open-menu-content');

					if ( $('#MenuContent').hasClass('open-menu-content') ) {
						
						$('#MenuBTN').css('position', 'fixed');

						$('.main-content').css('margin-right', '40%');
						$('.main-content').css('width', '60%');

					} else {
						
						$('#MenuBTN').css('position', 'absolute');

						$('.main-content').css('margin-right', '0%');
						$('.main-content').css('width', '100%');
					
					}

				});

			}

			function MaterialDetail() {
				
				$('.menu-content').find('a').click(function() {
					
					$('#MenuBTN').removeClass('opened-btn');
				
					$('#MenuContent').removeClass('open-menu-content');

					if ( $('#MenuContent').hasClass('open-menu-content') ) {
						
						$('#MenuBTN').css('position', 'fixed');

						$('.main-content').css('margin-right', '40%');
						$('.main-content').css('width', '60%');

					} else {
						
						$('#MenuBTN').css('position', 'absolute');

						$('.main-content').css('margin-right', '0%');
						$('.main-content').css('width', '100%');
					
					}

				});

			}
			MaterialDetail();
			MaterialMenu();

		// End Material Menu

	});

// end js
