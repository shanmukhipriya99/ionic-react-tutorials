import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import { play as playIcon } from "ionicons/icons"; //setting alias using "as"
import React, { useState } from "react";

function App() {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };
  return (
    // <div>
    //   <header>
    //     <h1>My App</h1>
    //   </header>
    //   <main>
    //     <p>Add some content here…</p>
    //     <IonButton onClick={handleClick}>
    //       <IonIcon icon={playIcon} slot="start" />{" "}
    //       {/*other values for slot: start, end, icon-only */}
    //       Click here!
    //     </IonButton>
    //     <IonToast isOpen={showToast} message="Hello World!" />
    //   </main>
    // </div>
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonButton onClick={handleClick}>
          <IonIcon icon={playIcon} slot="start" />{" "}
          {/*other values for slot: start, end, icon-only */}
          Click here!
        </IonButton>
        <IonToast isOpen={showToast} message="Hello World!" />
      </IonContent>
    </IonApp>
  );
}

export default App;
