import React from 'react'

export const ServicesList = ({services}) => {

    console.log(`services: ${services}`);

    if( !services.length )
        return <p className='center'>Услуг пока нет</p>

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Название</th>
                <th>Длительность</th>
                <th>Цена</th>
            </tr>
            </thead>

            <tbody>
            {services.map((srv, index) => {
                return (
                    <tr key={srv.id}>
                        <td>{index+1}</td>
                        <td>{srv.name}</td>
                        <td>{srv.duration}</td>
                        <td>{srv.cost}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}