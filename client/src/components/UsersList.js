import React from 'react'
import {Link} from 'react-router-dom'

export const UsersList = ({users}) => {

    console.log(`users: ${users}`);

    if( !users.length )
        return <p className='center'>Пользователей пока нет</p>

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
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
                        <td>{user.username}</td>
                        <td>{user.username}</td>
                        <td>{user.username}</td>
                        <Link to={`/detail/${user.id}`}>Открыть</Link>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}