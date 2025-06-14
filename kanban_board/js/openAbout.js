const about = document.querySelector('.about')
const aboutBlock = document.querySelector('.about-block')
const closeBtn = document.querySelector('.close-btn');

about.addEventListener('click', ()=>{
    aboutBlock.classList.toggle('hide')
})

closeBtn.addEventListener('click', () => {
    aboutBlock.classList.add('hide');
});