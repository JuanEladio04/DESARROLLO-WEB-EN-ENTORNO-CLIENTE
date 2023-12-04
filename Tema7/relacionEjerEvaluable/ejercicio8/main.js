var buttons = document.getElementsByClassName('bgChangeButton');

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseenter', function () {
    let color = this.style.backgroundColor;
    document.body.style.backgroundColor = color;
  });

  buttons[i].addEventListener('mouseleave', function () {
    document.body.style.backgroundColor = 'white';
  });
}