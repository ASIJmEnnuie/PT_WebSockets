import React from 'react';
import PT_Event from './PT_Event';

const PT_EventList = React.createClass({
  getDefaultProps: function() {
    return {
      events: [],
    }
  },

  getInitialState: function() {
    return  {
      class: "eventList"
    }
  },

  render: function() {
    return (
      <div className={this.state.class}>
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
                image={event.image}
              />
            );
          })
        }
      </div>
    );
  }
});

export default PT_EventList;
