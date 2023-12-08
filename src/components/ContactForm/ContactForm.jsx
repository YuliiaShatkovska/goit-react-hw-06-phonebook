// import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction } from '../../redux/contacts/contactsSlice';
import { Title } from 'components/Title/Title';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const formNameId = nanoid();
  const numberId = nanoid();

  const { contacts } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const onHandleSubmit = ({ name, number }, { resetForm }) => {
    const sameName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (sameName) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContactAction(name, number));

    resetForm();
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={onHandleSubmit}
        validationSchema={schema}
      >
        <Form className={css.contact_form}>
          <div className={css.contact_form_container}>
            <label htmlFor={formNameId} className={css.contact_label}>
              Name
            </label>
            <Field
              id={formNameId}
              type="text"
              name="name"
              className={css.contact_input}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={css.contact_error}
            />
          </div>

          <div className={css.contact_form_container}>
            <label htmlFor={numberId} className={css.contact_label}>
              Number
            </label>
            <Field
              id={numberId}
              type="tel"
              name="number"
              placeholder="+380"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              className={css.contact_input}
            />
            <ErrorMessage
              name="number"
              component="div"
              className={css.contact_error}
            />
          </div>
          <button type="submit" className={css.contact_btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
