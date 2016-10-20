package gestionevenements;


public class Evenement {

    private String nom;
    private String lieu;
    private String organisateur;
    private String date;
    private String heure;
    private String description;
    private int nb_inscriptions;
    private int nb_places;
    private String image;

    public Evenement(String nom, String lieu, String orga, String date, String heure,
                     String description, int nb_inscriptions, int nb_places, String image) {
        this.nom = nom;
        this.lieu = lieu;
        this.organisateur = orga;
        this.date = date;
        this.heure = heure;
        this.description = description;
        this.nb_inscriptions = nb_inscriptions;
        this.nb_places = nb_places;
        this.image = image;
    }

    public String getNom() {
        return nom;
    }

    public String getLieu() {
        return lieu;
    }

    public String getOrganisateur() {
        return organisateur;
    }

    public String getDate() {
        return date;
    }

    public String getHeure() {
        return heure;
    }

    public String getDescription() {
        return description;
    }

    public int getNb_inscriptions() {
        return nb_inscriptions;
    }

    public int getNb_places() {
        return nb_places;
    }

    public String getImage() {
        return image;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }

    public void setOrganisateur(String organisateur) {
        this.organisateur = organisateur;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setHeure(String heure) {
        this.heure = heure;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setNb_inscriptions(int nb_inscriptions) {
        this.nb_inscriptions = nb_inscriptions;
    }

    public void setNb_places(int nb_places) {
        this.nb_places = nb_places;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
