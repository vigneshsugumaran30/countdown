const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');
const countdown=document.getElementById('countdown');

const currentYear=new Date().getFullYear();
let pongalTime=new Date('January 15 2024 00:00:00');

function update()
{
    let currentTime=new Date();
    let diff=pongalTime - currentTime;
    let d=Math.floor(diff/1000/60/60/24);
    let h=Math.floor(diff/1000/60/60)%24;
    let m=Math.floor(diff/1000/60)%60;
    let s=Math.floor(diff/1000)%60;

    days.innerHTML=d < 10 ?  "0"+d : d;
    hours.innerHTML=h < 10 ?  "0"+h : h;
    minutes.innerHTML=m < 10 ?  "0"+m : m;
    seconds.innerHTML=s < 10 ?  "0"+s : s;

}
setInterval(update,1000)