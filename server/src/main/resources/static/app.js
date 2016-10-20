var stompClient = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#list").show();
    }
    else {
        $("#list").hide();
    }
    $("#eventsList").html("");
}

function connect() {
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);

        stompClient.subscribe('/topic/listeEvenementsDate', function (getEventsByDate) {
            showEvents(JSON.parse(getEventsByDate.body));
        });
        stompClient.subscribe('/topic/listeEvenementsLieu', function (getEventsByLieu) {
            showEvents(JSON.parse(getEventsByLieu.body));
        });
        stompClient.subscribe('/topic/listeEvenements', function (getAllEvents) {
            showEvents(JSON.parse(getAllEvents.body));
        });
    });
}

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendDate() {
    stompClient.send("/app/evenementsDate", {}, JSON.stringify({'message': $("#date").val()}));
}

function sendLieu() {
    stompClient.send("/app/evenementsLieu", {}, JSON.stringify({'message': $("#lieu").val()}));
}

function sendAll() {
    stompClient.send("/app/evenements", {}, "");
}

function showEvents(events) {
    $("#eventsList").html("");
    for (attribut in events) {
      $("#eventsList").append("<tr>");
      $("#eventsList").append("<td>" + events[attribut].nom + "</td>");
      $("#eventsList").append("<td>" + events[attribut].lieu + "</td>");
      $("#eventsList").append("<td>" + events[attribut].organisateur + "</td>");
      $("#eventsList").append("<td>" + events[attribut].date + "</td>");
      $("#eventsList").append("<td>" + events[attribut].heure + "</td>");
      $("#eventsList").append("<td>" + events[attribut].description + "</td>");
      $("#eventsList").append("<td>" + events[attribut].nb_inscriptions + "</td>");
      $("#eventsList").append("<td>" + events[attribut].nb_places + "</td>");
      $("#eventsList").append("<td>" + events[attribut].image + "</td>");
      $("#eventsList").append("/<tr>");
    }
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#sendDate" ).click(function() { sendDate(); });
    $( "#sendLieu" ).click(function() { sendLieu(); });
    $( "#sendAll" ).click(function() { sendAll(); });
});
