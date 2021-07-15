let counter = 45;
let firstCounterStopped;
let counterStopped = [];

function startCountdown() {
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById('count');
      span.innerHTML = `Countdown timer: ${counter} seconds`;
    }
    if (counter === 0) {
      alert('Sorry, you ran out of time!');
      clearInterval(counter);
    }
    if (mouseCoordinates.mouseX > 380 && mouseCoordinates.mouseY < 85) {
      counterStopped.push(counter);
      firstCounterStopped = counterStopped[0];
    }
  }, 1000);
}
