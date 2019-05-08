import React from 'react';
import "./ResumeModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const styles = {
//   iframe: {
//     width: 770,
//     height: 550,
//   }
// };
// style={styles.iframe}

class ResumeModal extends React.Component {
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
        <Button className="resumeButton" onClick={this.toggle}><i className="far fa-file fa-3x"></i><h5>Resume</h5></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-lg modalBox">
          <ModalHeader className="resumeHeader" toggle={this.toggle}><strong></strong></ModalHeader>
          <ModalBody className="modalBody">
            <div className="iframeBox">
              
            <iframe src="https://docs.google.com/document/u/1/d/e/2PACX-1vRr-TpJg1esEcOklHJpNb8r7BFp8RaCDwu2nvIio76rTRXrTgbZYpe3RX4qFl4DeEd8F8Jr6jwd9NUd/pub" ></iframe>
        
            </div>
          </ModalBody>
          <ModalFooter>
            
            <Button className="resumeBtn" onClick={this.toggle}>Back to Home</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ResumeModal;