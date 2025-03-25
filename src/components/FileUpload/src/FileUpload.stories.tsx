import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FileUpload, { FileUploadProps } from './FileUpload';

export default {
  title: 'Components/File Upload',
  component: FileUpload,
} as Meta;

const Template: StoryFn<FileUploadProps> = (args) => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFilesSelected = (selectedFiles: FileList | null) => {
    setFiles(selectedFiles);
  };

  return (
    <div>
      <FileUpload {...args} onFilesSelected={handleFilesSelected} />
      {files && (
        <div style={{ marginTop: '16px' }}>
          <h4>Selected Files:</h4>
          <ul>
            {Array.from(files).map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const DefaultFileUpload: StoryFn<FileUploadProps> = Template.bind({});
DefaultFileUpload.args = {
  label: 'Upload File',
  accept: '*',
  multiple: false,
};

export const MultipleFileUpload: StoryFn<FileUploadProps> = Template.bind({});
MultipleFileUpload.args = {
  label: 'Upload Multiple Files',
  accept: 'image/*, .pdf',
  multiple: true,
};

export const DisabledFileUpload: StoryFn<FileUploadProps> = Template.bind({});
DisabledFileUpload.args = {
  label: 'Upload Disabled',
  disabled: true,
};
