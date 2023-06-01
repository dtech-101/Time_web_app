let mili = 0;let seconds = 0;let min = 0;let hour = 0;// declearing the stopwatch variables and assigning an initial value of 0 to them
// block for my stop watch buttons to avoid any unneccessary gobal declarition  
    const stopWatch = document.getElementById("stopwatch");
    const restart = document.getElementById("restart");
    const navstopwatch = document.getElementById("navstopwatch")
    const clock = document.getElementById("clock");
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const navclock = document.getElementById("navclock");
    const themebtn = document.getElementById("themebtn");
    start.addEventListener("click",displayStopWatch);

navstopwatch.addEventListener("click",function(){
    clock.style.display = "none";
    stopWatch.style.display ="flex";
    start.style.display = "block";
    restart.style.display = "block";
    stop.style.display = "block";
})
navclock.addEventListener('click',function(){
    clock.style.display = "flex";
    stopWatch.style.display ="none";
    restart.style.display = "none";
    start.style.display = "none";
    stop.style.display = "none";
})    
setInterval(Clock,1000);//using the setinterval method i was able to call my clock 

function Clock(){
    const displaySeconds = document.getElementById("seconds");
    const displayMinuite = document.getElementById("min");
    const displayHour = document.getElementById("hour")
    const date = new Date();
    const seconds = date.getSeconds();
    const minuite = date.getMinutes();
    const hour =date.getHours();
    displaySeconds.textContent = seconds;
    displayMinuite.textContent = minuite + " :";
    displayHour.textContent = hour + " :";
}

function displayStopWatch(){
    const displaySeconds = document.getElementById("stopsec");
    const displayMinuite = document.getElementById("stopmin");
    const displayHour = document.getElementById("stophour");
    const displaymili = document.getElementById("stopmili");
function stopWatchWorking(){
    displaymili.textContent = mili++;
    if(mili == 100)
    {
        mili = 0;
        displaySeconds.textContent = ++seconds;
    }
    if(seconds == 60)
    {
        seconds = 0;
        displayMinuite.textContent = ++min;
    }
    if(min == 60)
    {
        displayHour.textContent = ++hour;
    }
}
const clearinter = setInterval(stopWatchWorking, 10)
    start.disabled = true;
start.style.cursor = "not-allowed";

stop.addEventListener("click",function(){
    clearInterval(clearinter)
    start.disabled = false;
    start.style.cursor = "pointer";
})
}

restart.addEventListener('click',function(){
    mili = 0;seconds = 0;min = 0;hour = 0;
    const displaySeconds = document.getElementById("stopsec");
    const displayMinuite = document.getElementById("stopmin");
    const displayHour = document.getElementById("stophour");
    const displaymili = document.getElementById("stopmili");
    displaySeconds.textContent = "0";
    displayMinuite.textContent = "0";
    displayHour.textContent = "0";
    displaymili.textContent = "0";
    
})

themebtn.addEventListener('click',function(){
    var element = document.querySelector("body");
  element.classList.toggle("bodytoggle");
})