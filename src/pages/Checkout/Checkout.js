import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useServiceDetail from "../../hooks/useServiceDetail";
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);




  const handlePlaceOrder = event => {
    event.preventDefault()
       const order = {
         email: user.email,
         serviceId: serviceId,
         address: event.target.address.value,
         phone: event.target.phone.value

       }
      axios.post('http://localhost:5000/order', order)
      .then(res => {
        const {data} = res;
        if(data.insertedId){
          toast('you are book')
        }
      })
      event.target.reset()
  }

  return (
    <div className="mx-auto w-50">
      <h3>{service.name}</h3>
      <form onSubmit={handlePlaceOrder}>
        <input type="text" name="name" value={user?.displayName} placeholder="Name" disabled/>
        <input type="text" name="email" value={user?.email} placeholder="email" readOnly/>
        <input type="text" name="service" value={service.name} placeholder="service" readOnly/>
        <input type="text" name="address"   placeholder="address" autoComplete="off"/>
        <input type="text" name="phone"  placeholder="phone" autoComplete="off"/>
        <input className="btn bg-warning" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
