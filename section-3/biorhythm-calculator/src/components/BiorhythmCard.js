import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React from "react";

function BiorhythmCard ({ targetDate }) {
return (
    <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>{targetDate}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Physical: xx%</p>
          </IonCardContent>
        </IonCard>
    );
}

export default BiorhythmCard;