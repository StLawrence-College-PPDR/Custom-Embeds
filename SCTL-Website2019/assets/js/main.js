(function($) {
    
	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {
        // HEADER
        $(function() {
            var header = $("#header");
            var aux = $(".aux");
            var light = $(".logo-dark");
            var dark = $(".logo-light");
            
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();

                if (scroll >= 140) {
                    header.removeClass('#header').addClass("alternate-header");
                    aux.hide();
                    light.show();
                    dark.hide();
                } else {
                    header.removeClass("alternate-header").addClass('header');
                    aux.show();
                    light.hide();
                    dark.show();
                }
            });
        });
        
        //FORM 
        var email = '',
            subject = '',
            category = '',
            campus = '',
            message = '',
            specialist = '',
            recipient = '',
            action = '';
        
        $("#eLearning-form").on('change', function() {
            var email = $('#formControlInput1').val();
            console.log(email);

            var subject = $('#formControlInput2').val();
            console.log(subject);

            var campus = $('#formControlSelect1').val();

            if(campus == 'brockville'){ 
                var specialist = "Carolle Boudreau"; 
                var recipient = "mailto:CBoudreau@sl.on.ca";                    
            }

            if(campus == 'cornwall'){ 
                var specialist = "Carolle Boudreau"; 
                var recipient = "mailto:CBoudreau@sl.on.ca";                    
            }

            if(campus == 'kingston'){ 
                var specialist = "Elizabeth Pero"; 
                var recipient = "mailto:EPero@sl.on.ca";                    
            }

            console.log(specialist);
            console.log(recipient);

            console.log(campus);

            var category = $('#formControlSelect2').val();
            console.log(category);

            var message = $('#formControlTextarea1').val();

            console.log(message);
            
            var emailMessage = 'Attention, ' + specialist + '.%0D%0D' + ' A faculty member has submitted an issue regarding ' + category + ':%0D "' + message + '"%0D%0D Please respond to this issue by emailing ' + email + ' or by simply replying to this message.' + ' %0D%0DThis message was created via the SCTL website, regarding an issue on the ' + campus + ' campus.';

            var action = recipient + '?subject=' + 'SCTL%20Website%20Ticket%20-%20' + subject + '&body=' + emailMessage;

            console.log(action);
            
            $("#emailSpecialist").attr("href", action);
        });
        
        //MODAL SOUND - VIDEO EMBEDS
        $('.modal').on('hide.bs.modal', function(e) {    
            var $if = $(e.delegateTarget).find('iframe');
            var src = $if.attr("src");
            $if.attr("src", '/empty.html');
            $if.attr("src", src);
        });
        
        //MODAL ON PAGE LOAD
        $(window).load(function(){        
            $('#newContentModal').modal('show');
        }); 

        //BANNER VIDEO - PLAY
        $('#play').click( function(e) {
            $('.banner-image').addClass('banner-hide');
        });
        
        $('#pause').click( function(e) {
            $('.banner-image').removeClass('banner-hide'); 
        });

        //DATE COLLECTION
//        $('.date1').click( function(e) {
//            $(this).removeClass('dimmed');   
//            $('.date2').addClass('dimmed');
//            
//            $('#day1').show();
//            $('#day2').hide();  
//            $('.collapse.show').collapse('hide'); 
//        });
//        
//        $('.date2').click( function(e) {
//            $(this).removeClass('dimmed');   
//            $('.date1').addClass('dimmed'); 
//            
//            $('#day2').show();
//            $('#day1').hide();
//            $('.collapse.show').collapse('hide'); 
//        });

        //CAROUSEL
        $('#carousel').on('slide.bs.carousel', function (e) {
            var $e = $(e.relatedTarget);
            var idx = $e.index();
            var itemsPerSlide = 3;
            var totalItems = $('.carousel-item').length;

            if (idx >= totalItems-(itemsPerSlide-1)) {
                var it = itemsPerSlide - (totalItems - idx);
                for (var i=0; i<it; i++) {
                    // append slides to end
                    if (e.direction=="left") {
                        $('.carousel-item').eq(i).appendTo('.carousel-inner');
                    }
                    else {
                        $('.carousel-item').eq(0).appendTo('.carousel-inner');
                    }
                }
            }
        });
        
        // MOBILE DETECTION
        // For Device Support (background-attachment)
        $(function() {  
            var isMobile = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i);
                },
                any: function() {
                    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
                }
            };
            
            if(isMobile.any()) {
                $('body').addClass('mobile-true');  
            }
        });
        
        //POPTROX
        $('.t1, .t2, .t3, .t4, .t5, .t6').hide();    
            
        $(".tab1").click(function(){
            $(".t6").fadeOut('fast');
            $(".t5").fadeOut('fast');
            $(".t4").fadeOut('fast');
            $(".t3").fadeOut('fast');
            $(".t2").fadeOut('fast');
            $(".t1").fadeIn('slow');

            $(this).addClass('active');
            $(".tab2").removeClass('active');
            $(".tab3").removeClass('active');
            $(".tab4").removeClass('active');
            $(".tab5").removeClass('active');
            $(".tab6").removeClass('active');
        })

        $(".tab2").click(function(){
            $(".t6").fadeOut('fast');
            $(".t5").fadeOut('fast');
            $(".t4").fadeOut('fast');
            $(".t3").fadeOut('fast');
            $(".t2").fadeIn('slow');
            $(".t1").fadeOut('fast');

            $(this).addClass('active');
            $(".tab1").removeClass('active');
            $(".tab3").removeClass('active');
            $(".tab4").removeClass('active');
            $(".tab5").removeClass('active');
            $(".tab6").removeClass('active');
        })

        $(".tab3").click(function(){
            $(".t6").fadeOut('fast');
            $(".t5").fadeOut('fast');
            $(".t4").fadeOut('fast');
            $(".t3").fadeIn('slow');
            $(".t2").fadeOut('fast');
            $(".t1").fadeOut('fast');

            $(this).addClass('active');
            $(".tab1").removeClass('active');
            $(".tab2").removeClass('active');
            $(".tab4").removeClass('active');
            $(".tab5").removeClass('active');
            $(".tab6").removeClass('active');
        })
        
        $(".tab4").click(function(){
            $(".t6").fadeOut('fast');
            $(".t5").fadeOut('fast');
            $(".t3").fadeOut('fast');
            $(".t4").fadeIn('slow');
            $(".t2").fadeOut('fast');
            $(".t1").fadeOut('fast');

            $(this).addClass('active');
            $(".tab1").removeClass('active');
            $(".tab2").removeClass('active');
            $(".tab3").removeClass('active');
            $(".tab5").removeClass('active');
            $(".tab6").removeClass('active');
        })
        
        $(".tab5").click(function(){
            $(".t6").fadeOut('fast');
            $(".t3").fadeOut('fast');
            $(".t4").fadeOut('fast');
            $(".t5").fadeIn('slow');
            $(".t2").fadeOut('fast');
            $(".t1").fadeOut('fast');

            $(this).addClass('active');
            $(".tab1").removeClass('active');
            $(".tab2").removeClass('active');
            $(".tab4").removeClass('active');
            $(".tab3").removeClass('active');
            $(".tab6").removeClass('active');
        })
        
        $(".tab6").click(function(){
            $(".t3").fadeOut('fast');
            $(".t5").fadeOut('fast');
            $(".t4").fadeOut('fast');
            $(".t6").fadeIn('slow');
            $(".t2").fadeOut('fast');
            $(".t1").fadeOut('fast');

            $(this).addClass('active');
            $(".tab1").removeClass('active');
            $(".tab2").removeClass('active');
            $(".tab4").removeClass('active');
            $(".tab5").removeClass('active');
            $(".tab3").removeClass('active');
        })
        
        //MOUSE AWARE
        $(function() {  
          $('.position-aware-animate')
            .on('mouseenter', function(e) {
                    var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                    $(this).find('span').css({top:relY, left:relX})
            })
            .on('mouseout', function(e) {
                    var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span.aware').css({top:relY, left:relX})
            });
          $('[href=#]').click(function(){return false});
        });
        
        //DROP DOWN
        $(document).ready(function(){
            $('.dropdown-toggle').dropdown()
        });
        
        //POPOVER
        $(document).ready(function(){
            $('[data-toggle="popover"]').popover({html:true})
        });
        
        //SKELETON
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

		//MENU
        $menu
            .appendTo($body)
            .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                hideOnEscape: true,
                resetScroll: true,
                resetForms: true,
                side: 'right',
                target: $body,
                visibleClass: 'is-menu-visible'
            });
        
        //SMOOTH SCROLL TAGGED ANCHORS
        $('a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });
        
        //SCROLL REVEAL
        var rafId = null;
        var delay = 50;
        var lTime = 0;

        function scroll() {
          var scrollTop = $(window).scrollTop();
          var height = $(window).height()
          var visibleTop = scrollTop + height;
          $('.reveal').each(function() {
            var $t = $(this);
            if ($t.hasClass('               reveal_visible')) { return; }
            var top = $t.offset().top;
            if (top <= visibleTop) {
              if (top + $t.height() < scrollTop) {
                $t.removeClass('reveal_pending').addClass('reveal_visible');
              } else {
                $t.addClass('reveal_pending');
                if (!rafId) requestAnimationFrame(reveal);  
              }
            }
          });
        }
        function reveal() {
          rafId = null;
          var now = performance.now();

          if (now - lTime > delay) {
            lTime = now;
            var $ts = $('.reveal_pending');
            $($ts.get(0)).removeClass('reveal_pending').addClass('reveal_visible');  
          }


          if ($('.reveal_pending').length >= 1) rafId = requestAnimationFrame(reveal);
        }

        $(scroll);
        $(window).scroll(scroll);
        $(window).change(function() {
          $('.reveal').removeClass('reveal_visible').removeClass('reveal_pending');
          lTime = performance.now() + 500;
          var top = $(window).scrollTop();
          $(window).scrollTop(top === 0 ? 1 : top-1);
        });

		// Search (header).
        var $search = $('#search'),
            $search_input = $search.find('input');

        $body
            .on('click', '[href="#search"]', function(event) {

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

        $search_input
            .on('keydown', function(event) {

                if (event.keyCode == 27)
                    $search_input.blur();

            })
            .on('blur', function() {
                window.setTimeout(function() {
                    $search.removeClass('visible');
                }, 100);
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