const arrayBoxes = document.querySelectorAll('.box');

arrayBoxes.forEach(box => {
  box.addEventListener("click", event => {
    selected(event.target);
  })
})

function selected(selectedElement) {
  selectedElement.classList.add("selected");
}