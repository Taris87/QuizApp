import { Quiz } from "../../types/quiz";

export const networkingQuiz: Quiz = {
  id: "networking",
  title: "Netzwerktechnik",
  questions: [
    {
      id: "net1",
      text: "Welche Aufgabe erfüllt das OSI-Modell?",
      options: [
        "Standards für Verkabelung",
        "Referenzmodell für Protokolle",
        "Betriebssystem für Geräte",
        "Maximale Datenrate",
      ],
      correctAnswer: 1,
    },
    {
      id: "net2",
      text: "Welche Protokolle gehören zur Transportschicht?",
      options: ["HTTP, FTP", "IP, ICMP", "TCP, UDP", "Ethernet, WLAN"],
      correctAnswer: 2,
    },
    {
      id: "net3",
      text: "Unterschied zwischen Switch und Hub?",
      options: [
        "Switch: Schicht 2, Hub: Schicht 1",
        "Hub unterstützt VLANs",
        "Hub sendet an alle, Switch gezielt",
        "Switch nur drahtlos",
      ],
      correctAnswer: 2,
    },
    {
      id: "net4",
      text: "Funktion von ARP?",
      options: [
        "IP zu MAC",
        "Zuverlässiger Datentransfer",
        "Erreichbarkeit prüfen",
        "IP-Adressen verwalten",
      ],
      correctAnswer: 0,
    },
    {
      id: "net5",
      text: "Was beschreibt ein Subnetz?",
      options: [
        "Teilnetzwerk",
        "Physische Verbindung",
        "Bereich von MACs",
        "Sicherheits-VLAN",
      ],
      correctAnswer: 0,
    },
    {
      id: "net6",
      text: "Was macht eine Firewall?",
      options: [
        "Daten verschlüsseln",
        "Netzwerkzugriffe kontrollieren",
        "IP-Adressen vergeben",
        "Netzwerkgeräte überwachen",
      ],
      correctAnswer: 1,
    },
    {
      id: "net7",
      text: "Welche Adresse ist eine private IPv4-Adresse?",
      options: ["8.8.8.8", "192.168.1.1", "172.10.10.10", "255.255.255.255"],
      correctAnswer: 1,
    },
    {
      id: "net8",
      text: "Was ist die Aufgabe von DNS?",
      options: [
        "MAC-Adressen verwalten",
        "Namen in IP-Adressen auflösen",
        "Datenpakete routen",
        "Verbindungen sichern",
      ],
      correctAnswer: 1,
    },
    {
      id: "net9",
      text: "Was ist ein VLAN?",
      options: [
        "Virtuelles Netzwerk",
        "Sicherheitsprotokoll",
        "Switch-Konfiguration",
        "Routing-Tabelle",
      ],
      correctAnswer: 0,
    },
    {
      id: "net10",
      text: "Wofür steht DHCP?",
      options: [
        "Dynamic Host Configuration Protocol",
        "Data Handling Control Process",
        "Device Hardware Communication Protocol",
        "Dynamic Hardware Configuration Protocol",
      ],
      correctAnswer: 0,
    },
    {
      id: "net11",
      text: "Welche Adresse ist eine IPv6-Adresse?",
      options: ["192.168.0.1", "255.255.255.0", "fe80::1", "10.0.0.1"],
      correctAnswer: 2,
    },
    {
      id: "net12",
      text: "Wofür wird NAT verwendet?",
      options: [
        "Verschlüsselung",
        "IP-Adressen umsetzen",
        "MAC-Adressen verteilen",
        "Routing beschleunigen",
      ],
      correctAnswer: 1,
    },
    {
      id: "net13",
      text: "Was ist der Unterschied zwischen TCP und UDP?",
      options: [
        "TCP ist verbindungslos, UDP verbindungsorientiert",
        "TCP bietet Fehlerkontrolle, UDP nicht",
        "UDP ist langsamer als TCP",
        "TCP arbeitet auf Schicht 1, UDP auf Schicht 2",
      ],
      correctAnswer: 1,
    },
    {
      id: "net14",
      text: 'Wozu dient der Befehl "ping"?',
      options: [
        "Netzwerkeinstellungen anzeigen",
        "Verbindung prüfen",
        "Netzwerkgerät konfigurieren",
        "Daten verschlüsseln",
      ],
      correctAnswer: 1,
    },
    {
      id: "net15",
      text: "Wofür wird das Protokoll FTP genutzt?",
      options: [
        "E-Mails senden",
        "Dateien übertragen",
        "Webseiten hosten",
        "Daten verschlüsseln",
      ],
      correctAnswer: 1,
    },
    {
      id: "net16",
      text: "Was ist ein Standardport für HTTP?",
      options: ["21", "22", "80", "443"],
      correctAnswer: 2,
    },
    {
      id: "net17",
      text: "Wozu dient eine MAC-Adresse?",
      options: [
        "Geräte eindeutig identifizieren",
        "Daten verschlüsseln",
        "IP-Adressen vergeben",
        "Netzwerke prüfen",
      ],
      correctAnswer: 0,
    },
    {
      id: "net18",
      text: "Was ist eine DMZ in Netzwerken?",
      options: [
        "Virtueller Server",
        "Sicherheitszone",
        "Privates Netzwerk",
        "Firewall-Einstellung",
      ],
      correctAnswer: 1,
    },
    {
      id: "net19",
      text: "Was macht ein Router?",
      options: [
        "Pakete weiterleiten",
        "Daten verschlüsseln",
        "Verbindungen prüfen",
        "Netzwerke überwachen",
      ],
      correctAnswer: 0,
    },
    {
      id: "net20",
      text: "Was ist ein Proxy-Server?",
      options: [
        "Zwischenstation für Anfragen",
        "Gerät zur Datenverschlüsselung",
        "Switch-Einstellung",
        "Routing-Tabelle",
      ],
      correctAnswer: 0,
    },
  ],
};
