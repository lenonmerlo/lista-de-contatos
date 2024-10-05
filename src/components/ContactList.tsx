// src/components/ContactList.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeContact, editContact } from "../redux/actions";
import { Contact } from "../redux/actions";
import ContactItem from "./ContactItem";
import { ListContainer } from "../styles/styles";

const ContactList: React.FC = () => {
  const contatos = useSelector((state: any) => state.contatos);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeContact(id));
  };

  const handleEdit = (contact: Contact) => {
    const updatedContact: Contact = {
      ...contact,
      nome: prompt("Novo Nome:", contact.nome) || contact.nome,
      email: prompt("Novo E-mail:", contact.email) || contact.email,
      telefone: prompt("Novo Telefone:", contact.telefone) || contact.telefone,
    };
    dispatch(editContact(updatedContact));
  };

  return (
    <ListContainer>
      {contatos.map((contact: Contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onRemove={handleRemove}
          onEdit={handleEdit}
        />
      ))}
    </ListContainer>
  );
};

export default ContactList;
