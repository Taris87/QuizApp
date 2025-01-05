import { Quiz } from "../../types/quiz";

export const databasesQuiz: Quiz = {
  id: "databases",
  title: "Datenbanken",
  questions: [
    {
      id: "db1",
      text: "Was ist eine Datenbank?",
      options: [
        "Ein Netzwerkprotokoll",
        "Ein System zur Verwaltung von Daten",
        "Ein Programm zum Schreiben von Code",
        "Eine Verschlüsselungstechnik",
      ],
      correctAnswer: 1,
    },
    {
      id: "db2",
      text: "Wofür steht SQL?",
      options: [
        "Structured Query Language",
        "Standard Query List",
        "Systematic Query Logic",
        "Simple Query Layout",
      ],
      correctAnswer: 0,
    },
    {
      id: "db3",
      text: "Was ist ein Primärschlüssel?",
      options: [
        "Eine eindeutige Spalte in einer Tabelle",
        "Ein Schlüssel zur Datenverschlüsselung",
        "Ein Benutzerzugriffscode",
        "Eine Tabelle mit Indizes",
      ],
      correctAnswer: 0,
    },
    {
      id: "db4",
      text: "Was ist eine Relation?",
      options: [
        "Eine Tabelle in einer Datenbank",
        "Eine Verbindung zwischen Servern",
        "Ein SQL-Befehl",
        "Ein Datentyp",
      ],
      correctAnswer: 0,
    },
    {
      id: "db5",
      text: "Was macht der SQL-Befehl SELECT?",
      options: [
        "Löscht Daten",
        "Ändert Tabellenstruktur",
        "Liest Daten aus",
        "Erstellt eine neue Tabelle",
      ],
      correctAnswer: 2,
    },
    {
      id: "db6",
      text: "Was macht der SQL-Befehl DELETE?",
      options: [
        "Löscht Tabellen",
        "Löscht Datensätze",
        "Erstellt eine Tabelle",
        "Fügt Daten ein",
      ],
      correctAnswer: 1,
    },
    {
      id: "db7",
      text: "Wofür wird ein Index verwendet?",
      options: [
        "Daten schneller zu suchen",
        "Daten zu verschlüsseln",
        "Daten zu löschen",
        "Tabellen zu erstellen",
      ],
      correctAnswer: 0,
    },
    {
      id: "db8",
      text: "Wofür steht ACID?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Access, Control, Integrity, Data",
        "Authorization, Communication, Isolation, Data",
        "Atomicity, Connection, Index, Duration",
      ],
      correctAnswer: 0,
    },
    {
      id: "db9",
      text: "Was ist ein Fremdschlüssel?",
      options: [
        "Ein Schlüssel für Datenverschlüsselung",
        "Ein Bezug auf einen Primärschlüssel einer anderen Tabelle",
        "Eine eindeutige Spalte",
        "Ein SQL-Befehl",
      ],
      correctAnswer: 1,
    },
    {
      id: "db10",
      text: "Was ist Normalisierung?",
      options: [
        "Das Optimieren von Tabellen",
        "Das Löschen redundanter Daten",
        "Das Erstellen von Indexen",
        "Das Festlegen von Benutzerrechten",
      ],
      correctAnswer: 1,
    },
    {
      id: "db11",
      text: "Wofür wird JOIN in SQL verwendet?",
      options: [
        "Tabellen zu verbinden",
        "Daten zu löschen",
        "Tabellen zu erstellen",
        "Indexe zu erstellen",
      ],
      correctAnswer: 0,
    },
    {
      id: "db12",
      text: "Was ist der Unterschied zwischen INNER JOIN und LEFT JOIN?",
      options: [
        "INNER zeigt alle Daten, LEFT nur die ersten Zeilen",
        "LEFT zeigt alle Zeilen der linken Tabelle, INNER nur gemeinsame",
        "INNER zeigt alle Zeilen, LEFT ignoriert NULL-Werte",
        "Es gibt keinen Unterschied",
      ],
      correctAnswer: 1,
    },
    {
      id: "db13",
      text: "Wofür wird der Datentyp VARCHAR verwendet?",
      options: [
        "Für Zahlen",
        "Für Datumsangaben",
        "Für Zeichenketten variabler Länge",
        "Für boolesche Werte",
      ],
      correctAnswer: 2,
    },
    {
      id: "db14",
      text: "Was ist ein Trigger in einer Datenbank?",
      options: [
        "Ein Ereignis, das eine Aktion auslöst",
        "Ein SQL-Befehl zur Optimierung",
        "Ein Benutzerrechte-Manager",
        "Eine Art von Index",
      ],
      correctAnswer: 0,
    },
    {
      id: "db15",
      text: "Was ist eine Transaktion?",
      options: [
        "Ein einzelner SQL-Befehl",
        "Eine Gruppe von Befehlen, die zusammen ausgeführt werden",
        "Ein Benutzerzugriff",
        "Eine Tabellenstruktur",
      ],
      correctAnswer: 1,
    },
    {
      id: "db16",
      text: "Was ist eine NoSQL-Datenbank?",
      options: [
        "Eine relationale Datenbank",
        "Eine nicht-relationale Datenbank",
        "Eine Datenbank ohne Indexe",
        "Eine verschlüsselte Datenbank",
      ],
      correctAnswer: 1,
    },
    {
      id: "db17",
      text: "Was macht der SQL-Befehl INSERT?",
      options: [
        "Daten einfügen",
        "Daten löschen",
        "Daten lesen",
        "Tabellen löschen",
      ],
      correctAnswer: 0,
    },
    {
      id: "db18",
      text: "Was ist der Unterschied zwischen DROP und TRUNCATE?",
      options: [
        "DROP löscht die Tabelle, TRUNCATE nur Daten",
        "TRUNCATE löscht die Tabelle, DROP nur Daten",
        "Beide machen das Gleiche",
        "DROP ist schneller als TRUNCATE",
      ],
      correctAnswer: 0,
    },
    {
      id: "db19",
      text: "Wofür wird MongoDB verwendet?",
      options: [
        "Für relationale Datenbanken",
        "Für NoSQL-Datenbanken",
        "Für SQL-Abfragen",
        "Für Benutzerrechte",
      ],
      correctAnswer: 1,
    },
    {
      id: "db20",
      text: "Was macht der SQL-Befehl UPDATE?",
      options: [
        "Daten aktualisieren",
        "Daten löschen",
        "Tabellenstruktur ändern",
        "Daten einfügen",
      ],
      correctAnswer: 0,
    },
  ],
};
