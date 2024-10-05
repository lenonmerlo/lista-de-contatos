// src/components/ContactForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions";
import { Contact } from "../redux/actions";
import { Container } from "../styles/styles";

const ContactForm: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: Contact = {
      id: Date.now(), // Usando o timestamp como ID único
      nome,
      email,
      telefone,
    };
    dispatch(addContact(newContact));
    setNome("");
    setEmail("");
    setTelefone("");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <button type="submit">Adicionar Contato</button>
      </form>
    </Container>
  );
};

export default ContactForm;
