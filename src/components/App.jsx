import { ContactsForm } from './ContactForm/ContactsForm';
import shortid from 'shortid';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import 'index.css';
import { Wrapper } from './App.styled';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContact] = useState(
    (JSON.parse(window.localStorage.getItem('contacts')).length !== 0 &&
      JSON.parse(window.localStorage.getItem('contacts'))) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name: e.target.name.value,
      number: e.target.number.value,
    };

    const normalizedName = newContact.name.toLowerCase();

    if (checkDobleName(normalizedName)) {
      return alert(`${e.target.name.value} is already in contacts`);
    }

    setContact(state => [...state, newContact]);
    e.target.name.value = '';
    e.target.number.value = '';
  };

  const checkDobleName = name =>
    contacts.find(contact => contact.name.toLowerCase() === name);

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDelete = id => {

    return setContact(state => state.filter(contact => contact.id !== id));
  };

  const filteredContacts = getFilteredContacts();
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filterQuery={filter} onChange={handleFilter} />
      <ContactsList
        contacts={filteredContacts}
        onDeleteContact={handleDelete}
      />
    </Wrapper>
  );
};
