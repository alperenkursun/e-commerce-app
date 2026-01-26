import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { StyledButton } from '../components/StyledButton';
import { useAppContext } from '../context/AppContext'; // Context'i ekledik

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
  @media (min-width: 768px) { flex-direction: row; align-items: center; }
`;

const ProductImage = styled.img`
  width: 100%; max-width: 450px; border-radius: 15px; object-fit: cover;
`;

const InfoBox = styled.div` flex: 1; display: flex; flex-direction: column; gap: 15px; `;
const ButtonGroup = styled.div` display: flex; gap: 10px; flex-wrap: wrap; `;

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  
  // Context'ten ekleme fonksiyonlarını çekiyoruz
  const { addToCart, addToFavorites } = useAppContext();

  useEffect(() => {
    axios.get(`https://69655613e8ce952ce1f4d6ba.mockapi.io/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Yükleniyor...</p>;

  return (
    <DetailWrapper>
      <ProductImage src={product.image} alt={product.name} />
      <InfoBox>
        <StyledButton secondary onClick={() => navigate('/')}>← Anasayfaya Dön</StyledButton>
        <h1>{product.name}</h1>
        <p style={{fontSize: '1.2rem', color: '#666'}}>{product.description}</p>
        <h2 style={{color: '#2ecc71'}}>{product.price} TL</h2>
        
        <ButtonGroup>
          {/* Butonlara tıklandığında ekleme fonksiyonlarını çalıştırıyoruz */}
          <StyledButton onClick={() => addToCart(product)}>Sepete Ekle</StyledButton>
          <StyledButton secondary onClick={() => addToFavorites(product)}>Favorilere Ekle</StyledButton>
        </ButtonGroup>
      </InfoBox>
    </DetailWrapper>
  );
};

export default ProductDetail;