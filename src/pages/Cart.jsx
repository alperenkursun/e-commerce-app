import { useAppContext } from '../context/AppContext';
import CartItem from '../components/CartItem';
import styled from 'styled-components';

const Container = styled.div` padding: 20px; max-width: 800px; margin: 0 auto; `;

const Cart = () => {
  const { cart, removeFromCart } = useAppContext();

  return (
    <Container>
      <h1>Alışveriş Sepetim ({cart.length})</h1>
      {cart.length === 0 ? (
        <p>Sepetiniz henüz boş.</p>
      ) : (
        cart.map((item, index) => (
          <CartItem key={index} item={item} onRemove={() => removeFromCart(item.id)} />
        ))
      )}
    </Container>
  );
};

export default Cart;