const time = document.querySelector('.time');
const pageDate = document.querySelector('.date');

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  setTimeout(showTime, 1000);
}

function showDate() {
  const date = new Date();
  const options = {month: 'long', day: 'numeric', weekday: 'long', timeZone: 'Europe/Moscow'};
  const currentDate = date.toLocaleDateString('en-Br', options);
  pageDate.textContent = currentDate;
}

showTime();