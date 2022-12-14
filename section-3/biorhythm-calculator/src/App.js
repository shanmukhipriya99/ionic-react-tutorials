import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from "@ionic/react";
import React, { useState } from "react";
import BiorhythmCard from "./components/BiorhythmCard";
import { useLocalStorage } from "./hooks";

function App() {
  // const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useLocalStorage("birthDate", "");
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* <IonItem>
          <IonLabel position="floating">Name:</IonLabel>
          <IonInput
            type="text"
            value={name}
            onIonChange={(event) => setName(event.detail.value)}
          />
        </IonItem> */}
        {birthDate && (
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        )}
        <IonItem>
          <IonLabel position="fixed">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="MMM DD YYYY"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Target Date:</IonLabel>
          <IonDatetime
            displayFormat="MMM DD YYYY"
            value={targetDate}
            onIonChange={(event) => setTargetDate(event.detail.value)}
          />
        </IonItem>
        {/* <p>Name: {name}</p>
        <p>Date of Birth: {birthDate}</p> */}
      </IonContent>
    </IonApp>
  );
}

export default App;
