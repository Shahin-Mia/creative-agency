import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AddServices from '../AddServices/AddServices';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import OrderSection from '../OrderSection/OrderSection';
import UserList from '../UserList/UserList';
import Review from '../Review/Review';
import Sidebar from '../Sidebar/Sidebar';
import ServiceList from '../ServiceList/ServiceList';
import { UserContext } from '../../../App';

const Dashboard = () => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="container-fluid row d-flex flex-wrap">
            <div className="col-md-3 col-sm-12">
                <Sidebar isAdmin={isAdmin} />
            </div>
            <div className="col-md-9 col-sm-12 dashboard-bg">
                {location.hash === "" && isAdmin && <h1 className="text-center">Welcome to Admin's Dashboard</h1>}
                {location.hash === "" && !isAdmin && <h1 className="text-center">Welcome to Dashboard</h1>}
                {location.hash === "#userList" && isAdmin && < UserList userName={loggedInUser.displayName} />}
                {location.hash === "#order" && !isAdmin && < OrderSection user={loggedInUser} />}
                {location.hash === "#review" && !isAdmin && < Review userName={loggedInUser.displayName} />}
                {location.hash === "#makeAdmin" && isAdmin && < MakeAdmin userName={loggedInUser.displayName} />}
                {location.hash === "#addServices" && isAdmin && <AddServices userName={loggedInUser.displayName} />}
                {location.hash === "#services" && !isAdmin && <ServiceList userName={loggedInUser.displayName} />}
            </div>
        </div>
    );
};

export default Dashboard;