import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div style={{textAlign: 'center', padding: '50px 20px'}}>
      <h1>İletişim</h1>
      <p>Sorularınız için bizimle iletişime geçebilirsiniz.</p>
      <ContactForm />
    </div>
  );
};

export default Contact;