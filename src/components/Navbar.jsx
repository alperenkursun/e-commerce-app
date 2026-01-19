import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #fff;
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 25px;
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    &:hover { color: #3498db; }
  }
  @media (max-width: 480px) {
    gap: 10px;
    font-size: 0.85rem;
  }
`;

const Navbar = () => (
  <Nav>
    <h2 style={{margin: 0}}>TRENDY-CLOTHES</h2>
    <NavLinks>
      <Link to="/">Ürünler</Link>
      <Link to="/favorites">Favoriler</Link>
      <Link to="/cart">Sepet</Link>
      <Link to="/contact">İletişim</Link>
    </NavLinks>
  </Nav>
);

export default Navbar;