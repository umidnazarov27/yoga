window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  //  =====   Tabs   =====
  let tabs = require('./parts/tabs')
  //  =====   Timer   =====
  let timer = require('./parts/timer')
  // ===== Modal =====
  let modal = require('./parts/modal')
  // ===== Form =====
  let form = require('./parts/form')
  //  =====   Slider   =====
  let slider = require('./parts/slider')
  //  =====   Calc   =====
  let calc = require('./parts/calc')

  // call
  tabs()
  timer()
  modal()
  form()
  slider()
  calc()
});
