import styled from "styled-components";

// Estilização para o título
export const Titulo = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 20px 0;
  color: #333;
  font-family: "Roboto", sans-serif;
`;

// Estilização para o container do formulário
export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;

  form {
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;

    input {
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
    }

    button {
      padding: 10px;
      border: none;
      border-radius: 4px;
      background-color: #007bff;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
      font-family: "Roboto", sans-serif;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

// Estilização para o container da lista de contatos
export const ListContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 10px;
`;

// Estilização para cada item da lista de contatos
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-family: "Roboto", sans-serif;

  div {
    flex: 1;
    font-size: 1rem;
  }

  button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    background-color: #dc3545;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-right: 16px;
    font-family: "Roboto", sans-serif;
    &:hover {
      background-color: #c82333;
    }
  }
`;
