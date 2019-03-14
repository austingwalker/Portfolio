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
        <Button className="resumeButton" href="http://www.keepandshare.com/doc22/view.php?id=108885&da=y" target="_blank" rel='noreferrer noopener' ><i className="far fa-file fa-3x"></i><h5>Resume</h5></Button>
      </div>
    );
  }
}

export default ResumeModal;