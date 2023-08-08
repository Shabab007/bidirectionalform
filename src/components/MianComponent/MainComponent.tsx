'use client'

import React, { useState } from 'react';
import jsYaml from 'js-yaml'; // Import the js-yaml library
import FormComponent from '../FormComponent/FormComponent';
import dynamic from 'next/dynamic';

const EditorComponent = dynamic(() => import('../MonacoComponent/MonacoComponent'), { ssr: false });

interface FormData {
    formData: string;
    // Add more properties as needed
  }

const MainComponent: React.FC = () => {
  const [formData, setFormData] = useState('');
  const [yamlData, setYamlData] = useState('');

  const handleFormChange = (newFormData: string) => {
    console.log(newFormData)
    setFormData(newFormData);
    updateYamlData(newFormData);
  };

  const handleYamlChange = (newYamlData: string) => {
    console.log(newYamlData)
    setYamlData(newYamlData);
    updateFormData(newYamlData);
  };

  const updateYamlData = (newFormData: string) => {
    const newYamlData = convertToYaml(newFormData);
    console.log(undefined)
    setYamlData(newYamlData);
  };

  const updateFormData = (newYamlData: string) => {
    const newFormData = convertToFormData(newYamlData);
    console.log(newFormData)
    setFormData(newFormData);
  };

  const convertToYaml = (formData: string): string => {
    try {
      // Split the formData into lines
    const formDataLines = formData.split('\n');

    // Remove empty lines and whitespace from each line
    const trimmedLines = formDataLines.filter(line => line.trim() !== '');

    // Join the trimmed lines with line breaks
    const trimmedFormData = trimmedLines.join('\n');

      return formData;
    } catch (error) {
      console.error('Error converting to YAML:', error);
      return '';
    }
  };

  const convertToFormData = (yamlData: string): string => {
    try {
      return yamlData || "";
    } catch (error) {
      console.error('Error converting from YAML:', error);
      return '';
    }
  };
  console.log(yamlData.trim() == "")

  return (
    <div>
      <FormComponent formData={formData} onFormChange={handleFormChange} />
      <EditorComponent yamlData={yamlData} onYamlChange={handleYamlChange} />
    </div>
  );
};

export default MainComponent;
