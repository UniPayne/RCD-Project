import React, { Component } from "react";
import {
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
import Home from "./Komponenten/Home";
import Uebersicht from "./Komponenten/Uebersicht";
import Voreinstellungen from "./Komponenten/Voreinstellungen";
import Canvas from "./Komponenten/Canvas";
import SpielPopup from "./Komponenten/SpielPopup";
import SpielEnde from "./Komponenten/SpielEndePopup";






class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>

            <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Uebersicht" component={Uebersicht}/>
            <Route path="/Voreinstellungen" component={Voreinstellungen}/>
            <Route path='/Canvas' component={Canvas}/>
            <Route path='/SpielPopup' component={SpielPopup}/>
            <Route path='/SpielEnde' component={SpielEnde}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
