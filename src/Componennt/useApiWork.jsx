import axios from 'axios';
import { useEffect, useState } from 'react';
const useApiWork=()=> {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:8000/fetch-data');
                setArticles(response.data.articles);
            } catch (err) {
                setError("Error fetching data: " + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { articles, loading, error };
};

export default useApiWork;