import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "../CSS/home.css";
import "../CSS/voreinstellungen.css";
<<<<<<< HEAD
import logo from '../logo.png';
import Vor_Spieler_Heim from "./Vor_Spieler_Heim";
import Vor_Spieler_Gast from "./Vor_Spieler_Gast";

=======
import '../CSS/spielInfo_Popup.css';

class Voreinstellungen extends Component {
  constructor(props){
    super(props);
    this.state = {
      spielnummer:            '',
      spieldatum:             '',
      liga_name:              '',
      verband_name:           '',
      gastTeam_name:          '',
      heimTeam_name:          '',
      austragungsort:         '',
      zuschauer:              '',

      gast_spieler:[],
      gast_SpielerRNummer: '',
      gast_SpielerNName: '',
      gast_SpielerVName: '',
      gast_SpielerPosition: '',
      gast_SpielerPNummer: '',

      heim_SpielerRNummer:'',
      heim_SpielerNName:'',
      heim_SpielerVName:'',
      heim_SpielerPosition:'',
      heim_SpielerPNummer:'',


      showInfoPopup:false,
      showGastPopup:false,
      showHeimPopup:false
    }

}
toggleInfoPopup() {
  this.setState({showInfoPopup: !this.state.showInfoPopup});
}

toggleGastPopup(){
  this.setState({showGastPopup: !this.state.showGastPopup});
}

toggleHeimPopup(){
  this.setState({showHeimPopup: !this.state.showHeimPopup});
}

submitSpielinfosMain(stati){
  this.setState({spielnummer:     stati.form_spielnummer});
  this.setState({spieldatum:      stati.form_spieldatum});
  this.setState({liga_name:       stati.form_liga_name});
  this.setState({verband_name:    stati.form_verband_name});
  this.setState({gastTeam_name:   stati.form_gastTeam_name});
  this.setState({heimTeam_name:   stati.form_heimTeam_name});
  this.setState({austragungsort:  stati.form_austragungsort});
  this.setState({zuschauer:       stati.form_zuschauer});
}

submitGastMain(stati){

        this.setState({gast_spieler:stati.form_gast_spieler});
        this.setState({gast_SpielerRNummer: stati.form_gast_spieler});
        this.setState({gast_SpielerNName: stati.form_gast_SpielerNName});
        this.setState({gast_SpielerVName: stati.form_gast_SpielerVName});
        this.setState({gast_SpielerPNummer: stati.form_gast_SpielerPNummer});

  console.log(stati.form_gast_spieler);
  console.log(this.state.gast_spieler);
}
>>>>>>> d8d2dcc0093d8ab0b8b6ab1cd229648d494a230e



import Uebersicht from "./Uebersicht";

class Voreinstellungen extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <div className="vor_oben">
            <div className="vor_spielInfo">
              <label>Spielinformation</label>


              <button className="button_spielinfo">Spiel info</button>
            </div>

            <div>

              <img src={logo} className="logo" alt="logo" />
            </div>
          </div>

          <div className="vor_unten">
            <div className="vor_gast">
              <label>Gast</label>
              <Vor_Spieler_Gast/>

              <button className="button_gast">Gast</button>
            </div>

            <div className="vor_heim">
                <label>Heim</label>
                <Vor_Spieler_Heim/>


              <button className="button_heim">Heim</button>
            </div>
          </div>

            <div classname="vor_button">
              <NavLink to="/Uebersicht"><button >weiter</button></NavLink>
              <Route path="/Uebersicht" component={Uebersicht}/>
            </div>
          </div>
        </HashRouter>
    );
  }
}

export default Voreinstellungen;
