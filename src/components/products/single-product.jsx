import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div>
          <h1>{product.title}</h1>
          <div>{product.description}</div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;