import React from 'react';
import {PDFViewer} from "@react-pdf/renderer";
import OneDayPdfDocument from './OneDayPdfDocument';
 
export default class PdfDiv extends React.Component {
    render(){
        if(!this.props){return 'Loading...'}
        return(<div className="pdf-viewer-and-downloader">
            <PDFViewer>     
                <OneDayPdfDocument menu={this.props.menu} date={this.props.date}/>
            </PDFViewer>
            </div>
        )
    }
}
