import { v4 as uuid } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: uuid(),
    name,
    number,
  },
}));
const removeContact = createAction('contacts/remove');

const changeFilter = createAction('contacts/changeFilter');

export default { addContact, removeContact, changeFilter };