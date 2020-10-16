import React from 'react';

const FeedbackCard = ({ review }) => {
    const cardStyle = {
        textAlign: "center",
        borderRadius: 4,
        width: 370,
        minHeight: 212
    }
    return (
        <div className="col mb-4">
            <div className="card d-flex flex-column p-4" style={cardStyle}>
                <div className="d-flex">
                    {review.img ? <img src={review.img} style={{ width: 64, height: 64, borderRadius: '50%' }} className="card-img-top mx-4" alt="..." />
                        : <img src={`data:image/png;base64,${review.image.img}`} style={{ width: 64, height: 64, borderRadius: '50%' }} className="card-img-top mx-4" alt="..." />}
                    <div className="text-center">
                        <h5 className="card-title">{review.name}</h5>
                        <p>{review.designation}</p>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{review.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;