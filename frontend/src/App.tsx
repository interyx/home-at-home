import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import './index.css'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid className="tw-bg-slate-800 tw-text-slate-200 vh-100">
     <Navigation /> 
      <Container fluid className="tw-bg-slate-800 flex-column vh-100 px-4">
        <Row>
          <Col className="text-center">
            <h1 className="display-1">Welcome to Home@Home!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="display-5">
              An app to augment your home.
            </div>
            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</Col>
          <Col>
            <div className="display-5">
              To take things off of your plate.
            </div>
          </Col>
          <Col>
            <div className="display-5">
              While helping you get dinner on the table.
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
