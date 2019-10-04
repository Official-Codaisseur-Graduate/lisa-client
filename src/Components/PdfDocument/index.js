import React from "react";
import "./index.css";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink
} from "@react-pdf/renderer";
import { sampleData } from "./menusSampleData";

console.log(sampleData);

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

const headingStyle = {
    width: "90%",
    fontWeight: "bold",
    margin: "10px 0",
    marginLeft: "10%"
}

const rowStyle = {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    marginLeft: "10%",
    justifyContent: "space-between",
    marginBottom: "5px"
}

const rowElement = {
    width: "45%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
}

// Create Document Component
const MyDocument = () => {
  const menu = menuObject();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
            <View style={headingStyle}><Text>Woensdag</Text></View>
            <View style={rowStyle}>
                <View style={rowElement}><Text>{menu.day3.vg1}</Text></View>
                <View style={rowElement}><Text>{menu.day3.vg2}</Text></View>
            </View>
            <View style={rowStyle}>
                <View style={rowElement}><Text>{menu.day3.hg1}</Text></View>
                <View style={rowElement}><Text>{menu.day3.hg2}</Text></View>
            </View>
            <View style={rowStyle}>
                <View style={rowElement}><Text>{menu.day3.s1}</Text></View>
                <View style={rowElement}><Text>{menu.day3.s2}</Text></View>
            </View>
            <View style={rowStyle}>
                <View style={rowElement}><Text>{menu.day3.bg1}</Text></View>
                <View style={rowElement}><Text>{menu.day3.bg2}</Text></View>
            </View>
            <View style={rowStyle}>
                <View style={rowElement}><Text>{menu.day3.ng1}</Text></View>
                <View style={rowElement}><Text>{menu.day3.ng2}</Text></View>
            </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;

const menuObject = () => {
  return sampleData.reduce(
    (result, currentItem, index) => {
      const keyToPushTo = `day${new Date(
        currentItem.dataValues.date
      ).getDay()}`;
      if (currentItem.dataValues.type_name === "Voorgerecht 1") {
        result[keyToPushTo]["vg1"] = currentItem.dataValues.dish_name;
        return result;
      } else if (currentItem.dataValues.type_name === "Voorgerecht 2") {
        result[keyToPushTo]["vg2"] = currentItem.dataValues.dish_name;
        return result;
      } else if (currentItem.dataValues.type_name === "Hoofdgerecht 1") {
        result[keyToPushTo]["bg1"] = currentItem.dataValues.dish_name;
        return result;
      } else if (currentItem.dataValues.type_name === "Hoofdgerecht 2") {
        result[keyToPushTo]["bg2"] = currentItem.dataValues.dish_name;
        return result;
      } else if (currentItem.dataValues.type_name === "Saus 1") {
        result[keyToPushTo]["s1"] = currentItem.dataValues.dish_name;
        return result;
      } else if (currentItem.dataValues.type_name === "Saus 2") {
        result[keyToPushTo]["s2"] = currentItem.dataValues.dish_name;
        return result;
      } else if (currentItem.dataValues.type_name === "Bijgerecht 1") {
        result[keyToPushTo]["bg1"] = currentItem.dataValues.dish_name;
        return result;
      } else if (currentItem.dataValues.type_name === "Bijgerecht 2") {
        result[keyToPushTo]["bg2"] = currentItem.dataValues.dish_name;
        return result;
      } else if (currentItem.dataValues.type_name === "Nagerecht 1") {
        result[keyToPushTo]["ng1"] = currentItem.dataValues.dish_name;
        return result;
      } else if (currentItem.dataValues.type_name === "Nagerecht 2") {
        result[keyToPushTo]["ng2"] = currentItem.dataValues.dish_name;
        return result;
      }
      return result;
    },
    {
      day0: {
        vg1: "",
        vg2: "",
        hg1: "",
        hg2: "",
        s1: "",
        s2: "",
        bg1: "",
        bg2: "",
        ng1: "",
        ng2: ""
      },
      day1: {
        vg1: "",
        vg2: "",
        hg1: "",
        hg2: "",
        s1: "",
        s2: "",
        bg1: "",
        bg2: "",
        ng1: "",
        ng2: ""
      },
      day2: {
        vg1: "",
        vg2: "",
        hg1: "",
        hg2: "",
        s1: "",
        s2: "",
        bg1: "",
        bg2: "",
        ng1: "",
        ng2: ""
      },
      day3: {
        vg1: "",
        vg2: "",
        hg1: "",
        hg2: "",
        s1: "",
        s2: "",
        bg1: "",
        bg2: "",
        ng1: "",
        ng2: ""
      },
      day4: {
        vg1: "",
        vg2: "",
        hg1: "",
        hg2: "",
        s1: "",
        s2: "",
        bg1: "",
        bg2: "",
        ng1: "",
        ng2: ""
      },
      day5: {
        vg1: "",
        vg2: "",
        hg1: "",
        hg2: "",
        s1: "",
        s2: "",
        bg1: "",
        bg2: "",
        ng1: "",
        ng2: ""
      },
      day6: {
        vg1: "",
        vg2: "",
        hg1: "",
        hg2: "",
        s1: "",
        s2: "",
        bg1: "",
        bg2: "",
        ng1: "",
        ng2: ""
      }
    }
  );
};

console.log(menuObject());
