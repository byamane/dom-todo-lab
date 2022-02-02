const toDo = document.getElementById('to-do')
const btn = document.getElementById('submit-button')
const list = document.getElementById('todo-list')
const reset = document.getElementById('reset-button')

btn.addEventListener('click', function() {
// Create a new li element when the button is clicked
  const newLi = document.createElement('li')
// Set text of new li to user's text from input element
  newLi.textContent = toDo.value
// Add the new li element to the page inside the ul
// Do not allow empty items to be added
  if (toDo.value !== ""){
  list.appendChild(newLi)
// Reset the text in the input field to an empty string
  toDo.value = ''
  }
})

reset.addEventListener('click', function(){
// When reset button is clicked, remove all items from the ul & clear the input field
  list.textContent = ''
  toDo.value = ''
})

list.addEventListener('click', function(evt){
// When a list item is clicked, remove that item
  evt.target.remove()
})

