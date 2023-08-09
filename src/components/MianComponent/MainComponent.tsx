'use client'

import React, { useState } from 'react';
import * as jsYaml from 'js-yaml'; // Import the js-yaml library
import FormComponent from '../FormComponent/FormComponent';
import dynamic from 'next/dynamic';

const EditorComponent = dynamic(() => import('../MonacoComponent/MonacoComponent'), { ssr: false });

const initialState={
  user_info:{
    name: '',
    age: 0,
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip_code: '',
    }
  }
}

const MainComponent: React.FC = () => {
  const [formData, setFormData] = useState<UserInfo>(initialState);
  const [yamlData, setYamlData] = useState('');

  const handleFormChange = (newFormData: string) => {
    // console.log(newFormData)
    setFormData(JSON.parse(newFormData));
    updateYamlData(newFormData);
  };

  const handleYamlChange = (newYamlData: string) => {
    setYamlData(newYamlData);
    updateFormData(newYamlData);
  };

  const updateYamlData = (newFormData: string) => {
    const newYamlData = convertToYaml(newFormData);
    setYamlData(newYamlData);
  };

  const updateFormData = (newYamlData: string) => {
    const newFormData = convertToFormData(newYamlData);
    setFormData(newFormData);
  };

  const convertToYaml = (formData: string): string => {
    try {
      if(formData){
       const formDataObj = JSON.parse(formData)
        const objectAsYaml = jsYaml.dump(formDataObj);
        return objectAsYaml;
      }
      else{
        return ""
      }
    } catch (error) {
      console.error('Error converting to YAML:', error);
      return '';
    }
  };

  const convertToFormData = (yamlData: string): UserInfo => {
    try {
      
      const data = jsYaml.load(yamlData) as UserInfo ;
      console.log(data)
      return data || initialState;
    } catch (error) {
      console.error('Error converting from YAML:', error);
      return initialState;
    }
  };

  return (
    <div>
      <FormComponent data={formData} onFormChange={handleFormChange} />
      <EditorComponent yamlData={yamlData} onYamlChange={handleYamlChange} />
    </div>
  );
};

export default MainComponent;
