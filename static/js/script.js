menubar = document.querySelector('.menu-icon')
closebar = document.querySelector('.close-icon')
ul = document.querySelector('.nav-ul')
menubar.addEventListener('click', function(){
  // alert('hai')
  menubar.style.display = "none"
  closebar.style.display = "block"
  ul.classList.add('active')
  
  console.log('hello')
})
closebar.addEventListener('click', function(){
  // alert('hai')
  closebar.style.display = "none"
  menubar.style.display = "block"
  console.log('hello')
  ul.classList.remove('active')
  
})



// home swiper 
var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
    loop: true,
  });



  // single page js 
var mainImg = document.getElementById('main-img')
var smallImg = document.getElementsByClassName('small-image')
console.log(smallImg[1])

mainImg.src = smallImg[0].src

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src
    smallImg[0].classList.add('active')
    smallImg[1].classList.remove('active')
    smallImg[2].classList.remove('active')
    smallImg[3].classList.remove('active')
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src
    smallImg[1].classList.add('active')
    smallImg[0].classList.remove('active')
    smallImg[2].classList.remove('active')
    smallImg[3].classList.remove('active')
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src
    smallImg[2].classList.add('active')
    smallImg[0].classList.remove('active')
    smallImg[1].classList.remove('active')
    smallImg[3].classList.remove('active')
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src
    smallImg[3].classList.add('active')
    smallImg[0].classList.remove('active')
    smallImg[1].classList.remove('active')
    smallImg[2].classList.remove('active')
}





