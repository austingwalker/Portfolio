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



  render() {
    return (
      <div>
        <Button className="skillsButton" onClick={this.toggle}><i className="fas fa-laptop fa-3x"></i><h5>Technologies</h5></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="skillsHeader" toggle={this.toggle}><strong>Technologies and Skills</strong></ModalHeader>
          <ModalBody>
            <div className="titleAndSkills">
              
              <div className="skillsBox">
              <h5>Technologies</h5>
              <p className="listedSkills">React  | Javascript | jQuery | JSX |  Node.js | NPM | YARN | Postman | Express | SQL | Sequelize | MySQL |  MongoDB | Mongoose | Robo 3T | HTML | CSS | Bootstrap  | Handlebars </p>
              <br/>
              <h5>Skills</h5>
                <p className="listedSkills">REST APIs | JSON | SEO | AGILE | MVC | Git | GitHub | Heroku </p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            
            <Button className="skillsBtn" onClick={this.toggle}>Back to Home</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SkillsModal;