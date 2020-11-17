function modal() {
  let moreBtn = document.querySelector('.more'),
    descriptionBtn = document.querySelectorAll('.description-btn'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  moreBtn.addEventListener('click', function () {
    overlayBlock(this);
  });

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    if (moreBtn.classList.contains('more-splash')) {
      moreBtn.classList.remove('more-splash');
    } else {
      for (let i = 0; i <= descriptionBtn.length; i++) {
        if (descriptionBtn[i].classList.contains('more-splash')) {
          descriptionBtn[i].classList.remove('more-splash');
          break;
        }
      }
    }
    document.body.style.overflow = '';
  });

  descriptionBtn.forEach((elem) =>
    elem.addEventListener('click', function () {
      overlayBlock(this);
    }),
  );

  function overlayBlock(btn) {
    document.body.style.overflow = 'hidden';
    overlay.style.display = 'block';
    btn.classList.add('more-splash');
  }

}

module.export = modal();