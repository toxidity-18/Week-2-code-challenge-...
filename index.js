const shoppingList = []; 


const newItemInput = document.getElementById('newItem');
const shoppingListElement = document.getElementById('shoppingList');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
function addItem(item) {
  shoppingList.push(item);
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.addEventListener('click', togglePurchased); 
  shoppingListElement.appendChild(listItem);
  newItemInput.value = ''; 
}
function togglePurchased(event) {
  event.target.classList.toggle('purchased');
}

function clearList() {
  shoppingList.length = 0; 
  shoppingListElement.innerHTML = "";
}

addButton.addEventListener('click', function() {
  const item = newItemInput.value.trim();
  if (item) { 
    addItem(item);
  }
});

clearButton.addEventListener('click', clearList);