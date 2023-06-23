import { useSignIn, useSignOut, useAuthUser, useAuthHeader, useIsAuthenticated, } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const signIn = useSignIn();
  const nav = useNavigate()
  
  function sign(){
    signIn({
      token: '1234567890', //string	The Authentication token (JWT) to be stored from server
      expiresIn: '10', //number	The time for which the auth token will last, in minutes
      tokenType: "Bearer", //string | 'Bearer'	The type of authentication token.
      authState: {name:'mike', role:'admin'}, //object (optional)	State of the authorized user. Eg: {name: Jhon, email: jhon@auth.com}
    }) && nav('/secure')  
  }
  
  return (
    <button onClick={sign}>
      Login
    </button>
  )
}

export const Signout = () => {
  const signOut = useSignOut();

  return <button onClick={() => signOut()}>Sign Out</button>;
};

export const AuthData = () => {
  const auth = useAuthUser();
  const authHeader = useAuthHeader();
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated()) {
    // Redirect to Dashboard
  } else {
    // Redirect to Login
  }

  return (
    <div>
      Hello {auth().user}
      {authHeader()}
    </div>
  );
};
