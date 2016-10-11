import React from 'react';
import ReactDOM from 'react-dom';

import PT_EventList from './PT_EventList';
var donnees = require("../datas/events.json").events;

const PT_Global = React.createClass({

  render: function() {
    return (
      <PT_EventList events={donnees} />
    );
  }
});

export default PT_Global;
