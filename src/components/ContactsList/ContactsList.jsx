import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from '../../redux/contacts/contactsSlice';
import { contactSelector } from '../../redux/contacts/selectors';
import { filterSelector } from '../../redux/filter/selector';
import css from './ContactList.module.css';

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
    <ul className={css.contact_list}>
      {contactList.map(el => (
        <li key={el.id} className={css.contact_item}>
          {el.name}: {el.number}
          <button
            type="button"
            onClick={() => deleteContact(el.id)}
            className={css.delete_btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
