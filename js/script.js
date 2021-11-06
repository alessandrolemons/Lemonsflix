
let perguntas = document.querySelectorAll('.pergunta');
let icone = document.querySelectorAll('.fas fa-plus')

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        pergunta.classList.toggle('mostrar')
        pergunta.children[0].children[1].classList.toggle('girar')
    })
})



