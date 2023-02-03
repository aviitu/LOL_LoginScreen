const inputs = document.querySelectorAll('.input');

const handleFocus = (event) => {
    console.log(event.target);

}

inputs.forEach((input) =>  input.addEventListener('focus', handleFocus));

