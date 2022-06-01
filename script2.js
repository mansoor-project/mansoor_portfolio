const open = document.getElementById('open')
const close = document.getElementById('close')
const circle = document.querySelector('.circle')
const nav = document.querySelector('.nav')
const container = document.querySelector('.container')
const panels = document.querySelectorAll('.panel')
const links = document.querySelectorAll('.scroll_to')
// const closep = document.querySelectorAll('#dis')
// const stagger = document.querySelectorAll('.stagger')

links.forEach((item)=>{
item.addEventListener("click",()=>{
    const el=document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({behavior:"smooth",block:"start"})
})
})



// stagger.forEach((item,idx) => {
//     let rand=Math.floor(Math.random() *(12-0))
//    if(idx%2==0){
// // item.style.left=rand*idx+(innerWidth/100) +'px'
// // item.style.top=rand*idx+(innerWidth/100) +'px'

// item.style.transform=`rotate(${idx}${rand}deg)`
// // item.style.transform=`translatex(${idx}+${rand}px)`

const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

// slideLeft.style.top = `-${(slidesLength - 1) * 77}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    
}

//    }
//        else{
//         item.style.transform=`rotate(${idx}${rand}deg)`
//         // item.style.right=rand*idx+(innerWidth/100) +'px'
//         // item.style.bottom=rand*idx+(innerWidth/100) +'px'
//        } 
//     })


// function removeActiveClassesr(particular) {
//     // //  if(particular.parentElement.style.display=="block"){
//     //      particular.parentElement.style.display="none";
//     //     // }else{
            
//     //     // }
//     // // closep.forEach(clos => {
//     // // })
// }

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('activep')
        
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('activep')
    })
}

open.addEventListener('click', () => 
{container.classList.add('show-nav');
nav.classList.add('co');
circle.classList.add('active')});

close.addEventListener('click', () =>{ container.classList.remove('show-nav');
nav.classList.remove('co');
circle.classList.remove('active')});

// window.addEventListener('scroll',closenav)

// const para = document.querySelectorAll('.left')
// const parar = document.querySelectorAll('.right')

// window.addEventListener('scroll', checkBoxes)
// window.addEventListener('scroll', checkBoxesr)

// checkBoxes()
// checkBoxesr()

// function checkBoxes() {
//     const triggerBottom = window.innerHeight / 5 * 4

//     para.forEach(paraa => {
//         const boxTop = paraa.getBoundingClientRect().bottom+400

//         if(boxTop > triggerBottom) {
//             paraa.classList.add('show')
//         } else {
//             paraa.classList.remove('show')
//         }
//     })
// }
// function checkBoxesr() {
//     const triggerBottom = window.innerHeight / 5 * 4

//     parar.forEach(paraa => {
//         const boxTop = paraa.getBoundingClientRect().bottom+250

//         if(boxTop > triggerBottom) {
//             paraa.classList.add('show')
//         } else {
//             paraa.classList.remove('show')
//         }
//     })
// }

/////////////////////////////

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circlep')
const stage2 = document.querySelectorAll('#stage2')
const stage = document.querySelectorAll('#stage')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('activec')
            
        } else {
            circle.classList.remove('activec')
           
        }
    })

    const actives = document.querySelectorAll('.activec')


    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true

    } else {
        prev.disabled = false
        next.disabled = false
    }
}



