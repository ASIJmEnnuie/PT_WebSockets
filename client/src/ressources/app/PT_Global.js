import React from 'react';
import PT_EventList from './PT_EventList';
import PT_ControlBar from './PT_ControlBar';

var donnees = require("../datas/events.json").events;

const PT_Global = React.createClass({
  dateController: function(e, date) {
    console.log("Recherche de la date suivante: " + date);
  },

  placeController: function(e, x, y, z) {
    console.log("Recherche de l'emplacement: " + e.target.value);
  },

  razController: function() {
    console.log("Remise à zéro des recherches");
  },

  render: function() {
    return (
      <div>
        <PT_ControlBar
          dateController={this.dateController}
          placeController={this.placeController}
          razController={this.razController}
        />
        <PT_EventList
          events={donnees}
        />
      </div>
    );
  }
});

export default PT_Global;
