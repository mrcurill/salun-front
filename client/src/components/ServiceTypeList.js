import React from 'react'
import {ServiceSubTypeList} from "./ServiceSubTypeList";

export const ServiceTypeList = ({serviceTypes}) => {

    if( !serviceTypes.length )
        return <p className='center'>Добавьте типы услуг</p>

    return (
        <div>
            {serviceTypes.map((serviceType) => {
                return (
                    <div style={{padding:'2rem'}}>
                        <h5 className="service-title">{serviceType.type}</h5>
                        <ServiceSubTypeList serviceSubTypes={serviceType.subTypes}/>
                    </div>
                )
            })}
        </div>
    )
}