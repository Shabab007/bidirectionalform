import React from 'react';
import MonacoEditor from 'react-monaco-editor';

type LineNumbersType = 'on' | 'off' | 'relative' | 'interval' | ((lineNumber: number) => string);

const EditorComponent: React.FC<{
  yamlData: string | undefined;
  onYamlChange: (newYamlData: string) => void;
}> = ({ yamlData, onYamlChange }) => {

  const options = {
    selectOnLineNumbers: true,
    readOnly: false,
    wordWrap: 'off' as any, // Disable word wrap
  };
  return (
    <MonacoEditor
    width="800"
    height="600"
    language="javascript"
    theme="vs-dark"
    value={yamlData}
    options={options}
    onChange={onYamlChange}
    // editorDidMount={editorDidMount}
  />
  );
};

export default React.memo(EditorComponent);
