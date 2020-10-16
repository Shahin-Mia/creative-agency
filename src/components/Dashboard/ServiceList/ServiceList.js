import React, { useEffect, useState } from 'react';
import './ServiceList.css';
import ServiceListItem from './ServiceListItem';

const ServiceList = ({ userName }) => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://rocky-chamber-63741.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="service-section">
            <div className="d-flex justify-content-between align-items-center header-bg">
                <h3>Service List</h3>
                <h6>{userName}</h6>
            </div>
            {
                orders.map(order => <ServiceListItem key={order._id} order={order} />)
            }
        </div>
    );
};

export default ServiceList;