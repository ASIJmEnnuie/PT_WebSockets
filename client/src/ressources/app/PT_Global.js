import React from 'react';
import ReactDOM from 'react-dom';

import PT_Event from './PT_Event';
// var donnees = require("../datas/events.json").events;

const PT_Global = React.createClass({

  render: function() {
    return (
      <PT_Event />
    );
  }
});

export default PT_Global;
