import React from 'react';
import PT_Event from './PT_Event';

const PT_EventList = React.createClass({
  getDefaultProps: function() {
    return {
      events: [],
    }
  },

  render: function() {
    return (
      <div className="eventList">
        {
          this.props.events.map(function(event, i){
            return(
              <PT_Event
              key={i}
              nom={event.nom}
              lieu={event.lieu}
              organisateur={event.organisateur}
              date={event.date}
              heure={event.heure}
              description={event.description}
              nbInscriptions={event.nb_inscriptions}
              nbPlaces={event.nb_places}
              />
            );
          })
        }
      </div>
    );
  }
});

export default PT_EventList;
