import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

const Grid = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const Favorites = () => {
  const favItems = []; // Örnek

  return (
    <div style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
      <h1>Favorilerim</h1>
      {favItems.length === 0 ? (
        <p>Henüz favori ürününüz yok.</p>
      ) : (
        <Grid>
          {favItems.map(item => <ProductCard key={item.id} product={item} />)}
        </Grid>
      )}
    </div>
  );
};

export default Favorites;