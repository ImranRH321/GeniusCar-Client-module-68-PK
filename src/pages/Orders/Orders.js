import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

/* fetch undefined email ? --------->problem
  const email = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${email}`)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);
*/

useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/order?email=${email}`;
      const { data } = await axios.get(url);
      setOrders(data)
    };
    getOrders()
  }, []);


  return (
    <div>
      <h2>Orders book: {orders.length} </h2>
    </div>
  );
};

export default Orders;
