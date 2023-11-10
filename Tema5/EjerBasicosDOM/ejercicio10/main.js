function insertListElements(content, position) {
    let nPoss = parseInt(position) + 1;
    let nElement = document.createElement('li');
    nElement.textContent = content;
    
    let list = document.getElementsByTagName('ol')[0];
    list.insertBefore(nElement, list.childNodes[nPoss]);
}
