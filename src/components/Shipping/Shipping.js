import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {

    const { user } = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    //console.log(watch("example"));

    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" {...register("address", { required: true })} />
                <input placeholder="Phone No" {...register("phone", { required: true })} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;