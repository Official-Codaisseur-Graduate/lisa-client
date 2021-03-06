import React, { Component } from "react";
import {connect} from 'react-redux';
import "./OneDayPdf.css";
import PdfDiv from "./PdfDiv";

export class ExportToPDFbtn extends Component {
  state = { showPopup: false };

  triggerPopup = () => {
    this.setState({showPopup: !this.state.showPopup})
  }

  render() {
    return [
      <button onClick={this.triggerPopup} className="export-to-pdf btn btn-outline-info">Exporteer menu naar PDF</button>,
      this.state.showPopup ? (
        <div className="export-to-pdf-outer">
          <div className="export-to-pdf-inner">
            <div className="popup-header">
              <button onClick={this.triggerPopup} className="btn btn-outline-info">close</button>
            </div>
            <div>
            
                <PdfDiv menu={this.props.menu} date={this.props.date}/>
           
            </div>
          </div>
        </div>
      ) : (
        false
      )
    ];
  }
}

const mapStateToProps = state => {
    return {
      menu: state.menu,
      date: state.date,
      types: state.types
    };
  };
  
export default connect(mapStateToProps)(ExportToPDFbtn);