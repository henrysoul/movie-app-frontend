import React from "react";
import { connect } from "react-redux";
import { hideError } from "../../../store/actions/error";

class Alert extends React.Component {
  closeAlertHandler = () => {
    this.props.hideError();
  };

  render() {
    let type = this.props.type;
    let msg = this.props.error.msg;
    if (typeof msg === "object")
      msg = msg.map((message, index) => {
        return (
          <p className="p-0 m-0" key={index}>
            {message}
          </p>
        );
      });

    return this.props.error.showError ? (
      <div
        className={`alert alert-${type} alert-dismissible fade show`}
        role="alert"
      >
        {msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="btn-close"
          onClick={this.closeAlertHandler}
        ></button>
      </div>
    ) : (
      ""
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideError: () => dispatch(hideError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
