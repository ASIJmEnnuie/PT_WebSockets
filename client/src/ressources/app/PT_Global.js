import React from 'react';
import PT_EventList from './PT_EventList';
import PT_ControlBar from './PT_ControlBar';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

function zerosBeforeNumbers(n) {
  if (n < 10){
    return "0"+n;
  }
  else {
    return n;
  }
}

const PT_Global = React.createClass({
  componentDidMount: function() {
    this.setState(function(previousState, currentProps) {
      var stompClient = Stomp.over(new SockJS('http://localhost:8080/gs-guide-websocket'));
      var composant = this;

      stompClient.connect({}, function (frame) {
        stompClient.subscribe('/topic/listeEvenementsDate', function (getEventsByDate) {
          composant.setState({donnees:JSON.parse(getEventsByDate.body)});
        });

        stompClient.subscribe('/topic/listeEvenementsLieu', function (getEventsByLieu) {
          composant.setState({donnees:JSON.parse(getEventsByLieu.body)});
        });

        stompClient.subscribe('/topic/listeEvenements', function (getAllEvents) {
          console.log("____________HERE___________");
          composant.setState({donnees:JSON.parse(getAllEvents.body)});
        });
      });

      return {
        stompClient: stompClient,
        donnees: []
      };
    });
  },

  getInitialState: function() {
    return {
      stompClient: null,
      donnees: []
    }
  },

  dateController: function(e, dateRecept) {
    console.log("Recherche de la date suivante: " + dateRecept);
    var date = new Date(dateRecept);
    var day = zerosBeforeNumbers(date.getDate());
    var month = zerosBeforeNumbers(date.getMonth()+1);
    var year = date.getFullYear();
    var dateSend = day+"/"+month+"/"+year;

    this.state.stompClient.send("/app/evenementsDate", {}, JSON.stringify({'message': dateSend}));
  },

  placeController: function(e) {
    if (e.target.value.length <= 0) {
      this.razController();
    }
    else {
      this.state.stompClient.send("/app/evenementsLieu", {}, JSON.stringify({'message': e.target.value}));
    }
  },

  razController: function() {
    this.state.stompClient.send("/app/evenements", {}, "");
  },

  disconnect: function() {
    if (this.state.stompClient != null) {
      this.state.stompClient.disconnect();
    }
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
          events={this.state.donnees}
        />
      </div>
    );
  }
});

export default PT_Global;
