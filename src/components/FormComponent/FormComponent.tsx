"use client"
import React, { useState, useEffect } from 'react';

const FormComponent: React.FC<{
  formData: string | undefined;
  onFormChange: (newFormData: string) => void;
}> = ({ formData, onFormChange }) => {
    console.log(formData)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange(event.target.value);
  };

  return (
    <div>
      <input type="text" style={{color:"black"}} value={formData} onChange={handleChange} />
    </div>
  );
};

export default FormComponent;
