import React, { Component } from "react";
import { connect } from "react-redux";

import MenuDisplay from "./MenuDisplay";

import { deleteMenuItem } from "../../actions/menu";

export class MenuDisplayContainer extends Component {
  deleteItem = event => {
    event.preventDefault();
    const id = event.target.value;
    this.props.deleteMenuItem(id);
  };

  render() {
    const { menu, date, types } = this.props;
    
    return (
      <div className="MenuDisplay">
        {!date ? (
          "Selecteer een datum."
        ) : !menu || menu.length === 0 ? (
          "Voor deze datum is nog geen menu ingevoerd."
        ) : (
          <MenuDisplay menu={menu} deleteItem={this.deleteItem} types={types}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu,
    date: state.date,
    types: state.types
  };
};

export default connect(mapStateToProps, {
  deleteMenuItem
})(MenuDisplayContainer);
