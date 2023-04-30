import { Wrapper } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterQuery = useSelector(getFilter);

  const filterHandler = e => dispatch(filter(e.target.value));

  return (
    <Wrapper>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        id="filter"
        value={filterQuery}
        onChange={filterHandler}
      />
    </Wrapper>
  );
};
