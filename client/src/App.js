import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AuthContext} from "./context/AuthContext";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {Navbar} from "./components/Navbar";
import 'materialize-css';
import {Loader} from "./components/Loader";



function App() {
    const {token, userId, login, logout, ready} = useAuth();
    const isAuthenticated = !!token;
    console.log("user Authenticated = ", isAuthenticated);
    console.log("user token = ", token);
    console.log("user userId = ", userId);
    console.log("user login = ", login);
    console.log("user logout = ", logout);

    const routes = useRoutes(isAuthenticated);

    if (!ready) {
       return <Loader/>
    }

    return (
        <AuthContext.Provider value={{
            token, userId, login, logout, isAuthenticated
        }}>
            <Router>
                { isAuthenticated && <Navbar/> }
                <div className="container">
                    {routes}
                </div>
            </Router>
        </AuthContext.Provider>
    )
}

export default App;
