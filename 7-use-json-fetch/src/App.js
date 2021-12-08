import './App.css';
import {useEffect, useState} from "react";

const useJsonFetch = (url, options) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);

    function fetchJson(url, options) {
        setLoading(true);
        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                setLoading(false)
                setData(res)
            })
            .catch((error) => {
                setLoading(false)
                setError(error)
            });
    }

    useEffect(() => {
        if (url) {
            fetchJson(url, options);
        }
    }, []);

    return {loading, data, error};
}

export default function App() {
    const dataResp = useJsonFetch('http://localhost:7070/data')
    const errorResp = useJsonFetch('http://localhost:7070/error')
    const loadingResp = useJsonFetch('http://localhost:7070/loading')

    if (loadingResp.loading) return <div>'Loading ...'</div>

    if (errorResp.error) {
        console.log("error", errorResp.error);
        return errorResp.error;
    }

    return (
        <div>
            <OnScreen>{JSON.stringify(dataResp.data)}</OnScreen>
            <OnScreen>{JSON.stringify(errorResp.error)}</OnScreen>
            <OnScreen>{JSON.stringify(loadingResp.loading)}</OnScreen>
        </div>
    );
}

function OnScreen({children}){
    return (
        <div>
            {children}
        </div>
    )
}
