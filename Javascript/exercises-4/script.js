function scrollsubir() {
	window.scrollTo({
		top: 0,
		behavior:'smooth'
	});
};
function sumirScroll() {
	if (window.scrollY === 0) {
		document.querySelector('.clickRedondo').style.display = 'none';
	}else {
		document.querySelector('.clickRedondo').style.display = 'block';
	};
}
window.addEventListener('scroll', sumirScroll);