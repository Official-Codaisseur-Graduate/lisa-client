import React from "react";
import "./index.css"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink
} from "@react-pdf/renderer";

const PdfDocument = () => (
  <div className="pdf-viewer-and-downloader">
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
    <PDFDownloadLink document={<MyDocument />} fileName="weekmenu.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Document aan het laden..." : "Download PDF"
      }
    </PDFDownloadLink>
  </div>
);

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default PdfDocument;
