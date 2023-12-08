import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <div className="container">
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
