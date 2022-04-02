/*
import {useEffect} from 'react'
import axios from 'axios'
import { useState } from 'react'

const useFetch = (axiosParams) =>  {

    //method = method.toLowerCase();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (params) => {
        try {
            const result = await axios.request(params);
            setData(result.data);
        } catch (err){
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(axiosParams);
    }, [])

    /*useEffect(() => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
        .then((response) => {
            setData(response.data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [url, method, body, headers]);*/
/*
    return {data, loading, error};
}

export default useFetch;

*/