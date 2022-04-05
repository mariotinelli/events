import {useEffect, useState} from 'react'


const useFetch = (url, options = {}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, options)
            .then((resp) => resp.json())
            .then((result) => setData(result))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return {data, loading, error};
}

export default useFetch;




