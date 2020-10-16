import React, { useEffect, useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const Feedback = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch(`https://rocky-chamber-63741.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setFeedback(data))
    }, [])
    return (
        <section className="container d-flex flex-column justify-content-around mb-5" style={{ minHeight: '80vh' }}>
            <h2 className="custom-h2 m-5">Clients <span className="highlights">Feedback</span></h2>
            <div className="row row-cols-1 row-cols-md-3">
                {
                    feedback.map(review => <FeedbackCard key={review._id} review={review} />)
                }
            </div>
        </section>
    );
};

export default Feedback;