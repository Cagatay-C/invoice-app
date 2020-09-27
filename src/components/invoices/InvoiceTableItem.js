import React, { Fragment, useContext } from "react";
import { Button } from "reactstrap";
import InvoiceContext from "../../context/invoice/invoiceContext";

const InvoiceTableItem = ({ invoice }) => {
  const invoiceContext = useContext(InvoiceContext);

  const {
    deleteInvoice,
    setCurrent,
    clearCurrent,
    updateInvoice,
  } = invoiceContext;

  const onDelete = id => {
    deleteInvoice(id);
    clearCurrent();
  };

  const onUpdate = () => {
    setCurrent(invoice);
    updateInvoice(invoice);
  };

  return (
    <Fragment>
      <tr key={invoice.id}>
        <td>{invoice.Vendor}</td>
        <td>{invoice.Amount}</td>
        <td>{invoice.Invoice}</td>
        <td>{invoice.Date}</td>
        <td>
          <Button className='btn btn-lg btn-info' onClick={onUpdate}>
            <i className='fas fa-pen-alt'></i>
          </Button>
        </td>
        <td>
          <Button
            className='btn btn-lg btn-danger'
            onClick={() => onDelete(invoice.id)}
          >
            <i className='fas fa-trash-alt'></i>
          </Button>
        </td>
      </tr>
    </Fragment>
  );
};

export default InvoiceTableItem;
