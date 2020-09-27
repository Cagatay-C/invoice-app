import React, { useReducer } from "react";
import InvoiceContext from "./invoiceContext";
import InvoiceReducer from "./invoiceReducer";
import {
  GET_INVOICES,
  DELETE_INVOICE,
  UPDATE_INVOICE,
  CLEAR_CURRENT,
  SET_CURRENT,
} from "../types";

const InvoiceState = props => {
  const initialState = {
    invoices: [
      {
        Vendor: "HIKP",
        Date: "03/02/2020",
        Invoice: "INV-1231255",
        id: 300,
        Amount: "340",
      },
      {
        Vendor: "HANK",
        Date: "03/02/2020",
        Invoice: "INV-4459878412",
        id: 200,
        Amount: "900",
      },
      {
        Vendor: "NAPA",
        Date: "03/02/2020",
        Invoice: "9878412",
        id: 100,
        Amount: "1890",
      },
      {
        Vendor: "ALAN",
        Date: "03/02/2020",
        Invoice: "INV-52864825",
        id: 400,
        Amount: "500",
      },
      {
        Vendor: "KATN",
        Date: "03/02/2020",
        Invoice: "INV-2582546",
        id: 500,
        Amount: "600",
      },
      {
        Des: "This is a test",
        Vendor: "KATN",
        Date: "03/02/2020",
        Invoice: "100-2528",
        id: 600,
        Amount: "300.6",
      },
    ],
    loading: false,
    current: null,
  };

  const [state, dispatch] = useReducer(InvoiceReducer, initialState);

  // Get Invoice
  const getInvoices = async () => {
    dispatch({
      type: GET_INVOICES,
      payload: state.invoices,
    });
  };

  // Delete Invoice
  const deleteInvoice = id => {
    dispatch({
      type: DELETE_INVOICE,
      payload: id,
    });
  };

  const updateInvoice = invoice => {
    dispatch({
      type: UPDATE_INVOICE,
      payload: invoice,
    });
  };

  const setCurrent = current => {
    dispatch({
      type: SET_CURRENT,
      payload: current,
    });
  };

  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoices: state.invoices,
        loading: state.loading,
        current: state.current,
        getInvoices,
        deleteInvoice,
        updateInvoice,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceState;
