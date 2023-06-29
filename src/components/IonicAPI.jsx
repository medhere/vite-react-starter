import { useIonActionSheet, useIonAlert, useIonLoading, useIonToast } from "@ionic/react";
import { Device } from '@capacitor/device';
import { Camera, CameraResultType } from '@capacitor/camera';
import { useState } from "react";
import logo from '../../assets/images/logo.png'


//find out for app, core, preferences, statusbar

const Alert = () => {
    const [confirm] = useIonAlert();

    confirm({
        header: 'Delete Confirmation',
        message: `Do you want to delete this staff rank: ${name}?`,
        buttons: [
            {
                text: 'Yes', handler: () => {

                }
            },
            'Cancel'
        ],
    })

}

const Loading = () => {
    const [present, dismiss] = useIonLoading();

    present({
        message: 'Dismissing after 3 seconds...',
        duration: 3000,
        spinner: "bubbles",// ｜ "circles" ｜ "circular" ｜ "crescent" ｜ "dots" ｜ "lines" ｜ "lines-sharp" ｜ "lines-sharp-small" ｜ "lines-small"
        backdropDismiss: false
    });
}


const ActionSheet = () => {
    const [present] = useIonActionSheet();

    present({
        header: 'Actions',
        buttons: [
            {
                text: 'Delete',
                role: 'destructive',
                data: {
                    action: 'delete',
                },
            },
            {
                text: 'Share',
                data: {
                    action: 'share',
                },
            },
            {
                text: 'Cancel',
                role: 'cancel',
                data: {
                    action: 'cancel',
                },
            },
        ],
    })

}


const Toast = () => {
    const [present] = useIonToast();

    const presentToast = (position) => { // 'top' | 'middle' | 'bottom'
        present({
            message: 'Hello World!',
            duration: 1500,
            position: position,
        })
    };

    return (<button onClick={() => presentToast('top')}> Click </button>)
}


const DeviceInfo = () => {

    const logDeviceInfo = async () => {
        const info1 = await Device.getInfo();
        const info2 = await Device.getBatteryInfo();
        const info3 = await Device.getId()
        const info4 = (await Device.getId()).identifier

        const { operatingSystem: os, platform } = await Device.getInfo();
        const { identifier: name } = await Device.getId()
    };



}


const CameraInfo = () => {

    const [image, setImage] = useState(logo)

    const takePicture = async () => {

        try {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                width: 60,
                height: 60,
                source: 'PROMPT',
                resultType: CameraResultType.Base64
            });
            setImage('data:image/png;base64,' + image.base64String)

        } catch (err) {

        }
    }

}

