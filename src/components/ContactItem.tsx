// src/components/ContactItem.tsx
import React from "react";
import { Contact } from "../redux/actions";
import { ItemContainer } from "../styles/styles";

interface ContactItemProps {
  contact: Contact;
  onRemove: (id: number) => void;
  onEdit: (contact: Contact) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  onRemove,
  onEdit,
}) => {
  return (
    <ItemContainer>
      <div>
        <strong>{contact.nome}</strong> - {contact.email} - {contact.telefone}
      </div>
      <button onClick={() => onEdit(contact)}>Editar</button>
      <button onClick={() => onRemove(contact.id)}>Remover</button>
    </ItemContainer>
  );
};

export default ContactItem;
