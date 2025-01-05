import { Quiz } from "../../types/quiz";

export const programmingQuiz: Quiz = {
  id: "programming",
  title: "Prozeduraler und OOP",
  questions: [
    {
      id: "prog1",
      text: "Was ist ein Array?",
      options: [
        "Eine Datenstruktur zur Speicherung mehrerer Werte",
        "Ein Programmierparadigma",
        "Eine Schleifenart",
        "Ein Datentyp für Text",
      ],
      correctAnswer: 0,
    },
    {
      id: "prog2",
      text: "Was ist der Unterschied zwischen let und const in JavaScript?",
      options: [
        "Es gibt keinen Unterschied",
        "let ist block-scoped, const ist function-scoped",
        "const-Variablen können nicht neu zugewiesen werden, let-Variablen schon",
        "const ist nur für Zahlen, let für alle Datentypen",
      ],
      correctAnswer: 2,
    },
    {
      id: "prog3",
      text: "Was beschreibt das Konzept der Vererbung?",
      options: [
        "Das Kopieren von Objekten",
        "Das Ableiten von Klassen aus anderen Klassen",
        "Das Kombinieren mehrerer Klassen",
        "Das Erstellen von Methoden",
      ],
      correctAnswer: 1,
    },
    {
      id: "prog4",
      text: "Was ist eine Funktion?",
      options: [
        "Eine Art von Schleife",
        "Ein Codeblock, der wiederverwendet werden kann",
        "Eine Klasse in JavaScript",
        "Ein Datentyp für Text",
      ],
      correctAnswer: 1,
    },
    {
      id: "prog5",
      text: "Was ist der Unterschied zwischen Klasse und Objekt?",
      options: [
        "Es gibt keinen Unterschied",
        "Klasse ist ein Blueprint, Objekt ist eine Instanz",
        "Objekte enthalten Klassen",
        "Klassen sind Teil von Arrays",
      ],
      correctAnswer: 1,
    },
    {
      id: "prog6",
      text: "Was ist Polymorphismus?",
      options: [
        "Die Fähigkeit von Objekten, verschiedene Formen anzunehmen",
        "Die Verwendung mehrerer Klassen in einer Funktion",
        "Das Kombinieren von Datenstrukturen",
        "Ein Algorithmus zur Datensortierung",
      ],
      correctAnswer: 0,
    },
    {
      id: "prog7",
      text: "Was ist ein Konstruktor in einer Klasse?",
      options: [
        "Eine Methode zur Erzeugung eines Objekts",
        "Eine Methode zur Löschung eines Objekts",
        "Ein spezieller Datentyp",
        "Eine Schleifenart",
      ],
      correctAnswer: 0,
    },
    {
      id: "prog8",
      text: "Was ist der Unterschied zwischen prozeduraler und objektorientierter Programmierung?",
      options: [
        "Prozedural nutzt Objekte, OO nutzt Funktionen",
        "OO nutzt Objekte, prozedural arbeitet ohne sie",
        "Es gibt keinen Unterschied",
        "Prozedural ist nur für kleine Projekte geeignet",
      ],
      correctAnswer: 1,
    },
    {
      id: "prog9",
      text: "Was ist Kapselung?",
      options: [
        "Das Verbergen von Implementierungsdetails",
        "Das Kombinieren mehrerer Klassen",
        "Das Erstellen von Arrays",
        "Das Vermeiden von Polymorphismus",
      ],
      correctAnswer: 0,
    },
    {
      id: "prog10",
      text: "Was ist eine Methode in der objektorientierten Programmierung?",
      options: [
        "Ein Objekt innerhalb einer Klasse",
        "Eine Funktion, die zu einer Klasse gehört",
        "Eine Art von Schleife",
        "Ein spezieller Datentyp",
      ],
      correctAnswer: 1,
    },
    {
      id: "prog11",
      text: 'Wofür steht "this" in JavaScript?',
      options: [
        "Eine Referenz auf das aktuelle Objekt",
        "Eine Referenz auf eine andere Funktion",
        "Eine spezielle Variable für Arrays",
        "Eine Methode zur Erstellung von Klassen",
      ],
      correctAnswer: 0,
    },
    {
      id: "prog12",
      text: "Was ist eine abstrakte Klasse?",
      options: [
        "Eine Klasse, die nicht instanziiert werden kann",
        "Eine Klasse ohne Konstruktor",
        "Eine Klasse ohne Methoden",
        "Eine Klasse mit nur einer Methode",
      ],
      correctAnswer: 0,
    },
    {
      id: "prog13",
      text: 'Was macht der "extends"-Schlüsselwort in Java?',
      options: [
        "Es beendet eine Klasse",
        "Es erstellt ein Objekt",
        "Es ermöglicht Vererbung",
        "Es definiert Polymorphismus",
      ],
      correctAnswer: 2,
    },
    {
      id: "prog14",
      text: "Was ist ein Interface?",
      options: [
        "Eine Klasse mit vorgegebenen Methoden",
        "Eine Klasse ohne Konstruktor",
        "Eine Definition von Methoden, ohne deren Implementierung",
        "Ein spezieller Datentyp für Strings",
      ],
      correctAnswer: 2,
    },
    {
      id: "prog15",
      text: "Was beschreibt das Single Responsibility Principle?",
      options: [
        "Eine Klasse sollte nur eine Aufgabe haben",
        "Eine Funktion sollte nur einmal aufgerufen werden",
        "Ein Objekt kann nur eine Methode haben",
        "Eine Klasse kann nur eine Instanz haben",
      ],
      correctAnswer: 0,
    },
    {
      id: "prog16",
      text: "Was ist Overloading?",
      options: [
        "Das Überschreiben einer Methode in der abgeleiteten Klasse",
        "Das Definieren mehrerer Methoden mit demselben Namen, aber unterschiedlichen Parametern",
        "Das Verwenden von zu vielen Objekten",
        "Das Kombinieren von Arrays",
      ],
      correctAnswer: 1,
    },
    {
      id: "prog17",
      text: "Was ist eine statische Methode?",
      options: [
        "Eine Methode, die ohne Objektaufruf verwendet werden kann",
        "Eine Methode, die nur einmal verwendet werden kann",
        "Eine Methode, die automatisch Objekte erstellt",
        "Eine Methode zur Datenverschlüsselung",
      ],
      correctAnswer: 0,
    },
    {
      id: "prog18",
      text: "Was ist ein Stack in der prozeduralen Programmierung?",
      options: [
        "Ein FIFO-Datentyp",
        "Ein LIFO-Datentyp",
        "Eine Datenbankstruktur",
        "Ein Algorithmus",
      ],
      correctAnswer: 1,
    },
    {
      id: "prog19",
      text: 'Was macht der "super"-Schlüsselwort in Java?',
      options: [
        "Es erstellt ein neues Objekt",
        "Es ruft den Konstruktor der Basisklasse auf",
        "Es löscht Objekte",
        "Es verbindet mehrere Klassen",
      ],
      correctAnswer: 1,
    },
    {
      id: "prog20",
      text: 'Was ist der Unterschied zwischen "public" und "private"?',
      options: [
        "public macht eine Methode oder Variable sichtbar, private nicht",
        "private kann nur in Arrays verwendet werden",
        "public wird nur in Java verwendet",
        "private wird nur für Funktionen verwendet",
      ],
      correctAnswer: 0,
    },
  ],
};
