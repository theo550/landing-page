let menu = document.querySelector('.menu')
let hamburger = document.querySelector('.hamburger')
let cross = document.querySelector('.close')

hamburger.addEventListener('click', () => {
  menu.style.display = 'flex'
  hamburger.style.display = 'none'
  cross.style.display = 'block'
})

cross.addEventListener('click', () => {
  menu.style.display = 'none'
  hamburger.style.display = 'block'
  cross.style.display = 'none'
})