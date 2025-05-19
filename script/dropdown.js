document.addEventListener('DOMContentLoaded', function () {
	const catalogHeader = document.querySelector('.catalog-header')

	catalogHeader.addEventListener('click', function (e) {
		e.stopPropagation()
		this.classList.toggle('active')
	})

	document.addEventListener('click', function () {
		catalogHeader.classList.remove('active')
	})

	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			catalogHeader.classList.remove('active')
		}
	})

	// Мобильное меню
	const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
	const nav = document.querySelector('nav')

	if (mobileMenuToggle) {
		mobileMenuToggle.addEventListener('click', function () {
			this.classList.toggle('active')
			nav.classList.toggle('active')
		})
	}
})
