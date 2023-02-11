import { useEffect, useState } from "react";
export function useProducts(checked) {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
        })
        .catch(()=> setError(true))
        .finally(()=> setLoading(false))
    }, [checked]);

    return [loading, error, products];
}``