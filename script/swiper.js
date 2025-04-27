document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.swiper', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 1,
			},
		},
	})
})
