document.addEventListener('DOMContentLoaded', () => {
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    if (seconds === 0) {
      secondHand.style.transition = 'none';
    } else {
      secondHand.style.transition = '';
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // let digitalTime = document.getElementById('digitalClock');
    // digitalTime.innerText = `${hour}:${mins < 10 ? '0' + mins : mins}:${
    //   seconds < 10 ? '0' + seconds : seconds
    // }`;
  }

  setInterval(setDate, 1000);

  setDate();
});
