import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {ClientsList} from '../components/ClientsList'

export const ClientsPage = () => {
    const {REACT_APP_CLIENT_API_URL} = process.env;
    const [clients, setClients] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchClients = useCallback(async () => {
        try {
            const fetched = await request(REACT_APP_CLIENT_API_URL, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setClients(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchClients()
    }, [fetchClients])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {!loading && <ClientsList clients={clients} />}
        </>
    )
}