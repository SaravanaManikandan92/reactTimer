import React, { useEffect, useState } from "react";
import './timer.css';

const TimerFunc = (props) => {
    let [timeEffect, setTimeEffect] = useState(props.timerInsec);
    const aInterval = setInterval(function () {
        timeEffect = timeEffect - 1;
        if (timeEffect >= 0) { setTimeEffect(timeEffect--); }
    }, 1000);
    let setTimeExitAt = 1000 * props.timerInsec;
    setTimeout(function () { clearInterval(aInterval); }, setTimeExitAt);
    let optimalWidth = props.widthPercentage || 10;
    const mainStyle = {
        "width": optimalWidth + "%",
    }
    const animationTime = {
        "--timeInSec": props.timerInsec + "s",
    }
    const timerStyle = {
        "color": "#ad160a",
        "fontWeight": "bold",
        "fontSize": "75%"
    }
    const svgStyle = {
        "width": "50%"
    }

    return (
        <div style={mainStyle}>

            <div style={timerStyle}>

                <svg style={svgStyle} viewBox="0 0 50 50" class="circular-progress">

                    <text x="8" y="27" class="small">{timeEffect} secs... </text>
                    <circle style={animationTime} class="bg"></circle>
                    <circle style={animationTime} class="fg"></circle>
                </svg>
            </div>
        </div>);

}

export default TimerFunc;


