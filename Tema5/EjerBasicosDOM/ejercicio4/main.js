function showWellcome(name, secondName) {
    let wellcomeMessage = document.createElement('p');
    wellcomeMessage.textContent = "Hola, bienvenido " + name + " " + secondName;
    document.getElementById('wellcomeMessage').appendChild(wellcomeMessage);
}

function clearMessage() {
    console.log('Limpiado');

    var nameField = document.getElementsByName('ittName')[0];
    var secondNameField = document.getElementsByName('ittSecondName')[0];
  
    nameField.value = '';
    secondNameField.value = '';
  
    var wellcomeMessage = document.getElementById('wellcomeMessage');
  
    if (wellcomeMessage) {
      wellcomeMessage.innerHTML = '';
    }
  }
  
  