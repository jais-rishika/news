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
                console.log(response.data.sources)
                setArticles(response.data.sources);                
            } catch (err) {
                setError("Error fetching data: " + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

// This will log the updated articles whenever they change

    
    return { articles, loading, error };
};

export default useApiWork;