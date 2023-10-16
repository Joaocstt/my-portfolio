function activeLetter(e) {
    const array_text = e.innerHTML.split('');
    e.innerHTML = ''
    
    array_text.forEach((letra, i) => {
        setTimeout(() => {
            e.innerHTML += letra
        }, 75 * i)
    })
}

const title = document.querySelector('.h2_d');
activeLetter(title);


