import React from "react";

class Toast extends React.Component {
  closeToasHandler = () => {};
  render() {
    return (
      <div class="toast-alert alert alert-danger" id="deleteToast">
        <button class="close" onClick={this.closeToasHandler}>
          &times;
        </button>
        <div class="media">
          <i class="far fa-trash-alt mr-3" style={{"fontSize": "20px"}}></i>

          <div class="media-body">
            <i>Deleted Successfully</i>
            <p>you have delted the stock manager successfully</p>
          </div>
        </div>
      </div>
    );
  }
}
