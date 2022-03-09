const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0


sidebar.style.top = `-${(slidesCount -1) * 100}vh`
//sidebar.style.top = `-300vh`

upBtn.addEventListener('click', () =>{
    changeSlides('up') 
})

downBtn.addEventListener('click', () =>{
    changeSlides('down')
})

function changeSlides(direction){
 if(direction === 'up'){
     activeSlideIndex ++
     if (activeSlideIndex === slidesCount){
         activeSlideIndex = 0
     }
 }else if(direction ==='down'){
     activeSlideIndex --
     if(activeSlideIndex < 0){
         activeSlideIndex = slidesCount -1
     }
 }

const height = container.clientHeight
mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}






var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

  /*<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>*/