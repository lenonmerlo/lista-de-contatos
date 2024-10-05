// src/redux/reducer.ts
import { ADD_CONTACT, REMOVE_CONTACT, EDIT_CONTACT, Contact } from "./actions";

interface State {
  contatos: Contact[];
}

const initialState: State = {
  contatos: [],
};

const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contatos: [...state.contatos, action.payload] };
    case REMOVE_CONTACT:
      return {
        ...state,
        contatos: state.contatos.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contatos: state.contatos.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    default:
      return state;
  }
};

export default contactReducer;
