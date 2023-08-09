"use client"
import React, { useState, ChangeEvent } from 'react';

interface Address {
  street: string;
  city: string;
  state: string;
  zip_code: string;
}

interface info {
  name: string;
  age: number;
  email: string;
  address: Address;
}

interface UserInfo{
  user_info:info
}

const FormComponent: React.FC<{data:UserInfo, onFormChange:(value:string)=>void}> = ({ data, onFormChange }) => {
  const [formData, setFormData] = useState<UserInfo>({
    user_info:{
      name: '',
      age: 0,
      email: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip_code: '',
      },
    }
  });



  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [section, field,kr] = name.split('.');

    const updatedFormData: UserInfo = field !== "address"?{
      user_info: {
        ...formData.user_info,
      [field]:value
      }
    }:{
      user_info:{
        ...formData.user_info,
        address:{
          ...formData.user_info.address,
          [kr]:value
        }
      }
    }

    setFormData(updatedFormData);
    onFormChange(JSON.stringify(updatedFormData));
  };

  return (
    <form >
      <label>Name:</label>
      <input
        className='text-black'
        type="text"
        name="user_info.name"
        value={data?.user_info?.name}
        onChange={handleInputChange}
      />
      <label>Age:</label>
      <input
        className='text-black'
        type="number"
        name="user_info.age"
        value={data?.user_info?.age}
        onChange={handleInputChange}
      />
      <label>Email:</label>
      <input
        className='text-black'
        type="email"
        name="user_info.email"
        value={data?.user_info?.email}
        onChange={handleInputChange}
      />
      <label>Street:</label>
      <input
        className='text-black'
        type="text"
        name="user_info.address.street"
        value={data?.user_info?.address?.street}
        onChange={handleInputChange}
      />
      <label>City:</label>
      <input
        className='text-black'
        type="text"
        name="user_info.address.city"
        value={data?.user_info?.address?.city}
        onChange={handleInputChange}
      />
      <label>State:</label>
      <input
        className='text-black'
        type="text"
        name="user_info.address.state"
        value={data?.user_info?.address?.state}
        onChange={handleInputChange}
      />
      <label>Zip Code:</label>
      <input
        className='text-black'
        type="text"
        name="user_info.address.zip_code"
        value={data?.user_info?.address?.zip_code}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
