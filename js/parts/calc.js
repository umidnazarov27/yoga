function calc() {
  let person = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personSum = 0,
    daysSum = 0,
    total = 0;

  person.addEventListener('input', function () {
    personSum = +this.value;
    total = calcTotal();
    displayTotalValue();
  });

  restDays.addEventListener('input', function () {
    daysSum = +this.value;
    total = calcTotal();
    displayTotalValue();
  });

  place.addEventListener('change', () => {
    total = calcTotal();
    displayTotalValue();
  });

  function calcTotal() {
    return daysSum !== 0 && personSum !== 0
      ? (daysSum + personSum) * 4000 * place.options[place.selectedIndex].value
      : 0;
  }

  function displayTotalValue() {
    totalValue.innerHTML = total;
  }
}

module.export = calc();