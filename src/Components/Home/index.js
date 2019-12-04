import React, { Component } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import "./Home.css";

class HomeContainer extends Component {
  render() {
    return (
      // class names are *mostly* bootstrap defaults, check css file for custom classes
      <div className="m-5 home-wrapper">
        <Jumbotron fluid className="bg-info rounded text-white">
          <Container className="w-75">
            <h3 className="text-uppercase">Find your kitchen</h3>
            <p className="lead">
              Find your kitchen in the dropdown menu above.
            </p>
          </Container>
        </Jumbotron>
        <Jumbotron fluid className="bg-info rounded text-white">
          <Container className="w-75">
            <h3 className="text-uppercase">Create dish</h3>
            <p className="lead">
              Select the dish type and enter the dish name. You will create a
              new dish to be added on the menu.
            </p>
            {/* add link element to wrap button */}
            <Button className="btn-show-me mt-3">Show me</Button>
          </Container>
        </Jumbotron>
        <Jumbotron fluid className="bg-info rounded text-white">
          <Container className="w-75">
            <h3 className="text-uppercase">Add to menu</h3>
            <p className="lead">
              Pick a date on the calendar and find your dish from the
              corresponding dish type. You can add your dishes on the menu for
              the selected day.
            </p>
            {/* add link element to wrap button */}
            <Button className="btn-show-me mt-3">Show me</Button>
          </Container>
        </Jumbotron>
        <Jumbotron fluid className="bg-info rounded text-white">
          <Container className="w-75">
            <h3 className="text-uppercase">Print menu</h3>
            <p className="lead">
              Select the week containing the menus you want to print on the
              calendar. You can generate a PDF file for the menus of the week.
            </p>
            {/* add link element to wrap button */}
            <Button className="btn-show-me mt-3">Show me</Button>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default HomeContainer;
