import React from 'react';
import PT_EventList from './PT_EventList';
import PT_ControlBar from './PT_ControlBar';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

var donnees = require("../datas/events.json").events;

const PT_Global = React.createClass({
  componentDidMount: function() {
    this.setState(function(previousState, currentProps) {
      var stompClient = Stomp.over(new SockJS('http://localhost:8080/gs-guide-websocket'));

      stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
          console.log(JSON.parse(greeting.body).content);
        });
      });

      return {
        stompClient: stompClient
      };
    });
  },

  getInitialState: function() {
    return {
      stompClient: null
    }
  },

  dateController: function(e, date) {
    console.log("Recherche de la date suivante: " + date);
  },

  placeController: function(e) {
    console.log("Recherche de l'emplacement: " + e.target.value);
  },

  razController: function() {
    console.log("Remise à zéro des recherches");
  },

  disconnect: function() {
    if (this.state.stompClient != null) {
      this.statet.stompClient.disconnect();
    }
    console.log("Disconnected");
  },

  sendName: function() {
    this.state.stompClient.send("/app/hello", {}, JSON.stringify({'name': 'Thibault'}));
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
