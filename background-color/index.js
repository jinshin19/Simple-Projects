const btns = document.querySelectorAll('button');

btns.forEach(btn => {

  btn.onclick = e => {

    if(e.currentTarget.classList == e.currentTarget.classList)

    return e.currentTarget.parentElement.style.background = e.currentTarget.classList.value,

    e.currentTarget.classList.add('clicked'),

    setTimeout(() => btn.classList.remove('clicked'), 50);

  }

})

 