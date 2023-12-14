import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filter/filterSlice';
import { TitleStyle } from 'components/Title/Title.styled';
import { FilterContainer, FilterInput } from './Filter.styled';

const Filter = () => {
  const filterId = nanoid();

  const { filter } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const onChange = e => {
    const { value } = e.currentTarget;

    dispatch(filterContact(value));
  };

  return (
    <>
      <TitleStyle>Contacts</TitleStyle>
      <FilterContainer>
        <label htmlFor={filterId}>Find contacts by name</label>
        <FilterInput
          type="text"
          name="filter"
          id={filterId}
          value={filter}
          onChange={onChange}
        />
      </FilterContainer>
    </>
  );
};

export default Filter;
