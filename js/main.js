window.addEventListener('DOMContentLoaded', function () {

    'use strict';


    //  =====   Tabs   =====

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });


    //  =====   Timer   =====

    let deadline = 'Mon, 1 Sep 2020 00:00:00 +0500'; //2020-08-10T16:10:00' with hours & minutes & seconds

    function getTimeRemaining(endTime) {

        let e = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((e / 1000) % 60),
            minutes = Math.floor((e / 1000 / 60) % 60),
            hours = Math.floor((e / (1000 * 60 * 60)));

        return {
            'total': e,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
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


    // ===== Modal =====

    let moreBtn = document.querySelector('.more'),
        descriptionBtn = document.querySelector('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    moreBtn.addEventListener('click', function () {
        overlayBlock();
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        moreBtn.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    descriptionBtn.addEventListener('click', function () {
        overlayBlock();
    });

    function overlayBlock() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

});