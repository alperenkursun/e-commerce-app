import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.secondary ? '#6c757d' : '#2c3e50'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  &:hover {
    background-color: ${props => props.secondary ? '#5a6268' : '#34495e'};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 0.9rem;
  }
`;