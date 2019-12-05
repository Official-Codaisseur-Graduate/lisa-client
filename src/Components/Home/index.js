import React, { Component } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import "./Home.css";

class HomeContainer extends Component {
  render() {
    return (
      // class names are *mostly* bootstrap defaults, check css file for custom classes
      <div className="w-75 mx-auto my-5">
        <Jumbotron fluid className="bg-info rounded text-white">
          <Container className="w-75">
            <h3 className="text-uppercase">Vind je keuken</h3>
            <p className="lead">
              Zoek uw keuken in het vervolgkeuzemenu hierboven.
            </p>
          </Container>
        </Jumbotron>
        <Jumbotron fluid className="bg-info rounded text-white">
          <Container className="w-75">
            <h3 className="text-uppercase">Gerecht maken</h3>
            <p className="lead">
              Selecteer het gerechttype en voer de gerechtnaam in. U maakt een
              nieuw gerecht dat aan het menu wordt toegevoegd.
            </p>
            {/* add link element to wrap button */}
            <Button className="btn-show-me mt-3">Gerecht maken</Button>
          </Container>
        </Jumbotron>
        <Jumbotron fluid className="bg-info rounded text-white">
          <Container className="w-75">
            <h3 className="text-uppercase">Toevoegen aan menu</h3>
            <p className="lead">
              Kies een datum op de kalender en vind je gerecht uit de
              overeenkomstig gerechttype. U kunt uw gerechten toevoegen aan het
              menu voor de geselecteerde dag.
            </p>
            {/* add link element to wrap button */}
            <Button className="btn-show-me mt-3">Naar het menu</Button>
          </Container>
        </Jumbotron>
        <Jumbotron fluid className="bg-info rounded text-white">
          <Container className="w-75">
            <h3 className="text-uppercase">Menu afdrukken</h3>
            <p className="lead">
              Selecteer de week met de menu's die u wilt afdrukken op kalender.
              U kunt een PDF-bestand genereren voor de menu's van de week.
            </p>
            {/* add link element to wrap button */}
            <Button className="btn-show-me mt-3">Menu afdrukken</Button>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default HomeContainer;
