import React from 'react';

const ServiceListItem = ({ order }) => {
    const { title, image, desc, status } = order;
    return (
        <div className="card" style={{ width: 415, borderRadius: 20 }}>
            <div className="d-flex align-items-center justify-content-between">
                <img src={`data:image/png;base64,${image}`} style={{ maxHeight: 74, maxWidth: 74 }} className="mt-3 ml-3" alt="..." />
                <p className={`${status}`}>{status}</p>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
            </div>
        </div>
    );
};

export default ServiceListItem;