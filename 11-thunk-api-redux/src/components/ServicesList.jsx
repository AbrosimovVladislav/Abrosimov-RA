import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteServiceThunked, fetchServicesThunked} from "../redux/actioncreators";
import {Button} from "react-bootstrap";
import {Audio} from "react-loader-spinner";
import {Link} from "react-router-dom";

export default function ServicesList() {

    const {services, listLoadingStatus} = useSelector((store) => store.serviceListReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchServicesThunked())
    }, [])

    const deleteService = (id) => {
        dispatch(deleteServiceThunked(id))
    }

    if (listLoadingStatus === "pending") {
        return <Audio
            heigth="100"
            width="100"
            color='grey'
            ariaLabel='loading'
        />
    }

    if (listLoadingStatus === "error") {
        return <div><h1>ОШИБКА</h1><h2>ПОЖАЙЛУСТА ПЕРЕЗАГРУЗИТЕ СТРАНИЦУ</h2></div>
    }

    return (
        <div>
            {
                services.map(service => {
                    return <div key={service.id}>
                        <h1>{service.name}</h1>
                        <h2>{service.price}</h2>
                        <Link to={"/services/" + service.id}><button>Edit</button></Link>
                        <Button onClick={(() => deleteService(service.id))}>X</Button>
                    </div>
                })
            }
        </div>
    )
}
