import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import HelpModalComponent from './HelpModalComponent';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand className="mx-3" href="/">
        Markdown Previewer
      </Navbar.Brand>
      <HelpModalComponent show={show} handleClose={handleClose} />
      <Navbar.Text className="mx-3">
        <a href="#!" onClick={handleShow}>
          <i className="far fa-question-circle fa-2x"></i>
        </a>
      </Navbar.Text>
    </Navbar>
  );
};

export default NavbarComponent;
