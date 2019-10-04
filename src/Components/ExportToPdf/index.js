import React, { Component } from "react";
import "./index.css";

export class ExportToPdf extends Component {
  state = { showPopup: false };

  triggerPopup = () => {
    this.setState({showPopup: !this.state.showPopup})
  }

  render() {
    return [
      <button onClick={this.triggerPopup} className="export-to-pdf">Exporteer weekmenu naar PDF</button>,
      this.state.showPopup ? (
        <div className="export-to-pdf-outer">
          <div className="export-to-pdf-inner">
            <div className="popup-header">
              <button onClick={this.triggerPopup} className="popup-close-button">X</button>
            </div>
          </div>
        </div>
      ) : (
        false
      )
    ];
  }
}

export default ExportToPdf;
