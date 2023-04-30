import { ContactItem } from 'components/ContactItem/ContactItem';
import { StyledContactsList } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filterQuery = useSelector(getFilter);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
  };

  return (
    <>
      <StyledContactsList>
        {filteredContacts().map(contact => {
          return (
            <li key={contact.id}>
              <ContactItem contact={contact} />
            </li>
          );
        })}
      </StyledContactsList>
    </>
  );
};
