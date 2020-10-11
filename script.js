console.log("Connected")

function start(){
	let inputTime = document.getElementById("input").value

	if(inputTime != 0){
		document.getElementById("countdownClock").innerHTML = inputTime
		let timer = setInterval(()=>{ if( inputTime != 0){ document.getElementById("countdownClock").innerHTML = --inputTime}
		else {
			clearInterval(timer);
			clearHTML();
			}
		}, 1000);
	} else {
	document.getElementById("input").innerHTML = "Please Enter a Time First"
	timer.clearInterval();
	}
}
let clearHTML = () => {
	document.getElementById("countdownClock").innerHTML = "Timer Finished"
}
let btn = document.getElementById('enterTime');
btn.addEventListener('click', function(){
	console.log('New Time Entered');
	start();
})

// Main Chunk of code sourced from here: https://stackoverflow.com/a/48343641/7206229
