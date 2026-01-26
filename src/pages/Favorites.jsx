import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid; gap: 20px; padding: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const Favorites = () => {
  const { favorites } = useAppContext();

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1>Favorilerim ({favorites.length})</h1>
      {favorites.length === 0 ? (
        <p>Henüz favori ürününüz yok.</p>
      ) : (
        <Grid>
          {favorites.map(item => <ProductCard key={item.id} product={item} />)}
        </Grid>
      )}
    </div>
  );
};

export default Favorites;