const hamb = document.querySelector(".hamb");
const navList = document.querySelector(".menu-overlay");
const header = document.querySelector(".hero header");

hamb.addEventListener("click", function() {
	navList.classList.toggle("active");
	hamb.classList.toggle("click");
})

window.addEventListener("scroll", function() {
	if (window.scrollY > 30) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
});