function timer() {
  let deadline = 'Mon, 31 Oct 2020 00:00:00 +0500'; //2020-08-10T16:10:00' with hours & minutes & seconds

  function getTimeRemaining(endTime) {
    let e = Date.parse(endTime) - Date.parse(new Date()),
      seconds = Math.floor((e / 1000) % 60),
      minutes = Math.floor((e / 1000 / 60) % 60),
      hours = Math.floor(e / (1000 * 60 * 60));

    return {
      total: e,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClock(id, endTime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds');

    let timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let time = getTimeRemaining(endTime);

      for (let key in time) {
        if (time[key] < 10 && key !== 'total') {
          time[key] = '0' + time[key];
        }
      }

      hours.textContent = time.hours;
      minutes.textContent = time.minutes;
      seconds.textContent = time.seconds;

      if (time.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        // document.querySelector('.timer').style.display = 'none';
      }
    }
  }

  setClock('timer', deadline);
}

module.export = timer();