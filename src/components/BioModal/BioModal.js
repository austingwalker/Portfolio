import React from 'react';
import "./BioModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class BioModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // color="danger"
  // color="rimary"
  // color="success"
  // color="info"
  // color="warning"
  // color="danger"
  

  render() {
    return (
      <div>
        <Button className="bioButton" onClick={this.toggle}>Bio</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Resume</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Back to Home</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BioModal;