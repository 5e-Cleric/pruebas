
function addEventListeners() {
  document.getElementById("language").addEventListener('click', lngtoggle);
  var lngdropdown = document.getElementsByClassName("langdropdownbtn");
  for (let i = 0; i < lngdropdown.length; i++) {
    lngdropdown[i].addEventListener('click', lngtoggle);
  }

  document.getElementById("sidebarblur").addEventListener('click', ToggleSidebar);
  document.getElementById("sidebartoggle").addEventListener('click', ToggleSidebar);
  document.getElementById("dark-light-mode").addEventListener('click', toggledarkmode);
}

function lngtoggle() {
  document.getElementById("language").classList.toggle('active');
}

function ToggleSidebar() {
  document.getElementById("sidebar").classList.toggle('closed');
  document.getElementById("sidebarblur").classList.toggle('off');
  document.getElementById("sidebartoggleimgholder").classList.toggle('open');
  document.body.classList.toggle("navopen");
}

function toggledarkmode() {
  document.body.classList.toggle("darkmode");
}

window.onload = addEventListeners;




