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
            <p className="bioP">I'm a Software Developer who loves to code and is passionate about learning and growing. I'm strong in a variety of work environments and pursue excellence in all aspects of a project. I use both technical and soft skills to see people flourish by identifying needs and providing fruitful solutions. 
            </p>
            <br/>
            <p className="bioP">
            I started out as a self-taught hobby coder and quickly fell in love with the craft. I decided to pursue software engineering full-time and received formal education through a three month full-time web development certificate course at the University of Texas in the fall of 2018. Including my course work I’ve made it my full time job since the spring of 2018 to fully immersing myself and learn all things software development.
            </p>
            <br/>
            <p className="bioP">
            Before becoming a developer I worked in the non-profit world where there were limited resources and ample amounts of work to be done. This required working in a fast-paced environment, constant communication, setting priorities, wearing many hats, interacting with a variety of different people, and thinking of innovative solutions to a wide range of problems. I'm now blending my past work experience with my coding experience to continue to take part in work that allows others to thrive. I will excel working on a diverse spectrum of dynamic projects throughout the software life cycle and work well in an agile environment both individually and on a team. Most likely all the candidates you will interview will know how to code. I know how to code and have extremely strong soft skills as well. 
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