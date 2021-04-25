import React from "react";
import ReactModal from "react-modal";

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      showModal: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.clicked = this.clicked.bind(this);
  }
  async componentDidMount() {
    await setTimeout(() => {
      this.openModal();
    }, 3000);
  }
  openModal() {
    this.setState({ showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false });
    console.log("clicked!!!");
    this.clicked();
  }
  clicked() {
    setTimeout(() => {
      this.openModal();
    }, 3000);
  }

  render() {
    console.log("Hey,weirdo???");
    return (
      <div className="has-text-centered">
        <br />
        <h1 className="title is-3">Introducing:</h1>
        <div>
          <img id="homeImg" src="PARTYBOX.png" />
          <div>
            {/* <button onClick={this.openModal}>Show Modal</button> */}
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="MinimalModal Example"
            >
              <button onClick={this.closeModal}>Close Modal</button>
              <h1>My FIRST MODAL</h1>
            </ReactModal>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Modal;
