const arrayBoxes = document.querySelectorAll('.box');

arrayBoxes.forEach(box => {
  box.addEventListener("click", event => {
    console.log('event', event)
  })
})
