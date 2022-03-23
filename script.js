let botonPlay = document.getElementById('play')
let botonPausa = document.getElementById('pausa')
let video = document.getElementById('video')
let duracionVideo = document.getElementById('duracion')

botonPlay.addEventListener('click',()=>{
    video.play()
})

botonPausa.addEventListener('click',()=>{
    video.pause()
})

duracionVideo.textContent= `Duración video: ${video.duration}`