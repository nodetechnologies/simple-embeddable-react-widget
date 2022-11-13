import React from "react";
import Config from "../../config";
import "./login.css";
import { useTranslation } from "react-i18next";

const widgetName = Config.name;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
    };
  }

  //Business background color must be added in "style"
  render() {
    if (this.state.message) {
      return (
        <div
          style={{ backgroundColor: "#1d70b7" }}
          className="widget-container"
        >
            <div className="card-items-count">
                <p className="general-text fs-14 fw-500 card-items-number white-text">0</p>
                </div>
          <h1 className="general-text white-text fs-15 fw-500">
            Welcome {this.state.message}
          </h1>
          <div>
            <p className="general-text white-text fs-12 fw-400">
              Add your first service
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{ backgroundColor: "#1d70b7" }}
          className="widget-container"
        >
          <h1 className="general-text white-text fs-14 fw-400">
            Login to start using {widgetName}
          </h1>
        </div>
      );
    }
  }

  setMessage(message) {
    this.setState({ message: message });
  }
}

export default Login;
