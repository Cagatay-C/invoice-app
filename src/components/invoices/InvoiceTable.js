import React, { useContext } from "react";
import { Table } from "reactstrap";
import InvoiceContext from "../../context/invoice/invoiceContext";
import InvoiceTableItem from "./InvoiceTableItem";

const InvoiceTable = () => {
  const invoiceContext = useContext(InvoiceContext);
  const { invoices } = invoiceContext;

  return (
    <div className='container border rounded center'>
      <div className='row'>
        <div className='col-12'>
          <h4 className='text-center'>Pending invoices - The Test Company</h4>
        </div>
      </div>
      <div className='row'>
        <div className='.col-cxs-12 center text-center mx-auto'>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th scope='row'>Vendor</th>
                <th>Amount</th>
                <th>Invoice</th>
                <th>Date</th>
                <th colSpan='5'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoiceContext.invoices.length === 0 ? (
                <tr>
                  <td colSpan='9'>All caught up!</td>
                </tr>
              ) : (
                invoices &&
                invoices.map(invoice => (
                  <InvoiceTableItem invoice={invoice} key={invoice.id} />
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable;
