INSERT INTO emplacement (nom, description) VALUES 
    ('H1', 'Hall 1'), 
    ('H2', 'Hall 2'), 
    ('H3', 'Hall 3'), 
    ('H4', 'Hall 4'), 
    ('H5', 'Hall 5');
    
INSERT INTO equipe (nom, enLice) VALUES 
    ('VitalityRL', true),
    ('SolaryRL', true),
    ('teamRL1', true),
    ('teamRL2', true),
    ('STK1', true),
    ('G2', true),
    ('Vitality.Bee', true),
    ('KCrop', true),
    ('Mandatory', true),
    ('Liquide', true),
    ('Paris Saint-Germain Esports', true),
    ('FC SILMY', true),
    ('Monaco Esport', true);

INSERT INTO typeBillet (libelle, prix) VALUES 
    ('journée', 65.50),
    ('weekend', 185.00),
    ('etudiant', 60.00);

INSERT INTO typeUtilisateur (libelle) VALUES ('user'), ('provider'), ('gamer'), ('admin');
INSERT INTO jeu (nom) VALUES ('league of legend'), ('fifa23'), ('rocket league'), ('csgo'), ('dota2'), ('valorant');
INSERT INTO utilisateur (nom, email, codePostal, codeAuth, idType) VALUES 
    ('Miriame', 'miriame@mail.com', 95000, 'ouiouibaguette', 1),
    ('Jean', 'jean@mail.com', 90800, '1234',1),
    ('Kayn', 'kayn@mail.com', 90000, '<3lesloly', 1),
    ('Bruno', 'bruno@mail.com', 93000, 'xtrem', 1),
    ('Babouche','babouche@sauvette.com', 87500, 'vend',2),
    ('Ronaldinio', 'csc@fiften.com', 90000, 'suuu', 3), --5
    ('Maguire', 'csc@ninety.com', 90000, 'finito', 3),
    ('Scream', 'machine@headshot.com', 90000, 'oui', 3),
    ('Numpy', 'math@csgo.com', 90000, 'oui', 3),
    ('Jerome', 'hill@math.com', 90000, 'laflem', 3),
    ('lol0', 'lol0@mail.com', 90000, 'oui', 3),          --10
    ('lol1', 'lol1@mail.com', 90000, 'oui', 3),
    ('lol2', 'lol2@mail.com', 90000, 'oui', 3),
    ('lol3', 'lol3@mail.com', 90000, 'oui', 3),
    ('lol4', 'lol4@mail.com', 90000, 'oui', 3),
    ('lol5', 'lol5@mail.com', 90000, 'oui', 3),
    ('lol6', 'lol6@mail.com', 90000, 'oui', 3),
    ('lol7', 'lol7@mail.com', 90000, 'oui', 3),
    ('lol8', 'lol8@mail.com', 90000, 'oui', 3),
    ('lol9', 'lol9@mail.com', 90000, 'oui', 3),
    ('rl0', 'rl0@mail.com', 90000, 'oui', 3),            --15
    ('rl1', 'rl1@mail.com', 90000, 'oui', 3),
    ('rl2', 'rl2@mail.com', 90000, 'oui', 3),
    ('rl3', 'rl3@mail.com', 90000, 'oui', 3),
    ('rl4', 'rl4@mail.com', 90000, 'oui', 3),
    ('rl5', 'rl5@mail.com', 90000, 'oui', 3),
    ('rl6', 'rl6@mail.com', 90000, 'oui', 3),
    ('rl7', 'rl7@mail.com', 90000, 'oui', 3),
    ('valo0', 'valo0@mail.com', 90000, 'oui', 3),            --23
    ('valo1', 'valo1@mail.com', 90000, 'oui', 3),
    ('valo2', 'valo2@mail.com', 90000, 'oui', 3),
    ('valo3', 'valo3@mail.com', 90000, 'oui', 3),
    ('valo4', 'valo4@mail.com', 90000, 'oui', 3),
    ('admin', 'admin@mail.com', 754000,'admin', 4);

INSERT INTO billet (idUtilisateur, idType) VALUES 
    (1, 2),
    (2, 3),
    (2, 3),
    (3, 1),
    (3, 2),
    (4, 1);

INSERT INTO dedicace (idUtilisateur, idProvider, horaire) VALUES 
    (3, 6, '2022-12-19'),
    (4, 6, '2022-12-19'),
    (5, 6, '2022-12-19'),
    (3, 8, '2022-12-19'),
    (4, 8, '2022-12-19'),
    (5, 9, '2022-12-19'),
    (3, 12, '2022-12-20'),
    (4, 13, '2022-12-20'),
    (5, 13, '2022-12-19'),
    (3, 14, '2022-12-20'),
    (4, 14, '2022-12-20'),
    (5, 10, '2022-12-21'),
    (3, 10, '2022-12-21'),
    (4, 10, '2022-12-21'),
    (5, 11, '2022-12-21');

INSERT INTO joueur_equipe (idEquipe, idJoueur, idJeu, pseudo, nationnalite, role) VALUES 
    (5, 10, 1, NULL, 'fr', 'supp'),
    (5, 11, 1, NULL, 'fr', 'adc'),
    (5, 12, 1, NULL, 'fr', 'jgl'),
    (5, 13, 1, NULL, 'fr', 'mid'),
    (5, 14, 1, NULL, 'fr', 'top'),
    (6, 15, 1, NULL, 'fr', 'supp'),
    (6, 16, 1, NULL, 'fr', 'adc'),
    (6, 17, 1, NULL, 'fr', 'jgl'),
    (6, 18, 1, NULL, 'fr', 'mid'),
    (6, 19, 1, NULL, 'fr', 'top'),
    (7, 5, 1, NULL, 'fr', 'supp'),
    (7, 6, 1, NULL, 'fr', 'adc'),
    (7, 7, 1, NULL, 'fr', 'jgl'),
    (7, 8, 1, NULL, 'fr', 'mid'),
    (7, 9, 1, NULL, 'fr', 'top'),
    (8, 15, 1, NULL, 'fr', 'supp'),
    (8, 16, 1, NULL, 'fr', 'adc'),
    (8, 17, 1, NULL, 'fr', 'jgl'),
    (8, 18, 1, NULL, 'fr', 'mid'),
    (8, 19, 1, NULL, 'fr', 'top'),
    (12, 6, 2, 'CR6', 'pr', NULL),
    (13, 7, 2, 'Mag', NULL, NULL),
    (1, 15, 3, NULL, 'fr', NULL),
    (1, 16, 3, NULL, 'fr', NULL),
    (2, 17, 3, NULL, 'fr', NULL),
    (2, 18, 3, NULL, 'fr', NULL),
    (3, 19, 3, NULL, 'fr', NULL),
    (3, 20, 3, NULL, 'fr', NULL),
    (4, 21, 3, NULL, 'fr', NULL),
    (4, 22, 3, NULL, 'fr', NULL),
    (9, 5, 6, NULL, 'fr', NULL),
    (9, 6, 6, NULL, 'fr', NULL),
    (9, 7, 6, NULL, 'fr', NULL),
    (9, 8, 6, NULL, 'fr', NULL),
    (9, 9, 6, NULL, 'fr', NULL),
    (10, 23, 6, NULL, 'fr', NULL),
    (10, 24, 6, NULL, 'fr', NULL),
    (10, 25, 6, NULL, 'fr', NULL),
    (10, 26, 6, NULL, 'fr', NULL),
    (10, 27, 6, NULL, 'fr', NULL);

INSERT INTO rencontre (idEmplacement, idEquipeA, idEquipeB, horaire) VALUES 
    (1, 1, 2, '2022-12-12 10:00:00'),
    (2, 3, 4, '2022-12-19 10:00:00'),
    (1, 1, 4, '2022-12-20 10:00:00'),
    (2, 3, 2, '2022-12-20 10:00:00'),
    (1, 1, 3, '2022-12-21 10:00:00'),
    (2, 4, 2, '2022-12-21 10:00:00'),
    (3, 5, 6, '2022-12-19 16:00:00'),
    (4, 7, 8, '2022-12-19 16:00:00'),
    (3, 5, 8, '2022-12-20 16:00:00'),
    (4, 7, 6, '2022-12-20 16:00:00'),
    (3, 5, 7, '2022-12-19 13:00:00'),
    (4, 6, 8, '2022-12-19 13:00:00');

INSERT INTO guestBook (idUtilisateur, idProvider, horaire, message, jaime) VALUES 
    (1, 15, '2022-12-19 16:30:24', 'super match ^^', 8),
    (2, 15, '2022-12-19 16:36:47', 'cool', 3);
    
INSERT INTO stand (idUtilisateur, idEmplacement, libelle) VALUES 
    (5, 5, 'Pizzahut'),
    (5, 5, 'goodies'),
    (5, 5, 'shopdefou');

INSERT INTO vend (libelle, nbStock, idStand, prix) VALUES 
    ('Statue Kayn', 100, 3, 45.50),
    ('Armure pour rush', 2, 3, 150.00),
    ('Sac', 50, 3, 250.00),
    ('Dents à Gazo', 28, 3, 180.00),
    ('Souris gaming', 1, 3, 0.10),
    ('Animal domestique', 1, 3, 999.99),
    ('4 fromage', 550, 1, 10.20),
    ('calzone', 350, 1, 11.20),
    ('canibale', 750, 1, 12.20),
    ('pull', 750, 2, 100.00);


/*
INSERT INTO Stream (chaine, donation) VALUES ($1, $2);
INSERT INTO Regarde (idUtilisateur, idStream, horaire) VALUES ($1, $2, $3);
INSERT INTO caste (Id_Utilisateur, Id_Stream, Id_Date, langue) VALUES ($1, $2, $3, $4);
*/