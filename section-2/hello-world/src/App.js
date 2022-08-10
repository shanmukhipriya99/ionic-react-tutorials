import {IonButton, IonIcon, IonToast} from '@ionic/react';
import { play as playIcon} from "ionicons/icons"; //setting alias using "as"
import React, {useState} from 'react';

function App() {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  }
  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <p>Add some content here…</p>
        <IonButton onClick={handleClick}>
        <IonIcon icon={playIcon} slot="start" /> {/*other values for slot: start, end, icon-only */}
        Click here!</IonButton>
        <IonToast isOpen={showToast} message="Hello World!" />
      </main>
    </div>
  );
}

export default App;
