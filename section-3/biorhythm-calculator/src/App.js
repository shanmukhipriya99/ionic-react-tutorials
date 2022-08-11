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

function App() {
  // const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
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
        <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Physical: xx%</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
}

export default App;
