import PropTypes from 'prop-types';
import { Wrapper } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <span>
        {name}: {number}
      </span>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </Wrapper>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
