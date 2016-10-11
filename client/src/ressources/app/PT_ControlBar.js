import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const PT_ControlBar = React.createClass({
  getInitialState: function() {
    return  {
      class: "controlBar"
    }
  },

  render: function() {
    return (
      <section className={this.state.class}>
        <div className="content">
          <div className="searchSelector"><DatePicker hintText="Choisir une date" /></div>
          <div className="searchSelector"><TextField  hintText="Saisir un emplacement" /></div>
          <div className="searchSelector"><RaisedButton label="Default" /></div>
        </div>
      </section>
    );
  }
});

export default PT_ControlBar;
