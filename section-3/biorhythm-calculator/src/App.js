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

function App() {
  // const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const targetDate = new Date().toISOString();
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
          <IonLabel position="floating">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="MMM DD YYYY"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        {/* <p>Name: {name}</p>
        <p>Date of Birth: {birthDate}</p> */}
      </IonContent>
    </IonApp>
  );
}

export default App;
