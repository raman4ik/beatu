const body = document.querySelector('body')

window.addEventListener('scroll', function () {
	const header = document.querySelector('header');
	header.classList.toggle("sticky", window.scrollY > 0)
	header.classList.toggle('body.lock')
});

function toggleMenu() {
	const menuToggle = document.querySelector('.menuToggle');
	const navigation = document.querySelector('.navigation');
	menuToggle.classList.toggle('active')
	navigation.classList.toggle('active')
	if (navigation.classList.contains('active')) {
		body.style.overflow = 'hidden'
	} else {
		body.style.overflow = 'auto'
	}
}

