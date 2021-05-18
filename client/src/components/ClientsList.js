import React from 'react'
import {Link} from 'react-router-dom'

export const ClientsList = ({clients}) => {

    if( !clients.length )
        return <p className='center'>Клиентов пока нет</p>

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Комментарий</th>
            </tr>
            </thead>

            <tbody>
            {clients.map((client, index) => {
                return (
                    <tr key={client.id}>
                        <td>{index+1}</td>
                        <td>{client.lastName}</td>
                        <td>{client.firstName}</td>
                        <td>{client.comment}</td>
                        <Link to={`/detail/${client.id}`}>Открыть</Link>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}