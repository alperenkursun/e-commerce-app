import styled from 'styled-components';
import { StyledButton } from './StyledButton';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  &:hover { transform: scale(1.02); }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
  text-align: center;
`;

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Content>
        <h4 style={{margin: '0 0 10px 0'}}>{product.name}</h4>
        <p style={{fontWeight: 'bold', color: '#2ecc71'}}>{product.price} TL</p>
        <StyledButton fullWidth onClick={() => navigate(`/product/${product.id}`)}>
          Detayları Gör
        </StyledButton>
      </Content>
    </Card>
  );
};

export default ProductCard;