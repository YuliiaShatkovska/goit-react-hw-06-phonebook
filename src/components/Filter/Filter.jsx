import { nanoid } from 'nanoid';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filter/filterSlice';
import { Title } from 'components/Title/Title';

const Filter = () => {
  const filterId = nanoid();

  const { filter } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const onChange = e => {
    const { value } = e.currentTarget;

    dispatch(filterContact(value));
  };

  return (
    <div className={css.filter_container}>
      <Title>Contacts</Title>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id={filterId}
        value={filter}
        onChange={onChange}
        className={css.filter_input}
      />
    </div>
  );
};

export default Filter;
