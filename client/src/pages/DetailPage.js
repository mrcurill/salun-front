import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../components/Loader";
import {UserCard} from "../components/UserCard";

export const DetailPage = () => {

    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp();
    const [user, setUser] = useState(null);
    const userId = useParams().id;

    const getUser = useCallback(async () => {
        try {
            const fetched = await request(`/api/v1/users/${userId }`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });
            setUser(fetched);
        } catch(e) {}
    }, [token, userId, request] )

    useEffect(() => {
        getUser();
    }, [getUser])

    if(loading) {
        return <Loader/>
    }

    return (
        <>
            { !loading && user && <UserCard user={user}/> }
        </>
    )
}