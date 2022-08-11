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
} from '@ionic/react';
import React, {useState} from 'react';

function App() {
  const [name, setName] = useState('');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position='floating'>Name:</IonLabel>
          <IonInput type='text' value={name} onIonChange={(event) => setName(event.detail.value)}/>
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>Date of Birth:</IonLabel>
          <IonDatetime displayFormat='MMM DD YYYY' />
        </IonItem>
        <p>Name: {name}</p>
      </IonContent>
    </IonApp>
  );
}

export default App;
