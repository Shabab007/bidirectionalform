// EditorComponent.tsx
import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";

type LineNumbersType = 'on' | 'off' | 'relative' | 'interval' | ((lineNumber: number) => string);
const EditorComponent: React.FC<{
  yamlData: string | undefined;
  onYamlChange: (newYamlData: string) => void;
}> = ({ yamlData, onYamlChange }) => {
  function editorDidMount(editor: monacoEditor.editor.IStandaloneCodeEditor){
    // editor.setValue(yamlData);
    editor.onDidChangeModelContent(() => {
      const newValue = editor.getValue();
      onYamlChange(newValue);
    });
  };
  const options = {
    selectOnLineNumbers: false,
    lineNumbers: 'off' as LineNumbersType
  };
  return (
    <MonacoEditor
    width="800"
    height="600"
    language="javascript"
    theme="vs-dark"
    value={yamlData}
    options={options}
    // onChange={onChange}
    editorDidMount={editorDidMount}
  />
  );
};

export default EditorComponent;
