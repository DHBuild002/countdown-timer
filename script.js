// Countdown Timer
/*
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
*/
// Main Chunk of code sourced from here: https://stackoverflow.com/a/48343641/7206229

const countUp = () => {
  let inputTime = document.getElementById("input").value; // 5
  console.log(inputTime);

  if (inputTime != 0) { // 5 != 0
    document.getElementById("countdownClock").innerHTML = 0;
    let run = run => { // 5 > 0
      let clock = document.getElementById('countdownClock');
      clock.value = clock.value < inputTime ? clock.value++ : inputTime;
     }
    setInterval(run(), 3000);
    };
  }

// Revert CD Window in UI back to empty 
const clearHTML = () => {
  document.getElementById("input").value = "";
  // document.getElementById("countdownClock").innerHTML = ''
  document.getElementById("countdownClock").innerHTML = `<h3>Timer Complete.</h3> 
					       <p>Please enter a new time to begin again.</p>`;
};

// Begin Countdown:
let btn = document.getElementById("enterTime");

btn.addEventListener("click", () => {
  console.log("New Time Entered");
  countUp();
});
