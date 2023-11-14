function clickOnFirst() {
    let paragraphs = document.getElementsByTagName('p');
    paragraphs[0].style.color = 'red';
    paragraphs[1].style.color = 'black';
    paragraphs[2].style.color = 'black';
}

function clickOnSecond() {
    let paragraphs = document.getElementsByTagName('p');
    paragraphs[0].style.color = 'black';
    paragraphs[1].style.color = 'blue';
    paragraphs[2].style.color = 'black';
}

function clickOnThird() {
    let paragraphs = document.getElementsByTagName('p');
    paragraphs[0].style.color = 'black';
    paragraphs[1].style.color = 'black';
    paragraphs[2].style.color = 'green';
}