let counter = 45;
let firstCounterStopped = 45;
let counterStopped = [];

function startCountdown() {
  setInterval(function () {
    let span = document.getElementById('count');
    counter--;
    if (counter >= 0) {
      span.innerHTML = `Countdown timer: ${counter} seconds`;
    }
    if (counter === 0) {
      alert('Sorry, you ran out of time!');
      clearInterval(counter);
    }
    if (mouseCoordinates.mouseX > 380 && mouseCoordinates.mouseY < 85) {
      counterStopped.push(counter);
      firstCounterStopped = counterStopped[0];
      span.innerHTML = `Countdown timer: ${firstCounterStopped} seconds`;
    }
  }, 1000);
}
