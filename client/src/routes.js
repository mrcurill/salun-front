import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom";
import {UsersPage} from "./pages/UsersPage";
import {ClientsPage} from "./pages/ClientsPage";
import {CreateUserPage} from "./pages/CreateUserPage";
import {UserDetailPage} from "./pages/UserDetailPage";
import {AuthPage} from "./pages/AuthPage";
import {ServicesPage} from "./pages/ServicesPage";


export const useRoutes = isAuthenticated => {
    if(isAuthenticated) {
        return (
            <Switch>
                <Route path="/users" exact>
                    <UsersPage/>
                </Route>
                <Route path="/clients" exact>
                    <ClientsPage/>
                </Route>
                <Route path="/services" exact>
                    <ServicesPage/>
                </Route>
                <Route path="/create/user" exact>
                    <CreateUserPage/>
                </Route>
                <Route path="/user/detail/:id">
                    <UserDetailPage/>
                </Route>
                <Redirect to="create"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/auth" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/auth"/>
        </Switch>
    )
}