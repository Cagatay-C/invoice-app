import React from "react";
import InvoiceState from "./context/invoice/InvoiceState";
import InvoiceTable from "./components/invoices/InvoiceTable";
import Navbar from "./components/layout/Navbar";
import InputInvoice from "./components/invoices/InputInvoice";

const App = () => {
  return (
    <InvoiceState>
      <Navbar />
      <InputInvoice />
      <InvoiceTable />
    </InvoiceState>
  );
};

export default App;
