// JUEGO
pieza1 = document.getElementById('pieza-1')
pieza2 = document.getElementById('pieza-2')
pieza3 = document.getElementById('pieza-3')
caja = document.getElementsByClassName('caja')

//pieza 1
pieza1.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('URL', "./multimedia/Rompe1.png")
});

caja[0].addEventListener('dragover', (e) => {
    e.preventDefault()
});

caja[0].addEventListener('drop', (e) => {
    let dato = e.dataTransfer.getData('URL')
    caja[0].innerHTML = `<img src="${dato}" class="pieza"/>`
    pieza1.style.visibility = 'hidden'
});

//pieza 2
pieza2.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('URL', "./multimedia/Rompe2.png")
});

caja[1].addEventListener('dragover', (e) => {
    e.preventDefault()
});

caja[1].addEventListener('drop', (e) => {
    let dato = e.dataTransfer.getData('URL')
    caja[1].innerHTML = `<img src="${dato}" class="pieza"/>`
    pieza2.style.visibility = 'hidden'
});

//pieza 3
pieza3.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('URL', "./multimedia/Rompe3.png")
});

caja[2].addEventListener('dragover', (e) => {
    e.preventDefault()
});

caja[2].addEventListener('drop', (e) => {
    let dato = e.dataTransfer.getData('URL')
    caja[2].innerHTML = `<img src="${dato}" class="pieza"/>`
    pieza3.style.visibility = 'hidden'
});

//boton reiniciar
botonReiniciar = document.getElementById('reiniciar')
botonReiniciar.addEventListener('click', () => {
    pieza1.style.visibility = 'visible'
    pieza2.style.visibility = 'visible'
    pieza3.style.visibility = 'visible'
    for (let i = 0; i < caja.length; i++) {
        caja[i].innerHTML = `<p>Arrastre y suelte la imágen aqui</p>`
    }
})