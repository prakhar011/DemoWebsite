const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}







// window.addEventListener('scroll',function(){
// 	const parallax=this.document.querySelector('.parallax-img')
// 	let scrollPosition=window.pageYOffset;
// 	parallax.style.transform='translateY('+scrollPosition*.5+'px'
// })
// window.addEventListener('scroll',function(){
// 	const parallax=this.document.querySelector('.parallax-text-part')
// 	let scrollPosition=window.pageYOffset;
// 	parallax.style.transform='translateY('+scrollPosition*.2+'px'
// })

const hamburger=document.getElementById('menu-btn-id');
const navwrap=document.getElementById('nav-links-id');
hamburger.addEventListener('click',()=>{
  console.log("hello");
  navwrap.classList.toggle('show');
});
const loader=document.getElementById('lottie-loader');
const loaderwrap=document.getElementById('loader-wrap');
// window.onload()

// setTimeout(()=>{
// 	loader.classList.toggle('hide-lottie')
// 	loaderwrap.classList.toggle('hide-lottie-wrap')
// },2300)
// document.addEventListener("DOMContentLoaded", function() {
	setTimeout(()=>{

		loader.classList.toggle('hide-lottie')
		loaderwrap.classList.toggle('hide-lottie-wrap')
	},2700)
//   });