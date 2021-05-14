import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {UsersList} from '../components/UsersList'

export const UsersPage = () => {
    const {REACT_APP_USER_API_URL} = process.env;
    const [users, setUsers] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchUsers = useCallback(async () => {
        try {
            const fetched = await request(REACT_APP_USER_API_URL, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUsers(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {!loading && <UsersList users={users} />}
        </>
    )
}