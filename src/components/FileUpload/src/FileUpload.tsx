import React, { useState } from 'react';
import './FileUpload.css';

export interface FileUploadProps {
  label?: string;
  accept?: string; // Accepted file types (e.g., "image/*, .pdf")
  multiple?: boolean;
  onFilesSelected: (files: FileList | null) => void;
  disabled?: boolean;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label = 'Upload File',
  accept,
  multiple = false,
  onFilesSelected,
  disabled = false,
  className = '',
}) => {
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const names = Array.from(files).map((file) => file.name);
      setFileNames(names);
      onFilesSelected(files);
    }
  };

  return (
    <div className={`file-upload ${className}`.trim()}>
      <label
        className={`file-upload__label ${disabled ? 'file-upload__label--disabled' : ''}`}
      >
        <input
          type="file"
          className="file-upload__input"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          disabled={disabled}
        />
        <span className="file-upload__button">{label}</span>
      </label>
      {fileNames.length > 0 && (
        <ul className="file-upload__file-list">
          {fileNames.map((name, index) => (
            <li key={index} className="file-upload__file-item">
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUpload;
