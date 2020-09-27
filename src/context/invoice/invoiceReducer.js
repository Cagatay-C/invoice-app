import {
  GET_INVOICES,
  DELETE_INVOICE,
  SET_LOADING,
  UPDATE_INVOICE,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_INVOICES:
      return {
        ...state, // do not forget to include invoices: action.payload if not work
        invoices: action.payload,
        loading: false,
      };
    case UPDATE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.map(invoice =>
          action.payload.id === invoice.id ? action.payload : invoice
        ),
        loading: false,
      };

    case DELETE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.filter(
          invoice => invoice.id !== action.payload
        ),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};
