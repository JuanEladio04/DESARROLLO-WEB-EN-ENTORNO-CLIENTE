function ChangeLink() {
    const paragraphs = Array.from(document.getElementsByTagName('p'));
    paragraphs.forEach(paragraph => {
        let link = Array.from(paragraph.getElementsByTagName('a'));
        if(link.length > 0){
            link[0].href = "http://www.as.com"
        }
    });
}
