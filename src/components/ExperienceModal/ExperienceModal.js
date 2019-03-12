import React from 'react';
import "./ExperienceModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ExperienceModal extends React.Component {
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
        <Button className="experienceButton" onClick={this.toggle}><i className="fas fa-city fa-3x"></i><h5>Experience</h5></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><strong>Experience</strong></ModalHeader>
          <ModalBody>
            <div className="experienceBox">
              
              <div className="jobs">

                <p className="student"><small><b>Student</b><li>University of Texas Coding Bootcamp</li></small></p>

                <p className="stone"><small><b>Ministry Associate</b><li>The Austin Stone Community Church</li></small></p>

                <p className="rbi"><small><b>Community Development Associate</b><li>RBI Austin</li> </small></p>

              </div>
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

export default ExperienceModal;