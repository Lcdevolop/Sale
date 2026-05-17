const form = document.querySelector('#form-new')
const input = document.querySelector('#username')

form.addEventListener( 'submit', (e) => {
    e.preventDefault()
    console.log(input.value);
        
})