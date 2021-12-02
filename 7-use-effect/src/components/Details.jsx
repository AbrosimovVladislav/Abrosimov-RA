import React, {useEffect, useState} from "react";

export default function Details({selectedUserId}) {

    const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${selectedUserId}.json`;
    const [oldSelectedUserId, setOldSelectedUserId] = useState(0);
    const [userData, setUserData] = useState({id: "", name: "", avatar: "", details: {}});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("rerender")
        console.log("old " + oldSelectedUserId + " new " + selectedUserId)
        if (selectedUserId !== oldSelectedUserId) {
            console.log("Id changed")
            setOldSelectedUserId(selectedUserId)
        }
    },)

    useEffect(async () => {
        setLoading(true)
        const response = await fetch(url);
        const json = await response.json();
        setUserData(json)
        setLoading(false)
    }, [oldSelectedUserId])

    if(loading===true){
        return <div>Загрузка...</div>
    }

    return (
        <div hidden={userData.id===""}>
            <img src={userData.avatar}/>
            <h1>{userData.name}</h1>
            <h3>City : {userData.details.city}</h3>
            <h3>Company : {userData.details.company}</h3>
            <h3>Position : {userData.details.position}</h3>
        </div>
    )
}
