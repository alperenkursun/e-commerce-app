import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

const PageContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://69655613e8ce952ce1f4d6ba.mockapi.io/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{textAlign: 'center'}}>Yükleniyor...</h2>;

  return (
    <PageContainer>
      <h1 style={{textAlign: 'center', marginBottom: '30px'}}>Kıyafet Kataloğu</h1>
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </PageContainer>
  );
};

export default Home;