import React, { useState } from 'react';
import { useProducts } from '../../hooks/use-products';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts(checked)
  const handleChange = () => setChecked((prev) => !prev);


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
