import styled from 'styled-components';

const ItemRow = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ItemImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`;

const CartItem = ({ item, onRemove }) => (
  <ItemRow>
    <ItemImg src={item.image} />
    <div style={{flex: 1}}>
      <h4>{item.name}</h4>
      <p>{item.price} TL</p>
    </div>
    <button onClick={onRemove} style={{color: 'red', border: 'none', background: 'none', cursor: 'pointer'}}>
      Kaldır
    </button>
  </ItemRow>
);

export default CartItem;