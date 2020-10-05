const start = () => {
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
const clearHTML = () => {
  document.getElementById("input").value = "";
  // document.getElementById("countdownClock").innerHTML = ''
  document.getElementById(
    "countdownClock"
  ).innerHTML = `<h3>Timer Complete.</h3> 
					<p>Please enter a new time to begin again.</p>`;
};
let btn = document.getElementById("enterTime");
btn.addEventListener("click", () => {
  console.log("New Time Entered");
  start();
});
// Main Chunk of code sourced from here: https://stackoverflow.com/a/48343641/7206229

const countUp = () => {
  let inputUp = document.getElementById("inputUp").value;

  if (n > 1) {
    return [];
  } else {
    const countdownArr = countUp(n - 1);
    countdownArr.splice(0, 0, n);
    return n;
  }
};

const buttonStart = document.getElementById("startCount");
buttonStart.addEventListener("click", () => {
  console.log("Enter a time to countdown from");
  countUp();
});
