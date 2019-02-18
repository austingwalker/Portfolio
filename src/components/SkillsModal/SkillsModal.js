import React from 'react';
import "./SkillsModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SkillsModal extends React.Component {
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
        <Button className="skillsButton" onClick={this.toggle}><i className="fas fa-laptop fa-3x"></i><h5>Skills</h5></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><strong>Professional Skills</strong></ModalHeader>
          <ModalBody>
            <div className="titleAndSkills">
              
              <div className="skillsBox">
                <p className="listedSkills">HTML | CSS | Bootstrap | Javascript | jQuery | Node.js | Express | SQL | Sequelize | Handlebars |  MongoDB | Mongoose | Passport.js |  MVC | React | npm | yarn | Git | Github | Heroku | SEO | APIs - consuming | APIs - creating </p>
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

export default SkillsModal;