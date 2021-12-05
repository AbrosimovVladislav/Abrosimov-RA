import './App.css';
import {useEffect, useState} from "react";

function useJsonFetch(url, opts) {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);

    const useFetch = (url, options) => {

        const [status, setStatus] = useState({
            loading: false,
            data: undefined,
            error: undefined
        });

        function fetchNow(url, options) {
            setStatus({loading: true});
            fetch(url, options)
                .then((res) => res.json())
                .then((res) => {
                    setStatus({loading: false, data: res.data});
                })
                .catch((error) => {
                    setStatus({loading: false, error});
                });
        }

        useEffect(() => {
            if (url) {
                fetchNow(url, options);
            }
        }, []);

        return {...status, fetchNow};
    }
}

export default function App() {
    const url1 = "http://localhost:7070/data";
    const {data, loading, error} = useJsonFetch(url1)

    if (loading) return 'Loading ...'

    if (error) {
        console.log("error", error);
        return error;
    }

    return (
        <div className="App">
            {JSON.stringify(data)}
        </div>
    );
}

