import styled from 'styled-components';
import CartItem from '../components/CartItem';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Cart = () => {
  // Örnek veri (Normalde Context'ten gelecek)
  const cartItems = []; 

  return (
    <Container>
      <h1>Alışveriş Sepetim</h1>
      {cartItems.length === 0 ? (
        <p>Sepetiniz şu an boş.</p>
      ) : (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      )}
    </Container>
  );
};

export default Cart;