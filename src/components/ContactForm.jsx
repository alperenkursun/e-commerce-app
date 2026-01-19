import styled from 'styled-components';
import { StyledButton } from './StyledButton';

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  
  @media (max-width: 768px) { margin: 20px; }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box; /* Responsive için önemli */
`;

const ContactForm = () => (
  <FormWrapper>
    <h3>Bize Mesaj Gönderin</h3>
    <form onSubmit={e => e.preventDefault()}>
      <Input type="text" placeholder="Adınız Soyadınız" />
      <Input type="email" placeholder="E-posta Adresiniz" />
      <textarea 
        placeholder="Mesajınız..." 
        rows="6" 
        style={{width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', marginBottom: '15px', boxSizing: 'border-box'}} 
      />
      <StyledButton fullWidth>Gönder</StyledButton>
    </form>
  </FormWrapper>
);

export default ContactForm;