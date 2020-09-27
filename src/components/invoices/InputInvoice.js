import React, { useContext, useState, useEffect } from "react";
import InvoiceContext from "../../context/invoice/invoiceContext";

const InputInvoice = () => {
  const invoiceContext = useContext(InvoiceContext);

  const { current } = invoiceContext;

  useEffect(() => {
    if (current !== null) {
      setInvoice(current);
    } else {
      setInvoice({
        Vendor: "",
        Amount: "",
        Invoice: "",
        Date: "",
      });
    }
  }, [invoiceContext, current]);

  const [invoice, setInvoice] = useState({
    Vendor: "",
    Amount: "",
    Invoice: "",
    Date: "",
  });

  const { Vendor, Amount, Invoice, Date } = invoice;

  const onChange = e => {
    setInvoice({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='container border mb-5'>
      <h4 className='text-center'>
        {current ? "Edit Invoice" : "Add Invoice"}
      </h4>
      <div className='my-2'>
        <input
          className='mr-1'
          type='text'
          name={Vendor}
          value={Vendor}
          placeholder='Vendor'
          onChange={onChange}
        />
        <input
          className='mr-1'
          type='text'
          placeholder='Amount'
          name={Amount}
          value={Amount}
          onChange={onChange}
        />
        <input
          className='mr-1'
          type='text'
          placeholder='Invoice'
          name={Invoice}
          value={Invoice}
          onChange={onChange}
        />
        <input
          className='mr-1'
          type='text'
          placeholder='Date'
          name={Date}
          value={Date}
          onChange={onChange}
        />
        <input
          type='submit'
          className='btn btn-primary float-right'
          value={current !== null ? "Update" : "Add"}
        ></input>
      </div>
    </div>
  );
};

export default InputInvoice;
