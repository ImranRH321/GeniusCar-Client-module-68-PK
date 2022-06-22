import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const url = 'http://localhost:5000/service';
    // console.log(url)

   fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(result => {
    // console.log('Success:', result);
  })

};
  

  return (
    <div>
      <h1>Add service</h1>

      <form className="w-50 mx-auto " onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" type='text' {...register("name", { required: true, maxLength: 20 })} />
        <input placeholder="description" type='' {...register("description")} />
        <input placeholder="price" type='number' {...register("price")} />
        <input placeholder="img-url" type="text" {...register("img")} />
        <input type="submit" value="add Service" className="btn btn-dark w-25 mx-auto"/>
      </form>
    </div>
  );
};

export default AddService;
