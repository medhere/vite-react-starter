import { IonButton, IonButtons, IonModal, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

export const IonicModal = ({ label, open, close, children}) => (
    <IonModal isOpen={open} onDidDismiss={close}>
        <IonHeader>
        <IonToolbar>
            <IonTitle>{label}</IonTitle>
            <IonButtons slot="end">
            <IonButton onClick={close}>Close</IonButton>
            </IonButtons>
        </IonToolbar>
        </IonHeader>
        <IonContent>
            <div style={{padding:'10px 25px'}}> {children} </div>
        </IonContent>
    </IonModal>
)