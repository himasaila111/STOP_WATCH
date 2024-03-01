const minutesSeconds = document.querySelector(".minutesSeconds");
const milliSeconds = document.querySelector(".milliSeconds");
const StartStop = document.querySelector(".start-stop");
const resetButton = document.querySelector(".reset");
let [minutes, seconds, milliSec] = [0,0,0];
let timer = null;

const startStop = () =>{
    if(StartStop.innerHTML == "Start"){
        StartStop.innerHTML = "Stop"
        StartStop.style.color = "red";
        StartStop.style.backgroundColor = "rgb(214, 90, 98, 0.5)";
        timer = setInterval(startTime,10);
    }
    else{
        if([minutes, seconds, milliSec] != [0,0,0]){
            resetButton.disabled = false;
        }
        StartStop.innerHTML = "Start"
        StartStop.style.color = "green";
        StartStop.style.backgroundColor = "rgba(38, 98, 36, 0.5)";
        clearInterval(timer)
    }

}

const startTime = ()=>{
    milliSec++;
    if(milliSec == 99){
        milliSec = 0;
        seconds++
    }
    if(seconds == 60){
        seconds = 0;
        minutes++
    }if(minutes  == 60){
        minutes = 0;
        hours ++;
    }

    let ms = milliSec< 10 ? "0"+milliSec : milliSec;
    let s = seconds <10 ? "0"+seconds : seconds;
    let m = minutes <10 ? "0"+minutes : minutes;
    minutesSeconds.innerHTML = m+":"+s+".";
    milliSeconds.innerHTML = ms;
}

const resetfn = ()=>{
    [minutes, seconds, milliSec] = [0,0,0];
    minutesSeconds.innerHTML = "00:00.";
    milliSeconds.innerHTML = "00";

}