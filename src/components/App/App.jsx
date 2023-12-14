import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
