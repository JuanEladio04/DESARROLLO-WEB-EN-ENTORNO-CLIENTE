var tittle = document.getElementsByTagName("h1");

tittle[0].addEventListener('click', function () {
  document.body.style.backgroundImage = 'url(img/imagen.avif)';
});

document.addEventListener('keydown', function (event) {
  if (event.altKey && event.key === 'F12') {
    document.body.style.backgroundImage = 'url(img/imagen.avif)';
  }
});
