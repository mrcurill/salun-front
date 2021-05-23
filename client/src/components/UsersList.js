import React from 'react'
import {Link} from 'react-router-dom'
import Avatar from "@material-ui/core/Avatar";

export const UsersList = ({users}) => {

    if( !users.length )
        return <p className='center'>Пользователей пока нет</p>

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Аватар</th>
                <th>Логин</th>
                <th>Фамилия</th>
                <th>Имя</th>
            </tr>
            </thead>

            <tbody>
            {users.map((user, index) => {
                return (
                    <tr key={user.id}>
                        <td>{index+1}</td>
                        <td><Avatar alt="Remy Sharp" src={user.avatar} /></td>
                        <td>{user.username}</td>
                        <td>{user.lastName}</td>
                        <td>{user.firstName}</td>
                        <Link to={`/detail/${user.id}`}>Открыть</Link>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}