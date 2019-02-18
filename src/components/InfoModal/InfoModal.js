import React from 'react';
import "./InfoModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class InfoModal extends React.Component {
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
        <Button className="infoButton" onClick={this.toggle}><i className="far fa-address-card fa-3x"></i><h5>Contact Info</h5></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Contact Info</ModalHeader>
          <ModalBody>
            <div className="infoBox">
              <h2 className="infoTitle" ><strong>Contact Info</strong></h2>
              <div className="information">
                <h2 className="name" ><strong>Name:</strong>&nbsp;&nbsp;&nbsp;&nbsp;Austin Walker</h2>
                <h2 className="email"><strong>Email:</strong>&nbsp;&nbsp;&nbsp;&nbsp;agwalker249@gmail.com</h2>
                <h2 className="phone"><strong>Phone:</strong>&nbsp;&nbsp;&nbsp;&nbsp;(512) 468-8416</h2>
              </div>
            </div>
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

export default InfoModal;