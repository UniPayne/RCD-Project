import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';



class Wilkommen extends React.Component {
  render(){
    return <h1>Wilkommen beim Scoring Helper!</h1>;
    
  }
}


ReactDOM.render(<Wilkommen/>, document.getElementById('root'));
