import React from "react";

interface ShowInformationProps {
  onClose: () => void; 
}

const ShowInformation: React.FC<ShowInformationProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 overflow-auto">
      <div className="max-w-lg w-full mx-auto p-6 bg-white rounded-xl shadow-lg relative max-h-[90%] overflow-y-auto"> 
        <button
          onClick={onClose} 
          className="absolute text-2xl text-red-600 hover:text-red-800 top-2 right-2"
        >
          &times; {/* This is the close "X" */}
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Willkommen bei Steven's Quizzy! <br />
        </h2>
        <p className="text-lg text-center mb-4">
          Informationen zur Datenspeicherung in dieser App
        </p>
        <p className="text-lg text-center mb-4">
          Diese App speichert alle Ihre Daten ausschließlich lokal auf Ihrem Gerät im sogenannten <strong>LocalStorage</strong>. Das bedeutet:
        </p>
        <p className="text-lg text-center mb-4">
          <strong>Keine Daten werden ins Internet hochgeladen:</strong> Alles, was Sie in der App eingeben oder speichern, bleibt auf Ihrem Gerät. Es gibt keine Übertragung zu einem Server oder in eine Cloud.
        </p>
        <p className="text-lg text-center mb-4">
          <strong>Was ist LocalStorage?</strong>
        </p>
        <p className="text-lg text-center mb-4">
          LocalStorage ist ein Speicherbereich in Ihrem Browser. Dort können kleine Datenmengen direkt auf Ihrem Gerät gespeichert werden. Die Daten bleiben erhalten, auch wenn Sie die App schließen oder Ihren Computer/Browser neu starten.
        </p>
        <p className="text-lg text-center mb-4">
          <strong>Wichtige Hinweise:</strong>
        </p>
        <p className="text-lg text-center mb-4">
          Nur Sie haben Zugriff: Solange niemand Ihr Gerät oder Ihren Browser nutzt, bleiben Ihre Daten sicher.
        </p>
        <p className="text-lg text-center mb-4">
          <strong>Kein Backup:</strong> <br /> Da die Daten nur lokal gespeichert werden, gehen sie verloren, wenn Sie den Speicher Ihres Browsers löschen oder die App auf einem anderen Gerät nutzen. <br /> <span className="font-bold text-red-600">Ein Update mit Einbindung einer Authentifizierung und Datenbank ist in Planung.</span>
        </p>
        <p className="text-lg text-center mb-4 font-bold">
          Viel Spaß beim Quizzen! 
        </p>
        <p className="text-4xl text-center mb-4">😊</p>
        <button
        onClick={onClose}
        className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        OK
      </button>
      </div>
    </div>
  );
};

export default ShowInformation;