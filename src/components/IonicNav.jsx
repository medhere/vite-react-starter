import { ScrollArea, UnstyledButton, Group, ThemeIcon, Avatar, Image, Text } from '@mantine/core';
import { Link, Outlet } from 'react-router-dom';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSplitPane, IonMenu, IonButton, IonButtons, IonList, IonMenuToggle, IonPage } from '@ionic/react';
import { IoApps, IoArrowForwardOutline } from "react-icons/io5";
import logo from '../../assets/images/logo.png'


export const Nav = () => {

    return (
        <IonSplitPane when="md" contentId="main-content">
            <IonMenu type='overlay' contentId="main-content" className='w-full'>     {/* overlay, reveal, push */}
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <SideNav />
                </IonContent>
            </IonMenu>

            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuToggle> <IonButton> <IoApps /> </IonButton> </IonMenuToggle>
                        </IonButtons>
                        <IonTitle>
                            <Image width={200} height={50} fit="contain" src={logo} alt="alt"
                                withPlaceholder placeholder={<Text align="center">App Name</Text>}
                            />
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div className='p-2 bg-image'>
                        <div className='bg-white p-5 rounded-xl'>
                            <Outlet />
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </IonSplitPane>
    )

}

export const SideNav = () => {

    const links = [
        { icon: <i className="material-icons">keyboard_double_arrow_right</i>, color: 'blue', text: 'Go Home', subtext: 'test', to: '/' },
    ]

    return (
        <IonList>
            <div className="bg-white rounded overflow-hidden shadow">
                <div className="text-center p-6 border-b">
                    <Avatar radius={25} size={96} src={logo}
                        alt="AE" color="blue" className='mx-auto'>
                        AE
                    </Avatar>
                    <p className="pt-2 text-lg font-semibold"> Firstname Lastname </p>
                    <p>080876276356</p>
                    <p>email@email.com</p>
                    <p>USER_ID</p>
                </div>
            </div>
            <IonMenuToggle autoHide={false}>
                <ScrollArea className='h-[50vh]' type="auto">
                    {links.map((link, index) => { return <MainLink {...link} key={index} /> })}
                </ScrollArea>
            </IonMenuToggle>
        </IonList>

    )
}



const MainLink = ({ color, text, subtext, to }) => {
    return (
        <Link to={to}>
            <UnstyledButton
                sx={(theme) => ({
                    display: 'block', width: '100%', padding: theme.spacing.xs, borderRadius: theme.radius.sm,
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                    '&:hover': { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0], },
                })}
            >
                <Group>
                    <ThemeIcon color={color} variant="light"> <IoArrowForwardOutline /> </ThemeIcon>
                    <div> <p className='font-semibold'>{text}</p> <p className='text-sm text-slate-400'>{subtext}</p> </div>
                </Group>
            </UnstyledButton>
        </Link>
    );
}


