import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './ServiceList.css';
import ServiceListItem from './ServiceListItem';

const ServiceList = ({ userName }) => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://rocky-chamber-63741.herokuapp.com/orders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
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