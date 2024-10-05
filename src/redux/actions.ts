// src/redux/actions.ts
export const ADD_CONTACT = "ADD_CONTACT";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";

export interface Contact {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}

export const addContact = (contact: Contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const removeContact = (id: number) => ({
  type: REMOVE_CONTACT,
  payload: id,
});

export const editContact = (contact: Contact) => ({
  type: EDIT_CONTACT,
  payload: contact,
});
