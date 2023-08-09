'use client'
  // EditorComponent.tsx
import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";

type LineNumbersType = 'on' | 'off' | 'relative' | 'interval' | ((lineNumber: number) => string);
const EditorComponent: React.FC<{
  yamlData: string | undefined;
  onYamlChange: (newYamlData: string) => void;
}> = ({ yamlData, onYamlChange }) => {
  // function editorDidMount(editor: monacoEditor.editor.IStandaloneCodeEditor){
  //   editor.setValue(yamlData || "");
  //   editor.onDidChangeModelContent(() => {
  //     const newValue = editor.getValue();
  //     console.log(newValue)
  //     onYamlChange(newValue);
  //   });
  // };
  const options = {
    selectOnLineNumbers: false,
    lineNumbers: 'off' as LineNumbersType,
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
