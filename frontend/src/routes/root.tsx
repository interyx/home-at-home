import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../index.css";
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function Root() {
  return (
    <Container fluid className="tw-bg-slate-800 tw-text-slate-200 m-0 p-0">
      <Navigation />
      <Container fluid className="tw-bg-slate-800 px-4">
        <Row>
          <Col className="text-center tw-w-screen tw-object-contain">
            <div className="tw-font-kaushan tw-text-5xl lg:tw-text-7xl tw-text-shadow tw-shadow-slate-50 py-4">
              Welcome to Home@Home!
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <h4 className="tw-text-3xl">An app to augment your home.</h4>
            <p>
              Zombie ipsum reversus ab viral inferno, nam rick grimes malum
              cerebro. De carne lumbering animata corpora quaeritis. Summus
              brains sit, morbo vel maleficia? De apocalypsi gorger omero undead
              survivor dictum mauris. Hi mindless mortuis soulless creaturas,
              imo evil stalking monstra adventus resi dentevil vultus comedat
              cerebella viventium. Qui animated corpse, cricket bat max brucks
              terribilem incessu zomby. The voodoo sacerdos flesh eater,
              suscitat mortuos comedere carnem virus. Zonbi tattered for solum
              oculi eorum defunctis go lum cerebro. Nescio brains an Undead
              zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv
              ingdead.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h4>To take things off of your plate.</h4>
            <p>
              Zombies reversus ab inferno, nam malum cerebro. De carne animata
              corpora quaeritis. Summus sit, morbo vel maleficia? De
              Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas,
              imo monstra adventus vultus comedat cerebella viventium. Qui
              offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat
              mortuos comedere carnem. Search for solum oculi eorum defunctis
              cerebro. Nescio an Undead zombies. Sicut malus movie horror.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h4>While helping you get dinner on the table.</h4>
            <p>
              Cum horribilem walking dead resurgere de crazed sepulcris
              creaturis, zombie sicut de grave feeding iride et serpens.
              Pestilentia, shaun ofthe dead scythe animated corpses ipsa
              screams. Pestilentia est plague haec decaying ambulabat mortuos.
              Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror
              soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui
              tardius moveri, brid eof reanimator sed in magna copia sint
              terribiles undeath legionis. Alii missing oculis aliorum sicut
              serpere crabs nostram. Putridi braindead odores ki  ll and infect,
              aere implent left four dead.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Root;
