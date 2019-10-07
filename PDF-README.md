Export to PDF
A feature to export a week menu to PDF has been implemented. In this way, the chef can easily print out the week menu. Previously he had to make this menu manually in Microsoft Word every week.
There are three important components to this feature:
1. WeekSelect
Displays at the /week route. Allows the chef to select a week from which to export the entire menu. 
2. ExportToPDF. 
Shows a button with the text "Exporteer weekmenu naar PDF". This now always shows on the /week route, but you should make it that it only shows when weekMenu is not null in the Redux state. 
Then, when you click the button, it opens a popup, which shows a close button and the PdfDocument component.
3. PdfDocument
This is the actual component that renders the week menu to PDF, and also shows a download link for this PDF. It uses the React-PDF NPM package. You can read good documentation for it on its website: https://react-pdf.org/. I will nevertheless give you some instructions on how it works in this project currently.
First of all, the component currently does not work with actual data from the server/Redux state. It uses data from a file called menuSampleData.js. It should be easy to make it work with actual data, since this sample data is in the same format. Just make sure you only load the component/popup when the data is actually in the Redux state, or build checks into this component.
"Const PdfDocument" returns two sub-components: 1. PDFViewer, which loads an in-browser PDF viewer and 2. PDFDownloadLink, which generates a PDF file and offers it as a download to the chef. Both of these already work perfectly.
Both receive the actual data for the PDF from const MyDocument. 
MyDocument receives its required data, in the form of an object, from const menuObject. menuObject uses an array method to sort all meals of the week in the correct order.
MyDocument then uses this data to generate a PDF. Currently it only does this for Wednesday (day3 in menuObject). It would be easy to make it generate all days. Ideally you would want this to fit on one A4 paper, so everything should be wrapped in the <Page></Page> element. The <View></View> elements inside this can be seen as the equivalents of HTML divs, although they cannot contain any text. You should wrap text in an additional <Text></Text> element. 
All of these elements mentioned can receive CSS style from an object, some of which I have created already (headingStyle, rowStyle, rowElement). Use this to eventually generate tables (using CSS borders for example) and to make everything fit on one page (by tweaking font-size and spacing). 
This is about it, you can probably use this info to finalize this feature. Also you can probably make the code more concise. Good luck!