export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = state => {
    const contacts = selectContacts(state);
    const filterQuery = selectFilter(state)
   return contacts.filter(contact =>
     contact.name.toLowerCase().includes(filterQuery.toLowerCase())
   );
 };