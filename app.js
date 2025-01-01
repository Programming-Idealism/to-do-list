'use strict'


// Psuedo code:
// 1. Create the links between elements, nodelists and variables
// 2. Generate and display the desired output on screen
// 3. Add a delete button that deletes the item when clicked by the user

const mainContainer = document.querySelector('.todo-list-container')
const userInput = document.getElementById('user-input')
const submitBtn = document.querySelector('.submit-btn')

submitBtn.addEventListener('click', () => {
    // Validate empty input
    if (userInput.value === '') {
        return
    }
    // Validate input's length
    if (userInput.value.length > 22) {
        alert('Input is too long. Maximum characters capacity is 22.')
        clearInputDisplay()
        return
    }
    // Create a new item's list and updating it based on the task's name
    let listItem = document.createElement('li')
    mainContainer.appendChild(listItem)
    listItem.classList.add('list-item')
    const task = userInput.value.trim()
    // Make the first letter of each word in the display output uppercased
    const formattedTask = task
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    listItem.textContent = formattedTask
    // Clearing the input once a task has been inserted
    clearInputDisplay()
    // Create the delete button and functioning it to remove the list item element once it has been clicked
    const secondaryContainer = document.createElement('div')
    mainContainer.appendChild(secondaryContainer)
    secondaryContainer.classList.add('secondary-container')
    secondaryContainer.appendChild(listItem)
    const deleteBtn = document.createElement('button')
    secondaryContainer.appendChild(deleteBtn)
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete-btn')
    deleteBtn.addEventListener('click', () => mainContainer.removeChild(secondaryContainer))
})

document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        submitBtn.click()
    } 
    if (event.key === 'Backspace') {
        const lastDeleteButton = document.querySelector('.delete-btn:last-of-type')
        if (lastDeleteButton) {
            lastDeleteButton.click()
        }
    }
})

// Auxillary function
function clearInputDisplay() {
    userInput.value = ''
}