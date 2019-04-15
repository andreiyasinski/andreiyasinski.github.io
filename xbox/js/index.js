document.querySelector('#menu-btn').addEventListener('click', function(e) {
  document.querySelector('#nav').classList.toggle('menu_toggle');
  document.querySelector('#menu-btn').classList.toggle('menu_btn_active');
});