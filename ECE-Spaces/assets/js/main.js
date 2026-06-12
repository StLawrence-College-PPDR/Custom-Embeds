(function($) {
    
	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});
    
	$(function() {
        $(document).ready(function() {
            $('.internal-content').fadeIn(1000);
            $('.internal-heading').fadeIn(1000);
            $('footer.landing').fadeIn(1000);
        });
        
        $("#complete").click(function() {  
            $('.complete-message').fadeIn(1000);
        });
        
        $(".complete-close").click(function() {  
            $('.complete-message').fadeOut(1000);
        });
        
        function shuffle(array) {
          var m = array.length, t, i;

          // While there remain elements to shuffle…
          while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
          }

          return array;
        }

//        $(function() {
//            $(document).ready(function() {
//                var $all = $(".slick-slide").removeClass("selected").addClass("unselected");
//                $(shuffle($all).slice(0,5)).removeClass("unselected").addClass("selected");
//                
//                if ($(".slick-slide").hasClass("unselected")) {
//                    $(".unselected").detach();
//                }
//            });
//        });
        
        //Modal Sound - Video Embeds
        $('.modal').on('hide.bs.modal', function(e) {    
            var $if = $(e.delegateTarget).find('iframe');
            var src = $if.attr("src");
            $if.attr("src", '/empty.html');
            $if.attr("src", src);
        });
        
        $('li[data-value]').each(function(){
            $(".question").click(function() {  
                if ($(this).data("value") == "correct") {
                    $(this).attr('aria-label', 'correct');
                    $(this).addClass("correct");
                } else {
                    $(this).attr('aria-label', 'incorrect');
                    $(this).addClass("incorrect");
                }
            });
            
            $(".question").keypress(function() {  
                if ($(this).data("value") == "correct") {
                    $(this).attr('aria-label', 'correct');
                    $(this).addClass("correct");
                } else {
                    $(this).attr('aria-label', 'incorrect');
                    $(this).addClass("incorrect");
                }
            });
        });
        
        $('.block').popover({
          trigger: 'focus'
        })

		var	$window = $(window),
			$body = $('body'),
			$menu = $('#menu'),
			$sidebar = $('#sidebar'),
			$main = $('#main');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');
        
			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// IE<=9: Reverse order of main and sidebar.
			if (skel.vars.IEVersion <= 9)
				$main.insertAfter($sidebar);

		// Menu.
			$menu
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});
        
            $menu.onclick
        
        $('#close-button').click(function() {
            $menu.fadeOut();
            $body.removeClass('is-menu-visible');
        });
        
        $('#close-button').keypress(function() {
            $menu.fadeOut();
            $body.removeClass('is-menu-visible');
        });
        
        $('nav').click(function() {
            $menu.fadeIn();
            $menu.show();
        });

		// Search (header).
			var $search = $('#search'),
				$search_input = $search.find('input');

			
    $body.on('click', '[href="#search"]', function(event) {

        event.preventDefault();

        // Not visible?
        if (!$search.hasClass('visible')) {

            // Reset form.
                $search[0].reset();

            // Show.
                $search.addClass('visible');

            // Focus input.
                $search_input.focus();
        }
    });

    // Intro.
    var $intro = $('#intro');

    // Move to main on <=large, back to sidebar on >large.
    skel
        .on('+large', function() {
            $intro.prependTo($main);
        })
        .on('-large', function() {
            $intro.prependTo($sidebar);
        });

	});
    
})(jQuery);