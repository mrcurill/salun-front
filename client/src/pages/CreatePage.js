import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'

export const CreatePage = () => {
    const {REACT_APP_USER_API_URL} = process.env;
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [username, setUsername] = useState('')

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if(event.key === 'Enter') {
            try {
                const data = await request(REACT_APP_USER_API_URL, 'POST', {username: username}, {
                    Authorization: `Bearer ${auth.token}`
                })
                console.log(data)
                history.push(`/detail/${data }`)
            } catch(e) { }
        }
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop:'2rem'}}>
                <div className="input-field">
                    <input
                        placeholder="Введите логин пользователя"
                        id="username"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        onKeyPress={pressHandler}
                    />
                    <label htmlFor="username">Введите логин пользователя</label>
                </div>
            </div>
        </div>
    )
}