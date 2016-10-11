import React from 'react';
import ReactDOM from 'react-dom';

import PT_Event from './PT_Event';
var donnees = require("../datas/events.json").events;

const PT_Global = React.createClass({

  render: function() {
    return (
      <PT_Event
        nom={donnees[0].nom}
        lieu={donnees[0].lieu}
        organisateur={donnees[0].organisateur}
        date={donnees[0].date}
        heure={donnees[0].heure}
        description={donnees[0].description}
        nbInscriptions={donnees[0].nb_inscriptions}
        nbPlaces={donnees[0].nb_places}
      />
    );
  }
});

export default PT_Global;
