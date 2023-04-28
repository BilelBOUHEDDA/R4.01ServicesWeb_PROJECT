-- DROP TABLE IF EXISTS caste;
DROP TABLE IF EXISTS vend;
DROP TABLE IF EXISTS stand;
DROP TABLE IF EXISTS guestBook;
-- DROP TABLE IF EXISTS regarde;
DROP TABLE IF EXISTS rencontre;
DROP TABLE IF EXISTS joueur_equipe;
DROP TABLE IF EXISTS dedicace;
DROP TABLE IF EXISTS billet;
DROP TABLE IF EXISTS utilisateur;
DROP TABLE IF EXISTS jeu;
DROP TABLE IF EXISTS typeUtilisateur;
DROP TABLE IF EXISTS typeBillet;
-- DROP TABLE IF EXISTS stream;
DROP TABLE IF EXISTS equipe;
DROP TABLE IF EXISTS emplacement;

CREATE TABLE emplacement(
    idEmplacement SERIAL NOT NULL,
    nom VARCHAR(50),
    description TEXT,
    PRIMARY KEY(idEmplacement)
);

CREATE TABLE equipe(
    idEquipe SERIAL NOT NULL,
    nom VARCHAR(50),
    enLice BOOLEAN,
    PRIMARY KEY(idEquipe)
);

/* Stream
CREATE TABLE stream(
   idStream INT NOT NULL SERIAL,
   chaine VARCHAR(50),
   donation INT,
   PRIMARY KEY(idStream)
);
--*/

CREATE TABLE typeBillet(
    idType SERIAL NOT NULL,
    libelle VARCHAR(50),
    prix INT,
    PRIMARY KEY(idType)
);

CREATE TABLE typeUtilisateur(
    idType SERIAL NOT NULL,
    libelle VARCHAR(50),
    PRIMARY KEY(idType)
);

CREATE TABLE jeu(
   idJeu SERIAL NOT NULL,
   nom VARCHAR(50),
   PRIMARY KEY(idJeu)
);

CREATE TABLE utilisateur(
    idUtilisateur SERIAL NOT NULL,
    nom VARCHAR(50),
    email VARCHAR(50),
    codePostal INT,
    codeAuth TEXT,
    idType INT NOT NULL,
    PRIMARY KEY(idUtilisateur),
    FOREIGN KEY(idType) REFERENCES typeUtilisateur(idType)
);

CREATE TABLE stand(
   idStand SERIAL,
   idUtilisateur INT NOT NULL,
   idEmplacement INT NOT NULL,
   libelle VARCHAR,
   PRIMARY KEY(idStand),
   FOREIGN KEY(idUtilisateur) REFERENCES utilisateur(idUtilisateur),
   FOREIGN KEY(idEmplacement) REFERENCES emplacement(idEmplacement)
);

CREATE TABLE vend(
    idStock SERIAL,
    libelle VARCHAR(50),
    nbStock INT,
    idStand INT NOT NULL,
    prix DECIMAL(5,2),
    PRIMARY KEY(idStock),
    FOREIGN KEY(idStand) REFERENCES Stand(idStand) ON DELETE CASCADE
);

CREATE TABLE billet(
    idBillet SERIAL NOT NULL,
    idUtilisateur INT NOT NULL,
    idType INT NOT NULL,
    PRIMARY KEY(idBillet),
    FOREIGN KEY(idUtilisateur) REFERENCES utilisateur(idUtilisateur),
    FOREIGN KEY(idType) REFERENCES typeBillet(idType)
);

CREATE TABLE dedicace(
    idUtilisateur INT,
    idProvider INT,
    horaire DATE,
    PRIMARY KEY(idUtilisateur, idProvider, horaire),
    FOREIGN KEY(idUtilisateur) REFERENCES utilisateur(idUtilisateur),
    FOREIGN KEY(idProvider) REFERENCES utilisateur(idUtilisateur)
);

CREATE TABLE joueur_equipe(
    idEquipe INT,
    idJoueur INT,
    idJeu INT,
    pseudo VARCHAR,
    nationnalite VARCHAR,
    role VARCHAR,
    PRIMARY KEY(idEquipe, idJoueur, idJeu),
    FOREIGN KEY(idEquipe) REFERENCES equipe(idEquipe) ON DELETE CASCADE,
    FOREIGN KEY(idJoueur) REFERENCES utilisateur(idUtilisateur),
    FOREIGN KEY(idJeu) REFERENCES jeu(idJeu)
);

CREATE TABLE rencontre(
    idEmplacement INT,
    idEquipeA INT,
    idEquipeB INT,
    horaire DATE,
    PRIMARY KEY(idEmplacement, idEquipeA, idEquipeB, horaire),
    FOREIGN KEY(idEmplacement) REFERENCES Emplacement(idEmplacement),
    FOREIGN KEY(idEquipeA) REFERENCES equipe(idEquipe) ON DELETE CASCADE,
    FOREIGN KEY(idEquipeB) REFERENCES equipe(idEquipe) ON DELETE CASCADE
);

/* Stream
CREATE TABLE regarde(
    idUtilisateur INT,
    idStream INT,
    horaire DATE,
    PRIMARY KEY(idUtilisateur, idStream, horaire),
    FOREIGN KEY(idUtilisateur) REFERENCES utilisateur(idUtilisateur),
    FOREIGN KEY(idStream) REFERENCES stream(idStream)
);
--*/

CREATE TABLE guestBook(
    idUtilisateur INT,
    idProvider INT NOT NULL,
    horaire DATE,
    message TEXT,
    jaime INT,
    PRIMARY KEY(idUtilisateur, idProvider, horaire),
    FOREIGN KEY(idUtilisateur) REFERENCES utilisateur(idUtilisateur),
    FOREIGN KEY(idProvider) REFERENCES utilisateur(idUtilisateur) ON DELETE CASCADE
);

/* Stream
CREATE TABLE caste(
    idUtilisateur INT,
    idStream INT,
    horaire DATE,
    langue VARCHAR(50),
    PRIMARY KEY(idUtilisateur, idStream, horaire),
    FOREIGN KEY(idUtilisateur) REFERENCES utilisateur(idUtilisateur),
    FOREIGN KEY(idStream) REFERENCES stream(idStream)
);
--*/
