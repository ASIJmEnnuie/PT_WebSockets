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
          <div className="searchSelector">
            <DatePicker hintText="Choisir une date" onChange={this.props.dateController}/>
          </div>
          <div className="searchSelector" onChange={this.props.placeController}>
            <TextField  hintText="Saisir un emplacement" />
          </div>
          <div className="searchSelector" onTouchTap={this.props.razController}>
            <RaisedButton label="Afficher tous les évènements" />
          </div>
        </div>
      </section>
    );
  }
});

export default PT_ControlBar;
