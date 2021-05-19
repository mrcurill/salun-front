import React from 'react'
import {ServicesList} from "./ServicesList";

export const ServiceSubTypeList = ({serviceSubTypes}) => {

    if( !serviceSubTypes.length )
        return <p className='center'>Добавьте типы услуг</p>

    return (
        <div>
            {serviceSubTypes.map((serviceSubType) => {
                return (
                    <div>
                        <h5 className="service-title">{serviceSubType.subType}</h5>
                        <ServicesList services={serviceSubType.services}/>
                    </div>
                )
            })}
        </div>
    )
}