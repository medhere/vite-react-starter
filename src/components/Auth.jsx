import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import createRefresh from 'react-auth-kit/createRefresh';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

const authstore = createStore({
    authName: '_auth',
    authType: 'localstorage',
    // refresh: createRefresh({
    //     interval: 10,
    //     refreshApiCallback: async (param) => {
    //         try {
    //             // const response = await axios.post("/refresh", param, {
    //             //     headers: {'Authorization': `Bearer ${param.authToken}`}
    //             // })
    //             // console.log("Refreshing")
    //             // return {
    //             //     isSuccess: true,
    //             //     newAuthToken: response.data.token,
    //             //     newAuthTokenExpireIn: 10,
    //             //     newRefreshTokenExpiresIn: 60
    //             // }
    //         }
    //         catch (error) {
    //             console.error(error)
    //             return {
    //                 isSuccess: false
    //             }
    //         }
    //     }
    // })
});


export const Auth = ({ children }) => {
    return <AuthProvider store={authstore}>
        {children}
    </AuthProvider>
}


const SignInComponent = () => {
    const signIn = useSignIn();
    const auth = (e) => {
        if (signIn({
            auth: {
                token: res.data.token,
                type: 'Bearer'
            },
            refresh: res.data.refreshToken,
            userState: res.data.authUserState
        })) { // Only if you are using refreshToken feature
            // Redirect or do-something
        } else {
            //Throw error
        }

        return (
            <button onClick={() => auth()}>Sign In</button>
        )
    }
}


const SignOutComponent = () => {
    const signOut = useSignOut()

    return (
        <button onClick={() => signOut()}>Sign Out</button>
    )
}


const SomeComponent = () => {
    const auth = useAuthUser()

    return (
        <div>
            Hello {auth.user}
        </div>
    )
}


const IsAuthenticated = () => {
    const isAuthenticated = useIsAuthenticated()

    if (isAuthenticated) {
        // Redirect to Dashboard
    }
    else {
        // Redirect to Login
    }
}


// export const Authenticate = ({ acceptRoles }) => {
//     const authUser = useAuthUser();

//     const auth = <RequireAuth loginPath={"/signin"}><Outlet /></RequireAuth>

//     if (acceptRoles === undefined) return auth
//     if (acceptRoles !== undefined && acceptRoles.includes(authUser()?.role)) {
//         return auth
//     }
//     else {
//         return <Navigate to={'/signin'} />
//     }
// }
// {/* <Authenticate acceptRoles={['admin','user']} /> */ }


// export const AllowRoles = ({ acceptRoles, children }) => {
//     const authUser = useAuthUser();

//     const component = <>{children}</>

//     if (acceptRoles === undefined) return component
//     if (acceptRoles !== undefined && acceptRoles.includes(componentUser()?.role)) return auth

// }
