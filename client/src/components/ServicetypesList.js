import React from 'react'
import {ServicesList} from "./ServicesList";

export const ServiceTypesList = ({serviceTypes}) => {

    if( !serviceTypes.length )
        return <p className='center'>Добавьте типы услуг</p>

    return (
        <div>
            {serviceTypes.map((serviceType) => {
                return (
                    <div>
                        <h4 className="service-title">{serviceType.type}</h4>
                        <ServicesList services={serviceType.services}/>
                    </div>
                )
            })}
        </div>
    )
}