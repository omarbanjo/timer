import React from 'react'
import './App.css'
const msToTime =ms=>{
const msPerSeconds= 1000;
    const msPerMinutes= msPerSeconds*60;
    const msPerHours= msPerMinutes *60;
const Hours= Math.floor(ms/msPerHours)
const RestHours=ms%msPerHours
const Minutes=Math.floor(RestHours/msPerMinutes)
const RestMinutes=RestHours%msPerMinutes
const Seconds=Math.floor(RestMinutes/msPerSeconds)
return String(Hours).padStart(2,'0')+ 
 ':' + String(Minutes).padStart(2,'0') +
  ':'+ String(Seconds).padStart(2,'0')
}
const Timme = ({ms}) =>{
    // const ms= props.ms 
    // const{ms} =props
   
 return <div className="time-container">
     <div className="time-digits">
    {msToTime(ms)} 
     </div>
     <div className="time-text">
         <div className="time-text-items">Hours</div>
         <div className="time-text-items">Minutes</div>
         <div className="time-text-items">Seconds</div>
     </div>

</div>
}
export default Timme;