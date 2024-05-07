import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { setupIonicReact, IonApp, IonContent } from "@ionic/react";
import Loadables from "./components/Loadables";
import { Auth } from './components/Auth';
import { AppRoutes } from './routes';

// import { lazily } from "react-lazily";
// import { loadable } from 'react-lazily/loadable';
// const { MyComponent } = loadable(() => import('./MyComponent'), { fallback: <div>Loading...</div>, });

//Pages

setupIonicReact({
  // mode: 'ios'
});

function App() {

  return (
    <>
      <Auth>
        <PrimeReactProvider>
          <Loadables>
            <AppRoutes/>
          </Loadables>
        </PrimeReactProvider>
      </Auth>
    </>
  )
}

export default App
