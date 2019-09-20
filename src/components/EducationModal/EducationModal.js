import React from 'react';
import "./EducationModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EducationModal extends React.Component {
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
        <Button className="educationButton" onClick={this.toggle}><i className="fas fa-university fa-3x"></i><h5>Education</h5></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="educationHeader"  toggle={this.toggle}><strong>Education</strong></ModalHeader>
          <ModalBody>
            <div className="educationBox">
          
              <div className="schools">
                <p className="texas"><small><b>University of Texas at Austin</b>  <li>Full Stack Web Development Certificate</li></small></p>
                <p><small><li>Completed the three month full time bootcamp twice, once as a student & again on my own in the months following</li></small></p>
              <p><small><li>Practiced Agile methodology while working individually and on teams to complete projects</li></small></p>
              <p><small><li>Learned to self-teach</li></small></p>

                <p className="txstate"><small><b>Texas State University</b>  <li>Bachelor of Science</li><li> Major in Geography</li><li> Minor in History</li> </small></p>

                <p className="tt"><small><b>Texas Tech University</b>  <li>Undergraduate work</li></small></p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button className="educationBtn" onClick={this.toggle}>Back to Home</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EducationModal;