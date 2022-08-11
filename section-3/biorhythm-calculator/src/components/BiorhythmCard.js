import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React from "react";
import dayjs from "dayjs";

function dateFormat(isoString) {
return (dayjs(isoString).format('MMM DD YYYY'));
}

function BiorhythmCard ({ targetDate }) {
return (
    <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>{dateFormat(targetDate)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Physical: xx%</p>
          </IonCardContent>
        </IonCard>
    );
}

export default BiorhythmCard;