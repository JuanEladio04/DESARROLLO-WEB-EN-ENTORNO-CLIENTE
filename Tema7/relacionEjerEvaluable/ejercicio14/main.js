function analizeWindow() {
    let text = document.getElementsByTagName('textarea')[0];

    var eWindow = window.open("", "Análisis", "width=500px,height=300px");
    analizeText(eWindow, text);
}

function analizeText(eWindow, text) {
    eWindow.document.write("<p> Número de palabras: " + countWords(text.value) + "</p>");
    eWindow.document.write("<p> Primera palabra: " + firstWord(text.value) + "</p>");
    eWindow.document.write("<p> Última palabra: " + lastWord(text.value) + "</p>");
    eWindow.document.write("<p> Colocadas al revés: " + reverseText(text.value) + "</p>");
    eWindow.document.write("<p> Ordenadas de la 'a' a la 'z': " + sortTextAtoZ(text.value) + "</p>");
    eWindow.document.write("<p> Ordenadas de la 'z' a la 'a': " + sortTextZtoA(text.value) + "</p>");
}

function countWords(text) {
    let c = text.split(' ').length;

    return c;
}

function firstWord(text) {
    let c = text.split(' ');

    return c[0];
}

function lastWord(text) {
    let c = text.split(' ');

    return c[c.length - 1];
}

function reverseText(text) {
    text = text.split(' ');
    let reverseText = ''

    for (let i = text.length - 1; i >= 0; i--) {
        reverseText = reverseText + text[i] + " ";
    }

    return reverseText;
}

function sortTextAtoZ(text) {
    text = text.split(' ').sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join(' ');
    return text;
}

function sortTextZtoA(text) {
    text = text.split(' ').sort((b, a) => a.toLowerCase().localeCompare(b.toLowerCase())).join(' ');
    return text;
}