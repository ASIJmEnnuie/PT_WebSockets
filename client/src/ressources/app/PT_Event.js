import React from 'react';
import Paper from 'material-ui/Paper';

const PT_Event = React.createClass({
  getInitialState: function() {
    return {
      zDepth: 2
    }
  },

  render: function() {
    return (
      <Paper zDepth={this.state.zDepth} className="event">
        <div className="content">
          <div className="colImage" >
            <img src="ressources/images/profil.svg" alt="Une image de description"></img>
          </div>

          <div className="colInfo">

            <div className="col">
              <div className="row"><span className="title">{this.props.nom}</span></div>
              <div className="row"><span>Le {this.props.date} à {this.props.heure}</span></div>
              <div className="row"><span>{this.props.lieu}</span></div>
            </div>

            <div className="col">
              <div className="row"><span><span className="digit">{this.props.nbInscriptions}</span> personne(s) inscrites</span></div>
              <div className="row"><span><span className="digit">{this.props.nbPlaces-this.props.nbInscriptions}</span> place(s) restantes</span></div>
            </div>

            <div className="row">
              <span>{this.props.description}</span>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
});

export default PT_Event;
