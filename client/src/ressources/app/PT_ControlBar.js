import React from 'react';

const PT_ControlBar = React.createClass({
  getInitialState: function() {
    return  {
      class: "controlBar"
    }
  },

  render: function() {
    return (
      <div className={this.state.class}>
        
      </div>
    );
  }
});

export default PT_ControlBar;
