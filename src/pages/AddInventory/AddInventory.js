import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const AddInventory = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    console.log(user.email)
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
        toast('Your New Inventory Item is Added')
    };
    return (
        <div className='container mt-5 w-50 mx-auto'>
            <h2 className='text-center text-dark text-uppercase'>Please add a item</h2>
            <form className='d-flex flex-column mt-3 mb-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 border p-2 rounded' type='text' placeholder='Enter Product Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2 border p-2 rounded' placeholder="Enter Email" defaultValue={user.email} type="email" {...register("email", { required: true })} />
                <textarea className='mb-2 border' placeholder='Enter Description' {...register("description",)} />
                <input className='mb-2 border' placeholder='Enter Price' type="number" {...register("price",)} />
                <input className='mb-2 border' placeholder='Enter Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                <input className='mb-2 border' placeholder='Enter Quantity' {...register("quantity", { required: true, maxLength: 20 })} />
                <input className='mb-2 border' placeholder='Enter Photo url' type='text' {...register("img",)} />
                <input type="submit" value='Add Item' className='btn-success p-2 text-center rounded border-0' />
                <ToastContainer></ToastContainer>
            </form>
        </div>
    );
};

export default AddInventory;