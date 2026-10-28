/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Avrix - Digital Agency Portfolio Template
    Version         : 1.0
    
* ================================================================= */
(function($) {
	"use strict";

	$(document).ready(function() {


		// Get Device width
		var width = $(window).width();


		/* ==================================================
		    # Wow active
		===============================================*/
		if ($(".wow").length) {
			var wow = new WOW({
				boxClass: "wow", // animated element css class (default is wow)
				animateClass: "animated", // animation css class (default is animated)
				mobile: true, // trigger animations on mobile devices (default is true)
				live: true // act on asynchronously loaded content (default is true)
			});
			wow.init();
		}

		/* ==================================================
		    # Youtube Video Init
		 ===============================================*/
		$('.player').mb_YTPlayer();


		/* ==================================================
		    # imagesLoaded active
		===============================================*/
		$('#gallery-masonary,.blog-masonry').imagesLoaded(function() {

			/* Filter menu */
			$('.mix-item-menu').on('click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});

			/* filter menu active class  */
			$('.mix-item-menu button').on('click', function(event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});

			/* Filter active */
			var $grid = $('#gallery-masonary').isotope({
				itemSelector: '.gallery-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.gallery-item',
				}
			});

			/* Filter active */
			$('.blog-masonry').isotope({
				itemSelector: '.blog-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.blog-item',
				}
			});

		});


		/* ==================================================
		    # Fun Factor Init
		===============================================*/
		$('.js-counter').numberAnimate();

		/* ==================================================
		    # Magnific popup init
		 ===============================================*/
		$(".popup-link").magnificPopup({
			type: 'image',
			// other options
		});

		$(".popup-gallery").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			// other options
		});

		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		$('.magnific-mix-gallery').each(function() {
			var $container = $(this);
			var $imageLinks = $container.find('.item');

			var items = [];
			$imageLinks.each(function() {
				var $item = $(this);
				var type = 'image';
				if ($item.hasClass('magnific-iframe')) {
					type = 'iframe';
				}
				var magItem = {
					src: $item.attr('href'),
					type: type
				};
				magItem.title = $item.data('title');
				items.push(magItem);
			});

			$imageLinks.magnificPopup({
				mainClass: 'mfp-fade',
				items: items,
				gallery: {
					enabled: true,
					tPrev: $(this).data('prev-text'),
					tNext: $(this).data('next-text')
				},
				type: 'image',
				callbacks: {
					beforeOpen: function() {
						var index = $imageLinks.index(this.st.el);
						if (-1 !== index) {
							this.goTo(index);
						}
					}
				}
			});
		});


		/* ==================================================
            # Hover Active Init
        ===============================================*/
		$('.hover-active-item').on('mouseenter', function() {
			var $this;
			$this = $(this);
			if ($this.hasClass('active')) {
				$this.addClass('active');
			} else {
				$this.addClass('active');
				$this.siblings().removeClass('active');
			}
		})



		/* ==================================================
            # Testimonial Carousel
         ===============================================*/
		const testimonialOneCarousel = new Swiper(".testimonial-one-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			grabCursor: true,
			autoplay: true,
			spaceBetween: 30,
			pagination: {
				el: '.team-pagination',
				dynamicBullets: true,
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".team-one-next",
				prevEl: ".team-one-prev"
			},

			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
				}
			},
		});



		/* ==================================================
		    Splite Text
		================================================== */
		if (width > 1023) {
			let text_split = document.querySelector(".split-text");
			if (text_split) {
				const animEls = document.querySelectorAll('.split-text');
				animEls.forEach(el => {
					var splitEl = new SplitText(el, {
						type: "lines, words",
						linesClass: "line"
					});
					var splitTl = gsap.timeline({
						duration: .35,
						ease: 'power4',
						scrollTrigger: {
							trigger: el,
							start: 'top 90%'
						}
					});

					splitTl.from(splitEl.words, {
						yPercent: "100",
						stagger: 0.025,
					});

				});
			}
		}


		/* ==================================================
		    Image Container GSAP
		================================================== */
		if (width > 1400) {
			let home_container = document.querySelector(".home-container");
			if (home_container) {
				gsap.registerPlugin(ScrollTrigger);

				let tl = gsap.timeline({
					// yes, we can add it to an entire timeline!
					scrollTrigger: {
						trigger: ".home-container",
						pin: true, // pin the trigger element while active
						start: "0%", // when the top of the trigger hits the top of the viewport
						end: "100%", // end after scrolling 500px beyond the start
						scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
					},
				});

				// tl.from(".home-container", { stagger: 0.4, opacity: 0 });

				tl.from(".home-container video", {
					width: "85%"
				}, {
					width: "100%"
				});
			}
		}

		/* ==================================================
        	# Text Scroll Animation
        ===============================================*/
		if (width > 1023) {
			let text_scroll = document.querySelector(".text-scroll-animation");
			if (text_scroll) {
				gsap.registerPlugin(ScrollTrigger);
				const textElements = gsap.utils.toArray('.text');
				textElements.forEach(text => {
					gsap.to(text, {
						backgroundSize: '100%',
						ease: 'none',
						scrollTrigger: {
							trigger: text,
							start: 'center 100%',
							end: 'center 50%',
							scrub: true,
						},
					});
				});
			}
		}


		/* ==================================================
		    GSAP Element Scroll Animation
		================================================== */
		if (width > 1199) {
			let upDown_Scroll = document.querySelector(".upDownScrol");
			if (upDown_Scroll) {
				gsap.set(".upDownScrol", {
					yPercent: 80
				});

				gsap.to(".upDownScrol", {
					yPercent: -80,
					ease: "none",
					scrollTrigger: {
						trigger: ".upDownScrol",
						end: "bottom center",
						scrub: 1
					},
				});
			}


			let rightLeft_Scroll = document.querySelector(".leftRightScroll");
			if (rightLeft_Scroll) {
				gsap.set(".leftRightScroll", {
					xPercent: -30
				});

				gsap.to(".leftRightScroll", {
					xPercent: 0,
					ease: "none",
					scrollTrigger: {
						trigger: ".leftRightScroll",
						end: "left center",
						scrub: 4
					},
				});
			}
		}


		/* ==================================================
		    Card Move Animation
		================================================== */
		if (width > 1199) {
			const advanceItems = document.querySelectorAll(".card-wrap .card-item");
			if (advanceItems.length >= 4) {
				const advanced = gsap.timeline({
					scrollTrigger: {
						trigger: ".card-wrap",
						start: "top 60%",
						toggleActions: "play none none reverse",
						markers: false,
					},
					defaults: {
						ease: "power1.out",
						duration: 1,
					},
				});

				advanced
					.from(advanceItems[0], {
						xPercent: 50,
						rotate: -8
					})
					.from(advanceItems[1], {
						xPercent: 30,
						rotate: 4.13
					}, "<")
					.from(advanceItems[2], {
						xPercent: -30,
						rotate: -6.42
					}, "<")
					.from(advanceItems[3], {
						xPercent: -60,
						rotate: 12.15
					}, "<");
			}
		}


		/* ==================================================
		    Text Sticky Animation
		================================================== */
		const tm = gsap.matchMedia();
		tm.add("(min-width: 1024px)", () => {
			let tl_team = gsap.timeline();
			let panels = document.querySelectorAll('.title-sticky-wrapper')
			panels.forEach((section, index) => {
				tl_team.to(section, {
					scrollTrigger: {
						trigger: '.title-sticky-wrapper',
						pin: '.title-sticky',
						scrub: 1,
						start: 'top 80px',
						end: "bottom 100%",
						endTrigger: '.title-sticky-wrapper',
						pinSpacing: false,
						markers: false,
					},
				})
			})
		});


		/* ==================================================
		  Scroll to top
		================================================== */
		let windowHeight = 0;
		let documentHeight = 0;

		function updateDimensions() {
			windowHeight = window.innerHeight;
			documentHeight = document.documentElement.scrollHeight - windowHeight;
		}
		updateDimensions();
		$(window).on('resize', updateDimensions);
		let $box = $(".scrollToTop");
		if ($box.length) {
			let $water = $box.find(".water");
			$(window).on('scroll', function() {
				let scrollPosition = $(window).scrollTop();
				let percent = Math.min(
					Math.floor((scrollPosition / documentHeight) * 100),
					100
				);
				$water.css("transform", "translate(0," + (100 - percent) + "%)");
				if (scrollPosition >= 200) {
					$box.fadeIn();
				} else {
					$box.fadeOut();
				}
			});

			// Scroll to top
			$box.on('click', function() {
				$('html, body').animate({
					scrollTop: 0
				}, 'smooth');
			});
		}


		/* ==================================================
		    Text Move Animation
		================================================== */
		if (width > 1023) {
			if (document.querySelectorAll(".text-scroll-items").length > 0) {
				// Detect dark mode via body class

				var ab2 = gsap.timeline({
					duration: 5,
					scrollTrigger: {
						trigger: ".text-scroll-items",
						scrub: 1,
						start: "top 100%",
						end: "bottom 0%",
					},
				});
				ab2.to(".text-move-wrapper .text-move-item", {
					scale: 0.4,
					color: "#ffffff",
					duration: 5,
					y: "50%",
					transformOrigin: "bottom center",
				});

			}
		}



		/* ==================================================
		    Hover Reveal Animation
		================================================== */
		if (width > 1023) {
			const hoverItem = document.querySelectorAll(".hover-reveal-item");

			function moveImage(e, hoverItem) {
				const item = hoverItem.getBoundingClientRect();
				const x = e.clientX - item.x;
				const y = e.clientY - item.y;
				if (hoverItem.children[1]) {
					hoverItem.children[1].style.transform = `translate(${x}px, ${y}px)`;
				}
			}
			hoverItem.forEach((item, i) => {
				item.addEventListener("mousemove", (e) => {
					setInterval(moveImage(e, item), 100);
				});
			});


			$('.hover-reveal-item').hover(function() {
				$(".hover-reveal-item").css("opacity", ".6");
				$(this).css("opacity", "1");
			}, function() {
				$(".hover-reveal-item").css("opacity", "1");
			});
		}


		/* ==================================================
		    Contact Form Validations
		================================================== */
		$('.contact-form').each(function() {
			var formInstance = $(this);
			formInstance.submit(function() {

				var action = $(this).attr('action');

				$("#message").slideUp(750, function() {
					$('#message').hide();

					$('#submit')
						.after('<img src="assets/img/ajax-loader.gif" class="loader" />')
						.attr('disabled', 'disabled');

					$.post(action, {
							name: $('#name').val(),
							email: $('#email').val(),
							phone: $('#phone').val(),
							comments: $('#comments').val()
						},
						function(data) {
							document.getElementById('message').innerHTML = data;
							$('#message').slideDown('slow');
							$('.contact-form img.loader').fadeOut('slow', function() {
								$(this).remove()
							});
							$('#submit').removeAttr('disabled');
						}
					);
				});
				return false;
			});
		});

	}); // end document ready function

	$(window).on('load', function(event) {
		$('#preloader').delay(500).fadeOut(500);
	});
	
})(jQuery); // End jQuery