document.addEventListener('DOMContentLoaded', () => {
	const catalogHeader = document.querySelector('.catalog-header')

	catalogHeader.addEventListener('click', e => {
		e.stopPropagation()
		catalogHeader.classList.toggle('active')
	})

	document.addEventListener('click', e => {
		if (!catalogHeader.contains(e.target)) {
			catalogHeader.classList.remove('active')
		}
	})

	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			catalogHeader.classList.remove('active')
		}
	})
})
