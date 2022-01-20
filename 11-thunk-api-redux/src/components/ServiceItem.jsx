import React, {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchItemByIdThunked, saveItemThunked} from "../redux/actioncreators";
import {Audio} from "react-loader-spinner";

export default function ServiceItem() {

    const {item, itemLoadingStatus} = useSelector((store) => store.serviceItemReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchItemByIdThunked(id))
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        dispatch(saveItemThunked(item))
    }

    const handleChange = (evt) => {
        dispatch({type: "SET_ITEM_FIELD", payload: {fieldName: evt.target.name, fieldValue: evt.target.value}})
    }

    if (itemLoadingStatus === "pending") {
        return <Audio
            heigth="100"
            width="100"
            color='red'
            ariaLabel='loading'
        />
    }

    if (itemLoadingStatus === "redirect") {
        navigate('/services')
    }

    if (itemLoadingStatus === "error") {
        return <div><div>ERROR</div> <Link to="/services">Вернуться на главную</Link> </div>
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Редактирование Сервиса</h1>
                <p/>
                <div>Название</div>
                <input name="name" value={item.name} onChange={handleChange}/>
                <div>Стоимость</div>
                <input name="price" value={item.price} onChange={handleChange}/>
                <div>Описание</div>
                <input name="content" value={item.content} onChange={handleChange}/>
                <p/>
                <Link to="/services">
                    <button>Отмена</button>
                </Link>
                <button type="submit">Сохранить</button>
            </form>
        </div>
    )
}
