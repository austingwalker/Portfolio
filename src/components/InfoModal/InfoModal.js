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


  render() {
    return (
      <div>
        <Button className="infoButton" onClick={this.toggle}><i className="far fa-address-card fa-3x"></i><h5>Contact Info</h5></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="infoHeader" toggle={this.toggle}>Contact Info</ModalHeader>
          <ModalBody>
            <div className="infoBox">
              <div className="information">
                <p className="name" ><strong>Name:</strong>&nbsp;&nbsp;&nbsp;Austin Walker</p>
                <p className="email"><strong>Email:</strong>&nbsp;&nbsp;agwalker249@gmail.com</p>
                <p className="phone"><strong>Phone:</strong>&nbsp;&nbsp;&nbsp;(512) 468-8416</p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button className="infoBtn" onClick={this.toggle}>Back to Home</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default InfoModal;