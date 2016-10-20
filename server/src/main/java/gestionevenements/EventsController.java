package gestionevenements;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import java.util.*;

@Controller
public class EventsController {

  private final List<Evenement> evenements = new LinkedList<>();

  public EventsController() {
      Evenement e1 = new Evenement("Asisterix", "Plailly", "Maëva", "07/02/2017", "10:00", "Plus on est de fous, moins on paie cher !", 8, 20, "ressources/images/profil.svg");
      evenements.add(e1);
      Evenement e2 = new Evenement("LASIer Game", "Rouen", "Enora", "07/02/2017", "15:00", "Venez transpirer avec nous !", 8, 20, "ressources/images/profil.svg");
      evenements.add(e2);
      Evenement e3 = new Evenement("Culture & Art", "Rouen", "Morgane", "20/11/2016", "9:00", " Visite du musée des Beaux Arts....", 5, 8, "ressources/images/profil.svg");
      evenements.add(e3);
      Evenement e4 = new Evenement("Color Me Rad", "Rouen", "Thibault", "25/12/2016", "8:00", " Inscription obligatoire !", 20, 100, "ressources/images/profil.svg");
      evenements.add(e4);
  }

  @MessageMapping("/evenements")
  @SendTo("/topic/listeEvenements")
    public List<Evenement> getAllEvents() {
        return evenements;
    }

    @MessageMapping("/evenementsDate")
    @SendTo("/topic/listeEvenementsDate")
    public List<Evenement> getEventsByDate(Message message) {
        List<Evenement> eventsFound = new LinkedList<>();

        for (Evenement e : evenements)
            if (e.getDate().equals(message.getMessage()))
                eventsFound.add(e);

        return eventsFound;
    }

    @MessageMapping("/evenementsLieu")
    @SendTo("/topic/listeEvenementsLieu")
    public List<Evenement> getEventsByLieu(Message message) {
        List<Evenement> eventsFound = new LinkedList<>();

        for (Evenement e : evenements)
            if (e.getLieu().equals(message.getMessage()))
                eventsFound.add(e);

        return eventsFound;
    }
}
