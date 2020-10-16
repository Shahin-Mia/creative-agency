import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddServices.css'

const AddServices = ({ userName }) => {
    const { register, handleSubmit } = useForm();
    const { isAdded, setIsAdded } = useState(false);

    const handleOnSubmit = data => {
        const files = data.icon;
        const title = data.title;
        const desc = data.description;
        const formData = new FormData()
        formData.append('icon', files[0])
        formData.append('title', title)
        formData.append('desc', desc)
        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                setIsAdded(data)
            })
    }
    if (isAdded) {
        alert("New Service Added successfully")
    }

    return (
        <div className="addServices-section">
            <div className="d-flex justify-content-between align-items-center header-bg">
                <h3>Add Services</h3>
                <h6>{userName}</h6>
            </div>
            <div className="form-bg">
                <form className="p-4" onSubmit={handleSubmit(handleOnSubmit)}>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <div className="form-group">
                                <input type="text" name="title" ref={register} style={{ height: 60 }} className="form-control" placeholder="Service Title" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="description" ref={register} rows="5" placeholder="Description" required></textarea>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="form-group">
                                <label htmlFor="file"><FontAwesomeIcon icon={faCloudUploadAlt} /> <span>Upload an Icon</span></label>
                                <input type="file" name="icon" ref={register} id="file" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success float-right m-5">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;