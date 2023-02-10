import React, { useEffect, useState } from 'react';

export default function Products() {
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState();
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

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

  if(loading) return <p>⛄⛄⛄⛄로딩중이다</p>;
  if(error) return <p>⚠️⚠️⚠️⚠️⚠️⚠️에러다</p>;
  return (
    <>
      <input
        id='checkbox'
        type='checkbox'
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
