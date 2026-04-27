function updateTime() {
  const now = new Date();
  const formatted = now.toLocaleTimeString();
  const timeElement = document.getElementById('time');

  if (timeElement) {
    timeElement.textContent = formatted;
  }
}

updateTime();
setInterval(updateTime, 1000);
