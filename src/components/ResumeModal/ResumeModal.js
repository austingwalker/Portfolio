import React from 'react';
import "./ResumeModal.css";
import { Button } from 'reactstrap';

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

  // color="danger"
  // color="rimary"
  // color="success"
  // color="info"
  // color="warning"
  // color="danger"
  

  render() {
    return (
      <div className="resumeBox">
        <Button className="resumeButton" href="https://docs.google.com/document/u/1/d/e/2PACX-1vRr-TpJg1esEcOklHJpNb8r7BFp8RaCDwu2nvIio76rTRXrTgbZYpe3RX4qFl4DeEd8F8Jr6jwd9NUd/pub" target="_blank" rel='noreferrer noopener' ><i className="far fa-file fa-3x"></i><h5>Resume</h5></Button>
      </div>
    );
  }
}

export default ResumeModal;