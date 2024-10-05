// src/App.tsx
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import { Titulo } from "./styles/styles";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Titulo>Lista de Contatos</Titulo>
        <ContactForm />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
