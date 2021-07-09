function startCountdown() {
  let counter = 45;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById('count');
      span.innerHTML = `Countdown timer: ${counter} seconds`;
    }
    if (counter === 0) {
      alert('Sorry, you ran out of time');
      clearInterval(counter);
    }
  }, 1000);
}
