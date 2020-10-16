import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://rocky-chamber-63741.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="container d-flex flex-column justify-content-around mb-5" style={{ minHeight: '80vh' }}>
            <h2 className="custom-h2">Provide awesome <span className="highlights">services</span></h2>
            <div className="row row-cols-1 row-cols-md-3">
                {
                    services.length === 0 && <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
                {
                    services.map(service => <ServiceCard key={service._id} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;