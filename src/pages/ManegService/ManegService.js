import React from 'react';
import useServices from '../../hooks/useServices';

const ManegService = () => {
    const [services, setServices] = useServices()

    const handleDeleteService = id => {
        const areYouSure = window.confirm('Are You Sure delete Vai..!')
        if(areYouSure){
            const url = `http://localhost:5000/service/${id}`
         fetch(url, {
            method: 'DELETE', 
         })
         .then(res => res.json())
         .then(data => {
            console.log(data); 
            /* ei condion ar kono dokar nai kita bujlam vai */
           const remaning = services.filter(ser => ser._id !== id)
           setServices(remaning)
            
         })
        }
    }
    return (
        <div className='mx-auto w-50'>
            <h2>Manges service {services.length} </h2>
            
            {
             services.map(service => <div key={service._id}>
                <h3 className='border m-2 p-2'>{service.name} <button onClick={()=>handleDeleteService(service._id)} className='link rounded btn-danger ps-2'>delete</button></h3>
             </div>)
            }
        </div>
    );
};

export default ManegService;