import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import HelpModalComponent from './HelpModalComponent';

class NavbarComponent extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand className="ml-2" href="/">
          Markdown Previewer
        </Navbar.Brand>
        <HelpModalComponent
          show={this.state.show}
          handleClose={this.hideModal}
        />
        <Navbar.Text className="mr-2">
          <a href="#!" onClick={this.showModal}>
            <i className="far fa-question-circle fa-2x"></i>
          </a>
        </Navbar.Text>
      </Navbar>
    );
  }
}

export default NavbarComponent;
