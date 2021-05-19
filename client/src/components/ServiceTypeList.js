import React from 'react'
import {ServiceSubTypeList} from "./ServiceSubTypeList";

export const ServiceTypeList = ({serviceTypes}) => {

    if( !serviceTypes.length )
        return <p className='center'>Добавьте типы услуг</p>

    return (
        <div>
            {serviceTypes.map((serviceType) => {
                return (
                    <div>
                        <h4 className="service-title">{serviceType.type}</h4>
                        <ServiceSubTypeList serviceSubTypes={serviceType.subTypes}/>
                    </div>
                )
            })}
        </div>
    )
}