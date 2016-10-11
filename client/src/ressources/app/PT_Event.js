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
            <img src="ressources/images/profil.svg"></img>
          </div>

          <div className="colInfo">

            <div className="col">
              <div className="row"><span>Nom evenement</span></div>
              <div className="row"><span>Date - Heure - Lieu</span></div>
            </div>

            <div className="col">
              <div className="row"><span>Nb participants</span></div>
              <div className="row"><span>Nb places restantes</span></div>
            </div>

            <div className="row">
              <span>Je suis une putain de description !</span>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
});

export default PT_Event;
