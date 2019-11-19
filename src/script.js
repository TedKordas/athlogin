const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const coach = document.getElementById('coach')
const sledType = document.getElementById('sledType')
const date = document.getElementById('date')
const time = document.getElementById('time')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }
    if (messages.length > 0) {
        e.preventDefault
        errorElement.innerText = messages.join(', ')
    }
})