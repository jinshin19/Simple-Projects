const btns = document.querySelectorAll('button');
let slider = document.querySelector('.imgs');
let imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
let i = 0;

const prev = () => {

  if ( i <= 0 ) i = imgs.length;

  i--;

  return setImg();

}

const next = () => {

  if ( i >= 4 ) i = - 1;

  i++;

  return setImg();

}

const setImg = () => {

  return slider.setAttribute('src', 'img/' + imgs[i]);

}

btns.forEach(btn => {
  
  btn.onclick = e => {

    e.target.classList.add('clicked');

    setTimeout(() => e.target.classList.remove('clicked'), 50);

    if (e.target.textContent.toLowerCase() == 'prev') return prev();
    return next();

  }

});