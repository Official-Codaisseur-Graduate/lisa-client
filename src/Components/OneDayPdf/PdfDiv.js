import React from 'react';
import { Provider } from 'react-redux'
import store from '../../store'
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    PDFViewer,
    PDFDownloadLink
  } from "@react-pdf/renderer";
import ReactPDF from '@react-pdf/renderer';
import OneDayPdfDocument from './OneDayPdfDocument';
 
export default class PdfDiv extends React.Component {
    render(){
        if(!this.props){return 'Loading...'}
        return(<div className="pdf-viewer-and-downloader">
            <PDFViewer>
                i
            {console.log('parent data?', this.props.menu)} 
                    
            <OneDayPdfDocument menu={this.props.menu} date={this.props.date}/>
                    
            </PDFViewer>
            {/* <PDFDownloadLink document={<OneDayPdfDocument />} fileName="weekmenu.pdf">
            {({ blob, url, loading, error }) =>
                loading ? "Document aan het laden..." : "Download PDF"
            }
            </PDFDownloadLink> */}
            {/* {ReactPDF.render(<OneDayPdfDocument />, `${__dirname}/example.pdf`)} */}
            </div>
        )
    }
}
