let paragraphs = document.getElementsByTagName('p');

for(let i = 0; i < paragraphs.length; i++) {
  let activator = paragraphs[i].getElementsByClassName('activator');
  activator[0].addEventListener('mouseenter', function () {
    let hiddenText = paragraphs[i].getElementsByClassName('hiddenText');
    hiddenText[0].style.display = 'inline';
  });

  activator[0].addEventListener('mouseleave', function () {
    let hiddenText = paragraphs[i].getElementsByClassName('hiddenText');
    hiddenText[0].style.display = 'none';
  });
}
