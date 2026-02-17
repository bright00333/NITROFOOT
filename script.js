function showTime() {
  const el = document.getElementById("currentTime");
  if (el) {
    el.innerHTML = new Date().toUTCString();
  }
}

showTime();
setInterval(showTime, 1000);
