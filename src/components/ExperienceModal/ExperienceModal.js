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


  render() {
    return (
      <div>
        <Button className="experienceButton" onClick={this.toggle}><i className="fas fa-city fa-3x"></i><h5>Experience</h5></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><strong>Experience</strong></ModalHeader>
          <ModalBody>
            <div className="experienceBox">
              
              <div className="jobs">
                <p>
                A common thread found in my work experience is creating environments where people flourish. Whether that be bringing clarity to a situation, breaking down barriers, resourcing, or providing support. My work has always centered around the person(s) we were seeking to serve by identifying needs, tracing those needs to the root of the issues, and providing fruitful solutions. I'm now blending my past work experience with my coding experience to continue to take part in work that allows others to thrive. 
                </p>
                <br/>

                {/* <h5><b>Student</b></h5>
                <small><ul><li>University of Texas Coding Bootcamp</li><ul><li>Test</li></ul></ul></small> */}

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