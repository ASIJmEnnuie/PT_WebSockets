import React from 'react';
import PT_EventList from './PT_EventList';
import PT_ControlBar from './PT_ControlBar';

var donnees = require("../datas/events.json").events;

const PT_Global = React.createClass({

  render: function() {
    return (
      <div>
        <PT_ControlBar />
        <PT_EventList events={donnees} />
      </div>
    );
  }
});

export default PT_Global;
