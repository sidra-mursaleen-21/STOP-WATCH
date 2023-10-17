var minute = document.getElementById("minute");
var second = document.getElementById("second");
var millisecond = document.getElementById("millisecond");
var button = document.getElementById("button1");

var min = 0;
var sec = 0;
var milisec = 0;

var time;

function start() {
  time = setInterval(function () {
    play();
  }, 100);
}

function stop() {
  button.disabled = false;
  clearInterval(time);
}

function reset() {
  stop();
  minute.value = 0;
  second.value = 0;
  millisecond.value = 0;
  min = 0;
  sec = 0;
  milisec = 0;
}

function play() {
  milisec++;
  if (milisec == 10) {
    milisec = 0;
    sec++;
  }
  millisecond.value = milisec;
  second.value = sec;
  if (sec == 60) {
    sec = 0;
    min++;
  }
  minute.value = min;
  button.disabled = true;
}
