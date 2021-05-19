import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useHttp} from '../hooks/http.hook';
import {AuthContext} from '../context/AuthContext';
import {Loader} from '../components/Loader';
import {UsersList} from '../components/UsersList';
import {ServiceTypeList} from "../components/ServiceTypeList";

export const ServicesPage = () => {
    const {REACT_APP_SERVICE_API_URL} = process.env;
    const [services, setServices] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchServices = useCallback(async () => {
        try {
            const fetched = await request(REACT_APP_SERVICE_API_URL, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setServices(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchServices()
    }, [fetchServices])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {!loading && <ServiceTypeList serviceTypes={services} />}
        </>
    )
}