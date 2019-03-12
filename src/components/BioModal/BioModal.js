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
        <Button className="bioButton" onClick={this.toggle}><i className="fas fa-book fa-3x"></i><h5>Bio</h5></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><strong>Bio</strong></ModalHeader>
          <ModalBody>
          <div className="bioBox">
            <p className="bioP">Full Stack Web Developer able to build clean and fully functional websites and applications from the ground up. Skilled at blending systematic, methodical, and spatial thinking with creativity to produce desired results. Strong in a variety of work environments and pursues excellence in all aspects of a project.
            </p>
          </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Back to Home</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BioModal;