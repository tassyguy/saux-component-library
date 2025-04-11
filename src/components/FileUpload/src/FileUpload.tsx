import React, { useRef, useState } from 'react';
import Button from '../../Button/src/Button'; // Adjust import path as needed
import './FileUpload.css';

export interface FileUploadProps {
  label?: string;
  accept?: string;
  multiple?: boolean;
  onFilesSelected: (files: FileList | null) => void;
  disabled?: boolean;
  className?: string;
  buttonVariant?: 'primary' | 'secondary';
  buttonSize?: 'small' | 'medium' | 'large';
}

const FileUpload: React.FC<FileUploadProps> = ({
  label = 'Upload File',
  accept,
  multiple = false,
  onFilesSelected,
  disabled = false,
  className = '',
  buttonVariant = 'primary',
  buttonSize = 'medium',
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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
      <input
        ref={fileInputRef}
        type="file"
        className="file-upload__input"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        disabled={disabled}
        style={{ display: 'none' }}
      />
      <Button
        label={label}
        onClick={handleClick}
        variant={buttonVariant}
        size={buttonSize}
        disabled={disabled}
      />
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
