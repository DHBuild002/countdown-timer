// Countdown Timer

const countDown = () => {
  let inputTime = document.getElementById("input").value;

  if (inputTime != 0) {
    document.getElementById("countdownClock").innerHTML = inputTime;

    let timer = setInterval(() => {
      if (inputTime != 0) {
        document.getElementById("countdownClock").innerHTML = --inputTime;
      } else {
        clearInterval(timer);
        clearHTML();
      }
    }, 1000);
  }
};

// Main Chunk of code sourced from here: https://stackoverflow.com/a/48343641/7206229
/*
const countUp = () => {
  let interval;
  let inputTime = document.getElementById("input").value; // 5
  console.log(inputTime);

  if (inputTime != 0) {
    // 5 != 0
    document.getElementById("countupClock").innerHTML = 0;

    let run = () => {
      // 5 > 0
      let clock = document.getElementById("countupClock");

      if (clock.innerHTML < inputTime) {
        clock.innerHTML++;
        debugger;
        console.log("Counter Value: ", clock.innerHTML);
      } else {
        clearInterval(interval);
        console.log("Cleared Interval " + inputTime);
        clearHTML();
      }
    };
    interval = setInterval(run, 10000);
  }
};
*/
// Solution courtesy of S.Prathare:
// https://stackoverflow.com/questions/64304558/countup-function-failing-to-increment-from-0-to-inputted-time/64304995#64304995

// Revert CD Window in UI back to empty
const clearHTML = () => {
  document.getElementById("input").value = "";
  document.getElementById("countupClock").innerHTML = `<h3>Timer Complete.</h3> 
					       <p>Please enter a new time to begin again.</p>`;
};

// Begin Countdown:
let btn = document.getElementById("enterTime");

btn.addEventListener("click", () => {
  countUp();
});
