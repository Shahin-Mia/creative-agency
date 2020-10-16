import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = ({ userName }) => {
    const { register, handleSubmit } = useForm();
    const [isAdded, setIsAdded] = useState(false)
    const handleMakeAdmin = data => {
        fetch('http://localhost:5000/admin', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(data => setIsAdded(data))
    }
    return (
        <div className="addAdmin-section" id="makeAdmin">
            <div className="d-flex justify-content-between align-items-center header-bg">
                <h4>Add Admin</h4>
                <h6>{userName}</h6>
            </div>
            <form onSubmit={handleSubmit(handleMakeAdmin)}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onFocus={() => setIsAdded(false)} style={{ height: 60, width: 570 }} type="email" name='email' ref={register} placeholder="jon@gmail.com" id="email" className="form-control" />
                </div>
                <button type="submit" className="btn btn-success px-4 py-2">SUBMIT</button>
            </form>
            <p className="text-success">{isAdded ? "You have successfully added an Admin" : ''}</p>
        </div>
    );
};

export default MakeAdmin;