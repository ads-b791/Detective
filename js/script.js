"use strict"

const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
});


new Swiper('.services-slider', {
	navigation: {
		nextEl: '.slider-next',
		prevEl: '.slider-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	slidesPerView: 1,
	loop: true,
	spaceBetween: 30,

	breakpoints: {
		320: {
			slidesPerView: 0.55,
			spaceBetween: 20,
			centeredSlides: true,
		},
		400: {
			slidesPerView: 0.9,
		},
		550: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 2,
		},
		1423: {
			slidesPerView: 3,
		},
		1621: {
			slidesPerView: 4,
		}

	}

});