function quitarGris() {
  this.classList.add('quitarGris');
}

let llorando = document.getElementById('llorando');
llorando.addEventListener('click', quitarGris);

let triste = document.getElementById('triste');
triste.addEventListener('click', quitarGris);

let serio = document.getElementById('serio');
serio.addEventListener('click', quitarGris);

let contento = document.getElementById('contento');
contento.addEventListener('click', quitarGris);

let muyContento = document.getElementById('muy-contento');
muyContento.addEventListener('click', quitarGris);