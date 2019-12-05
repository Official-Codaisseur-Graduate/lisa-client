import React from 'react';
import {connect} from 'react-redux';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

export default class OneDayPdfDocument extends React.Component {
    render(){
        if(!this.props.menu){return 'Loading...'}
        const items = this.props.menu.map((dish)=>{
            return <View>
                <Text>{dish.type_name}</Text>
                <Text>{dish.dish_name}</Text>
            </View>
        })
        return (<Document>
            <Page size='A4'>
                <View>
                    <Text>
                    Menu voor {this.props.date.date}
                    </Text>
                
                </View>
                    
                        {items}
                    
                
            </Page>
        </Document>
        /* <div>
            <h4>Menu voor {this.props.date.date}</h4>
            {items}
        </div> */
        )
    }
}

/* const mapStateToProps = state => {
    return {
      menu: state.menu,
      date: state.date,
      types: state.types
    };
  };
  
export default connect(mapStateToProps)(OneDayPdfDocument); */

