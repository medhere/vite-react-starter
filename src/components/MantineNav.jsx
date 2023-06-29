import { useState } from 'react';
import { AppShell, Navbar, Header, Footer, Text, MediaQuery, Burger, useMantineTheme, ScrollArea, UnstyledButton, Group, ThemeIcon, Image } from '@mantine/core';
import { Link, Outlet } from 'react-router-dom';
// import logo from '../assets/images/logo.png'

export const Nav = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{ main: { background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], }, }}
      navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm" fixed
      header={<HeaderComponent opened={opened} setOpened={setOpened}/>}
      navbar={<NavbarComponent opened={opened} />}
      footer={<FooterComponent />}
    >
      <div className='p-1'>
        <div className='bg-white p-5 rounded-xl'>
          <Outlet />
        </div>
      </div>

    </AppShell>
  )
}



const HeaderComponent = ({opened, setOpened}) => {
  const theme = useMantineTheme();

  return (
    <Header height={70} p="md">
      <b style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" color={theme.colors.gray[6]} mr="xl" />
        </MediaQuery>
        LOGO
        {/* <Image width={200} height={50} fit="contain" src={logo} alt='' /> */}
        {/* <Text></Text> */}
      </b>
    </Header>
  )
}



const NavbarComponent = ({opened}) => {
  const theme = useMantineTheme();

  const links = [
    { icon: <i className="material-icons">keyboard_double_arrow_right</i>, color: 'blue', text: 'Go Home', subtext: 'test', to: '/' },
  ]

  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} fixed position={{ top: 0, left: 0 }} >
      <Navbar.Section mt="xs">
        <div className="bg-white rounded overflow-hidden shadow">
          <div className="text-center p-2 border-b">
            <img className="h-24 w-24 rounded-3xl mx-auto" src="https://i.pravatar.cc/300" alt="" />
            <p className="pt-2 text-lg font-semibold"> FullName </p>
          </div>
        </div>
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {links.map((link, index) => { return <MainLink {...link} key={index} /> })}
      </Navbar.Section>

      <Navbar.Section>test{/* Footer with user */}</Navbar.Section>
    </Navbar>
  )
}



function MainLink({ icon, color, text, subtext, to }) {
  const theme = useMantineTheme();

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
          <ThemeIcon color={color} variant="light"> {icon} </ThemeIcon>
          <div>
            <Text>{text}</Text>
            <Text size="xs" color="gray">{subtext}</Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
  );
}



const FooterComponent = () => (
  <Footer height={60} p="md"> {/*Application footer*/} </Footer>
)