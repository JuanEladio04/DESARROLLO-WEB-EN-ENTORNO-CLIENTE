function addListElement(element) {
    let li = document.createElement('li');
    li.textContent = element;
    document.getElementById('diariosdeportivos').appendChild(li);
}