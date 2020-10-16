import React, { useEffect, useState } from 'react';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './OrderSection.css'
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const OrderSection = ({ user }) => {
    const { displayName, email } = user;
    const { id } = useParams();
    const [item, setItem] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/serviceItem/${id}`)
            .then(res => res.json())
            .then(result => setItem(result))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleOnSubmit = data => {
        const name = data.name;
        const desc = item.desc
        const title = data.title;
        const img = item.image.img;
        const email = data.email;
        const price = data.price;
        const status = "Pending";
        const details = data.details;
        const formData = new FormData()
        formData.append('name', name)
        formData.append('desc', desc)
        formData.append('title', title)
        formData.append('img', img)
        formData.append('email', email)
        formData.append('price', price)
        formData.append('status', status)
        formData.append('details', details)
        fetch('http://localhost:5000/addOrders', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                setIsSubmitted(data)
            })
    }

    if (isSubmitted) {
        alert('Your Order has been placed successfully')
    }

    return (
        <div className="order-section">
            <div className="d-flex justify-content-between align-items-center header-bg">
                <h3>Order</h3>
                <h6>{displayName}</h6>
            </div>
            {!item.image && !item.desc && <p className="text-danger">Please select a service from Home page</p>}
            <form className="p-4" onSubmit={handleSubmit(handleOnSubmit)}>
                <div className="form-group">
                    <input type="text" name="name" ref={register} defaultValue={displayName} className="form-control order-input" placeholder="Your name/company's name" required />
                </div>
                <div className="form-group">
                    <input type="email" name="email" defaultValue={email} ref={register} className="form-control order-input" placeholder="Your email address" required />
                </div>
                <div className="form-group">
                    <input type="text" name="title" ref={register} defaultValue={item.title} className="form-control order-input" placeholder="exp: Graphics Design" required />
                </div>
                <div className="form-group">
                    <textarea className="form-control input-field" ref={register} name="details" rows="3" placeholder="Product Details" required></textarea>
                </div>
                <div className="row d-flex">
                    <div className="col-md-4 form-group">
                        <input type="number" className="form-control" ref={register} name="price" placeholder="price" required />
                    </div>
                    <div className="col-md-4 form-group">
                        <label htmlFor="file"><FontAwesomeIcon icon={faCloudUploadAlt} /> <span>Upload project file</span></label>
                        <input type="file" name="file" ref={register} className="form-control" id="file" />
                    </div>
                </div>
                <button type="submit" className="btn btn-dark" disabled={!item.image && !item.desc}>Submit</button>
            </form>
        </div>
    );
};

export default OrderSection;