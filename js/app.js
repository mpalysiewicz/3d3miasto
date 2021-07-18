function changeTitle() {
  const message = 'Wróć na 3D3Miasto!';
  let original;

  window.addEventListener('focus', function () {
    if (original) {
      document.title = original;
    }
  })

  window.addEventListener('blur', function () {
    const title = document.title;
    if (title != message) {
      original = title;
    }
    document.title = message;
  })
}

const init = function () {
  changeTitle();
};

document.addEventListener('DOMContentLoaded', init);