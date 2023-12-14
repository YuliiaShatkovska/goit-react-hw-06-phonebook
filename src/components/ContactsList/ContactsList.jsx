import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from '../../redux/contacts/contactsSlice';
import { contactSelector } from '../../redux/contacts/selectors';
import { filterSelector } from '../../redux/filter/selector';
import { ContactsBtn, ContactsItem, ContactsList } from './ContactList.styled';

const ContactList = () => {
  const { contacts } = useSelector(contactSelector);
  const { filter } = useSelector(filterSelector);

  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(deleteContactAction(id));
  };

  const filtred = filter.toLowerCase();
  const contactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtred)
  );

  return (
    <ContactsList>
      {contactList.map(el => (
        <ContactsItem key={el.id}>
          {el.name}: {el.number}
          <ContactsBtn type="button" onClick={() => deleteContact(el.id)}>
            Delete
          </ContactsBtn>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

export default ContactList;
