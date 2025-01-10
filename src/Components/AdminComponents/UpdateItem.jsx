import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Title from '../Title';
import { imageUpload } from '../../api/utlis';
import { useForm } from 'react-hook-form';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const UpdateItem = () => {
    const item = useLoaderData()
    const navigate = useNavigate()
    const axiosSecure = UseAxiosSecure()
    const {_id,recipe,price,name,image,category} = item



    const { register, handleSubmit, reset } = useForm();
      const onSubmit = async (data) => {
        const image = data.image[0]
        const photoURL = await imageUpload(image)
        console.log(data)
        console.log(photoURL)
    
        const menuItem ={
            name:data?.recipe,
            image: photoURL, 
            price: parseFloat(data?.price),
            recipe: data?.details,
            category: data?.category
        } 

        const res = await axiosSecure.patch(`/menu/${_id}`, menuItem) 
        console.log(res.data) 
        if(res.data.modifiedCount){
            navigate('/dashboard/manageitems')
            reset()
        }
    
      };
    return (
        <div>
            <Title title="Update Item" subtitle="What's new" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-10/12 space-y-4 mx-auto bg-slate-200 px-16 py-7"
      >
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe name"
            className="input input-bordered"
            defaultValue={name}
            {...register("recipe",{ required: true,})}
          />
        </div>
        <div className="md:grid grid-cols-2 gap-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              {...register("category",{ required: true,})}
              className="select select-bordered w-full max-w-xs"
              defaultValue={category}
            >
              <option disabled selected>
                Category?
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="supe">Supe</option>
              <option value="dessert">Dessert</option>
              <option value="salad">Salad</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              step="0.01"
              defaultValue={price}
              className="input input-bordered"
              {...register("price",{ required: true,})}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            className="textarea  input-bordered"
            placeholder="Recipe Details"
            defaultValue={recipe}
            {...register("details",{ required: true,})}
          ></textarea>
        </div>
        <input
          type="file"
          id="image"
          accept="image/*"  
          {...register("image",{ required: true,})}
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <input className="btn mt-5 bg-orange-500" type="submit" />
      </form>
        </div>
    );
};

export default UpdateItem;