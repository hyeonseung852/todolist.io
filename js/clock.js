const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const hours2 = String(date.getHours()-12).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");

    if(hours<12)
    {
    clock.innerText = `${hours}:${minutes}:${Seconds} AM`; 
    }else if(hours>12)
    clock.innerText = `${hours2}:${minutes}:${Seconds} PM`;

}

getClock();
setInterval(getClock, 1000);