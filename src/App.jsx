import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route,  Outlet } from "react-router-dom";
import { setupIonicReact, IonApp, IonContent } from "@ionic/react";
import { Provider } from "react-redux";
import { Notifications } from "./components/Notifications";
import { AuthProvider, RequireAuth } from "react-auth-kit";
import { lazily } from "react-lazily";
import { store } from "./stores/reduxStore";

// import { loadable } from 'react-lazily/loadable';
// const { MyComponent } = loadable(() => import('./MyComponent'), { fallback: <div>Loading...</div>, });

//Pages
const { Nav } = lazily(() => import("./components/Nav"));
const { IonicPage } = lazily(() => import("./pages/Ionic"));
const Loadables = lazy(() => import("./components/Loadables"));

setupIonicReact({
  // mode: 'ios'
});

export default function App() {
  return (
    <Provider store={store}>
      <IonApp>
        <IonContent>
          <AuthProvider
            authType="localstorage" //cookie
            authName="auth"
          // cookieDomain={window.location.hostname}
          // cookieSecure={window.location.protocol === "https:"}
          >
            <Router>
              <Loadables>
                <Notifications />
                <Routes>
                  <Route path="/" element={<IonicPage />}></Route>
                  <Route path="admin" element={<Nav />}>
                    <Route index element={<>Index Admin</>} />
                    <Route path=":id" element={<>Route</>} />
                  </Route>
                  <Route element={<RequireAuth loginPath={"/login"}><Outlet/></RequireAuth>}>
                    <Route path="secure" element={<>123</>} />
                    <Route path="456" element={<>456</>} />
                  </Route>
                  <Route path="*" element={<>No route found</>}></Route>
                </Routes>
              </Loadables>
            </Router>
          </AuthProvider>
        </IonContent>
      </IonApp>
    </Provider>
  );
}

