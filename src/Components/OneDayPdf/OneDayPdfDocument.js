import React from 'react';
import {connect} from 'react-redux';

class OneDayPdfDocument extends React.Component {
    render(){
        if(!this.props.menu){return 'Loading...'}
        const items = this.props.menu.map((dish)=>{
            return <div>
                <p>{dish.type_name}</p>
                <p>{dish.dish_name}</p>
            </div>
        })
        return (<div>
            <h4>Menu voor {this.props.date.date}</h4>
            {items}
        </div>)
    }
}

const mapStateToProps = state => {
    return {
      menu: state.menu,
      date: state.date,
      types: state.types
    };
  };
  
export default connect(mapStateToProps)(OneDayPdfDocument);

