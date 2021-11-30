import React, {useEffect} from "react";

export default function Clock({clock}) {
    const [currentTime, setCurrentTime] = React.useState("" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
    let timeout;

    useEffect(() => {
        calculateTime()
    }, [])

    const calculateTime = () => {
        let time = new Date();
        setCurrentTime("" + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    }

    return (
        <div>
            <h2>{clock.name}</h2>
            <h3>{calculateTime()}</h3>
        </div>
    )
}
