import React, {useEffect} from "react";

export default function Clock({clock}) {
    const [currentTime, setCurrentTime] = React.useState("" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
    let timeout;

    useEffect(() => {
        calculateTime()
    }, [])

    useEffect(() => {
        timeout = window.setTimeout(calculateTime, 1000);
        return () => {
            window.clearTimeout(timeout)
        }
    }, [currentTime])

    const calculateTime = () => {
        let time = getTimeByTimeZoneOffset(clock.timezone);
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        setCurrentTime(
            correctTimeFormat(hours) + ":"
            + correctTimeFormat(minutes) + ":"
            + correctTimeFormat(seconds));
    }

    const getTimeByTimeZoneOffset = (timeZoneOffsetNumber) => {
        //Приводим смещение относительно гринвича потому что я сижу в СПб))
        timeZoneOffsetNumber = timeZoneOffsetNumber - 3;
        let time = new Date();
        time.setHours(time.getHours() + timeZoneOffsetNumber, time.getMinutes(), time.getSeconds(), time.getMilliseconds());
        return time
    }

    const correctTimeFormat = (timePart) => {
        timePart = "" + timePart;
        if (timePart.length === 1) {
            timePart = "0" + timePart
        }
        return timePart;
    }

    return (
        <div>
            <h2>{clock.name}</h2>
            <h3>{currentTime}</h3>
        </div>
    )
}
