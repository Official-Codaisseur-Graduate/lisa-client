import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

export default class OneDayPdfDocument extends React.Component {
    render(){

        const styles = StyleSheet.create({
            page: {
                backgroundColor: '#E4E4E4'
            },
            section: {
                margin: 10,
                padding: 10,
            },
            sectionCenter: {
                padding: 10,
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            heading: {
                marginTop: 10,
                marginBottom: 10,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 30,
            },
            option: {
                fontSize: 25,
                fontWeight: 'bold',
                margin: 10,
                padding: 10,
            },
            flex: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            },
            rowElement: {
                justifyContent: 'flex-start',
            }
            });

        if(!this.props.menu){return 'Loading...'}
        
        const toTypeId = {
            "Voorgerecht 1": 1,
            "Hoofdgerecht 1": 2,
            "Saus 1": 3,
            "Bijgerecht 1": 4,
            "Nagerecht 1": 5,
            "Voorgerecht 2": 6,
            "Hoofdgerecht 2": 7,
            "Saus 2": 8,
            "Bijgerecht 2": 9,
            "Nagerecht 2": 10
          }

        const sort = (array) => {
            array.sort(function(a, b){
                return a.key - b.key
            })
            return array
        }
          
        const items = this.props.menu.map((dish)=>{
            return <View key={toTypeId[dish.type_name]} style={styles.sectionCenter}>
                <Text>{dish.type_name}</Text>
                <Text>{dish.dish_name}</Text>
            </View>
        })

        const sortedItems = sort(items)
        
        //const checkArray = sortedItems.map(dish => dish.key)
        let OptionOne = []
        let OptionTwo = []
        for (const element of sortedItems){
            if(element.key > 5){
                OptionTwo.push(element)
            }else{
                OptionOne.push(element)
            }
        }
        console.log('OpetionOne',OptionOne)
        console.log('OptionTwo',OptionTwo)
        console.log('SortedItems?', sortedItems)

        const twoOptionsItems = () => {
            return <View style={styles.flex}>
                <View style={styles.rowElement}>
                    <Text style={styles.option}>
                        Option 1
                    </Text>
                    {OptionOne}
                </View>

                <View style={styles.rowElement}>
                    <Text style={styles.option}>
                        Option 2
                    </Text>
                {OptionTwo}
                </View>
            </View>
        }

        return (<Document>
            <Page size='A4' style={styles.page}>
                <View style={styles.heading}>
                    <Text style={styles.heading}>
                    Menu voor {this.props.date.date}
                    </Text>  
                </View>
                {/* {sortedItems} */}
                {/* {OptionTwo === true && {sortedItems}} */} 
                {OptionTwo.length === 0 && sortedItems} 
                {OptionTwo.length > 0 && twoOptionsItems()}
            </Page>
        </Document>
        )
    }
}


