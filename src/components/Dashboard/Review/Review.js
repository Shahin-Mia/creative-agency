import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import '../OrderSection/OrderSection.css'

const Review = ({ userName }) => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const [isPosted, setIsPosted] = useState(false)

    const handleOnSubmit = data => {
        const img = loggedInUser.photoURL;
        const name = data.name;
        const designation = data.designation;
        const desc = data.desc;
        const formData = new FormData()
        formData.append('img', img)
        formData.append('name', name)
        formData.append('designation', designation)
        formData.append('desc', desc)
        fetch('http://localhost:5000/addReviews', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                setIsPosted(data)
            })
    }

    if (isPosted) {
        alert('Reviews Posted Successfully')
    }

    return (
        <div className="review-section">
            <div className="d-flex justify-content-between align-items-center header-bg">
                <h3>Review</h3>
                <h6>{userName}</h6>
            </div>
            <form className="p-4" onSubmit={handleSubmit(handleOnSubmit)}>
                <div className="form-group">
                    <input type="text" className="form-control order-input" name="name" ref={register} placeholder="Your name" required />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control order-input" name="designation" ref={register} placeholder="Company's name, Designation" required />
                </div>
                <div className="form-group">
                    <textarea className="form-control input-field" name="desc" ref={register} rows="5" placeholder="Description" required></textarea>
                </div>
                <button type="submit" className="btn btn-dark">SUBMIT</button>
            </form>
        </div>
    );
};

export default Review;