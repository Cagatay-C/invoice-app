import React from "react";

const Navbar = props => {
  const { title } = props;

  return (
    <nav className='navbar navbar-dark bg-primary mb-5'>
      <a href='#!' className='navbar-brand'>
        <i className='fas fa-file-invoice' style={{ padding: "5px" }}></i>
        {title}
      </a>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Invoices",
};

export default Navbar;
