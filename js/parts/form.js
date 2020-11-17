function form() {
  let message = {
    loading: 'Loading...',
    success: 'Thank, Soon we will contact with you',
    failure: 'Error',
  };

  let popupForm = document.querySelector('.main-form'),
    form = document.querySelector('#form');

  popupForm.addEventListener('submit', function (event) {
    sendForm(event, this);
  });

  form.addEventListener('submit', function (event) {
    sendForm(event, this);
  });

  function sendForm(event, elem) {
    event.preventDefault();

    let formData = new FormData(elem);
    let input = elem.getElementsByTagName('input');
    let obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);

    function postData(data) {
      return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        request.addEventListener('readystatechange', () => {
          if (request.readyState === 4 || request.status === 200) resolve();
          else reject();
        });
        request.send(data);
      });
    }

    function clearInput() {
      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }
    }

    postData(json)
      .then(() => alert(message.success))
      .catch(() => alert(message.failure))
      .then(clearInput);
  }
}

module.export = form()