function allToRed() {
    const paragraphs = Array.from(document.getElementsByTagName("p"));
    paragraphs.forEach(paragraph => {
        paragraph.style.color="red";
    });
}


function firstToRed() {
    const paragraphs = Array.from(document.getElementsByTagName("p"));
    paragraphs[0].style.color="red";
}

function pairToRed() {
    const paragraphs = Array.from(document.getElementsByTagName("p"));
    for (let i = 0; i < paragraphs.length; i++) {
        if((i % 2) == 0){
            paragraphs[i].style.color="red";
        }
    }
}

function oddToRed() {
    const paragraphs = Array.from(document.getElementsByTagName("p"));
    for (let i = 0; i < paragraphs.length; i++) {
        if(!(i % 2) == 0){
            paragraphs[i].style.color="red";
        }
    }
}

function addToEnd() {
    let paragraph = document.createElement('p');
    paragraph.textContent ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus veniam fugiat commodi maiores aliquam minima laudantium eligendi, totam tempora?';
    document.getElementById("paragraphs").appendChild(paragraph);
}

function allDefault() {
    location.reload();
}
