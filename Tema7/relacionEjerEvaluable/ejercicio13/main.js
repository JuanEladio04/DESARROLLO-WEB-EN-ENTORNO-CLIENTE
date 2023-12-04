var medidor = Number(document.getElementById('medidor').textContent);
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp') {
    if (medidor < 100) {
      medidor++;
    }
  }

  if (event.key === 'ArrowDown') {
    if (medidor > 0) {
      medidor--;
    }
  }

  document.getElementById('medidor').textContent = medidor.toString();

});