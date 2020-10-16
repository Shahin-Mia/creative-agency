import React, { useEffect, useState } from 'react';
import './UserList.css';

const OrderList = ({ userName }) => {
    const [tableData, setTableData] = useState([]);

    useEffect(getData, [])

    const handleChange = (e, id) => {
        fetch(`https://rocky-chamber-63741.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ status: e.target.value })
        })
            .then(res => res.json())
            .then(data => {
                getData();
            })
    }

    function getData() {
        fetch('https://rocky-chamber-63741.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setTableData(data))
    }

    return (
        <div className="user-section">
            <div className="d-flex justify-content-between align-items-center header-bg">
                <h3>List</h3>
                <h6>{userName}</h6>
            </div>
            <div style={{ minHeight: "80vh" }} className="control-overflow">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.length === 0 && <tr><td className="d-flex align-items-center justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </td></tr>
                        }
                        {
                            tableData.map(data => <tr key={data._id}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.title}</td>
                                <td>{data.details}</td>
                                <td>
                                    <select name="status" id="status" defaultValue={data.status} className={data.status} onChange={(e) => handleChange(e, data._id)}>
                                        <option value="Pending" className="Pending">Pending</option>
                                        <option value="Ongoing" className="Ongoing">Ongoing</option>
                                        <option value="Done" className="Done">Done</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;