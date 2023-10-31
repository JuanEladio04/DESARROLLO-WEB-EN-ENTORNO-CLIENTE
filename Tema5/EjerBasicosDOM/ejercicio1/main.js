function getNLinks() {
    document.write("<p>Número de links en la página: " + document.getElementsByTagName("a").length + "</p>")
}

function getPenultimateLink() {
    let links = document.getElementsByTagName("a");
    let penultimateLink = links[links.length - 2].getAttribute("href");
    document.write("<p>Dirección a la que enlaza el penúltimo link: " + penultimateLink + "</p>")
}

function findByLink(link) {
    let links = document.getElementsByTagName("a");
    let cont = 0;
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href") == link) {
            cont++;
        }
    }
    document.write("<p>Numero de links que enlazan a" + link +": " + cont + "</p>")
}

function getNLinkByParagraph(nparagraph) {
    const paragraphs = document.getElementsByTagName("p");
    var paragraph = paragraphs[nparagraph - 1];
    document.write("<p>Número de enlaces del tercer párrafo: " + paragraph.getElementsByTagName("a").length +"</p>")
}
