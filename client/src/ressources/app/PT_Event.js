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
          <div className="col" >
            <img src="ressources/images/profil.svg"></img>
          </div>
          <div className="col" data-num={2}>
            <div className="row">Nom evenement</div>
            <div className="row">Date - Heure - Lieu</div>
          </div>
          <div className="col">
            <div className="row">Nb participants</div>
            <div className="row">Nb places restantes</div>
          </div>
          <div className="description">
            Je suis une putain de description !
          </div>
        </div>
      </Paper>
    );
  }
});

export default PT_Event;
