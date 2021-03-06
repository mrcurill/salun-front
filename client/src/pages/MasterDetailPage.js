import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../components/Loader";
import {MasterCard} from "../components/MasterCard";

export const MasterDetailPage = () => {

    const {REACT_APP_MASTER_API_URL} = process.env;
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp();
    const [user, setUser] = useState(null);
    const userId = useParams().id;

    const getUser = useCallback(async () => {
        try {
            const fetched = await request(`${REACT_APP_MASTER_API_URL}/${userId}`, 'GET', null, {
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
            { !loading && user && <MasterCard user={user}/> }
        </>
    )
}