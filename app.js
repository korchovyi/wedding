document.documentElement.style.setProperty('--center-top', `${window.innerHeight / 2}px`);

$('.js-start-trigger').on('click', () => {
  console.log('Start button clicked!');


  sealVibrate();
  setTimeout(() => {
    sealOpen();
    setTimeout(() => {
      $('.js-seal').remove();
      ribbonOpen();
      setTimeout(() => {
        $('.js-ribbon').remove();
        rollPergament();
        setTimeout(() => {
          $('.tassel').addClass('tassel-visible');
        }, 1000);
      }, 500);
    }, 500);
  }, 500);

});

const sealVibrate = () => {
  $('.js-seal').addClass('seal-vibrate seal-shadow').removeClass('seal-hover');
  setTimeout(() => {
    $('.js-seal').addClass('seal-shadow-fade');
  });
}

const sealOpen = () => {
  $('.js-seal').removeClass('seal-vibrate').addClass('seal-open');
}

const ribbonOpen = () => {
  $('.js-ribbon').addClass('ribbon-open');
}

const rollPergament = () => {
  $('.js-pergament-top').addClass('pergament-top-opened');
  $('.js-pergament-bottom').addClass('pergament-bottom-opened');
  $('.js-pergament-body').addClass('pergament-body-opened');
}

console.log('App initialized!');