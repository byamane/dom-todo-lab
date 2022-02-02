const toDo = document.getElementById('to-do')
const btn = document.getElementById('submit-button')
const list = document.getElementById('todo-list')

btn.addEventListener('click', function(evt) {
// Create a new li element when the button is clicked
  const newLi = document.createElement('li')
// Set text of new li to user's text from input element
  newLi.textContent = toDo.value
// Reset the text in the input field to an empty string
  toDo.value = ''
// Add the new li element to the page inside the ul
  list.appendChild(newLi)
})