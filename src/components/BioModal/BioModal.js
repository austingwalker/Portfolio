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
  

  render() {
    return (
      <div>
        <Button className="bioButton" onClick={this.toggle}><i className="fas fa-book fa-3x"></i><h5>Bio</h5></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="bioHeader"  toggle={this.toggle}><strong>Bio</strong></ModalHeader>
          <ModalBody>
          <div className="bioBox">
            <p className="bioP">I love development because I enjoyed creating things, solving problems, serving people using technology, and making life more efficient. 
            </p>
            <br/>
            <p className="bioP">
            I wrote my first lines of code on Khan Academy and Codeacademy and found that hours would quickly pass by while doing tutorials. Because of my interest I made the decision to take the UT Austin Coding Bootcamp three-month full-time course. The course covered skills and technologies needed to build full stack websites and applications. While taking the course I had to work another job, and as such wasn't able to dedicate the time to learning the material as well as I would have liked. So, at the end of the three-month bootcamp, I decided to invest the time to go back through the entire course of material. I spent 8-14 hours a day at home re-watching every recorded class lecture and re-doing every exercise, homework, and project in order to solidify my understanding of the material and it payed off! Now I am able to build fully functional full stack applications. 
            </p>
            <br/>
            <p className="bioP">
            I share my story above to highlight that I’m dedicated to learning this craft and that I have the drive to self-teach and complete the job at hand with excellence. In my time becoming a developer, it's become apparent that I don't know what I don't know. But, that is one of the things that draws me to coding -- that there is so much to continuously learn. I am hungry to keep pushing myself, grow as a developer, and contribute to a team and company.
            </p>
          </div>
          </ModalBody>
          <ModalFooter>
            <Button className="bioBtn"  onClick={this.toggle}>Back to Home</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BioModal;