const container = document.querySelector('.container')
const conteinerStyle = {
    border: '2px solid grey',
    height: '50vh'
}

const style = document.querySelector('style')
//pobranie przycisków
const buttons = [...document.querySelectorAll('.flex-panel button ')];


const optionParent = (e) => {
    // console.log(e.target.title)
    const option = e.target.title;
    const btn = e.target

    if (!btn.classList.contains('active')) {
        container.style[option] = e.target.dataset.option;
        console.log(btn)
        btn.classList.add('active');
    } else {
        container.style[option] = ''
        btn.classList.remove('active');
    }

    console.log(container.style)

}


buttons.forEach(button => button.addEventListener('click', optionParent))