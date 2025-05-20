document.addEventListener('DOMContentLoaded', function () {
	const loginBtn = document.querySelector('.login-btn')
	const modal = document.querySelector('.modal')
	const modalClose = document.querySelector('.modal-close')
	const modalOverlay = document.querySelector('.modal-overlay')

	if (loginBtn) {
		loginBtn.addEventListener('click', function () {
			modal.classList.add('active')
			document.body.style.overflow = 'hidden'
		})
	}

	if (modalClose) {
		modalClose.addEventListener('click', function () {
			modal.classList.remove('active')
			document.body.style.overflow = ''
		})
	}

	if (modalOverlay) {
		modalOverlay.addEventListener('click', function () {
			modal.classList.remove('active')
			document.body.style.overflow = ''
		})
	}

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && modal.classList.contains('active')) {
			modal.classList.remove('active')
			document.body.style.overflow = ''
		}
	})
})
