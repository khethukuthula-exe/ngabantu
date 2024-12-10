import React, { useState, useEffect } from 'react';

type FileDisplayProps = {
  initialFiles: File[];
};

const FileDisplay: React.FC<FileDisplayProps> = ({ initialFiles }) => {
  const [files, setFiles] = useState<File[]>(initialFiles);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Update the component state if initialFiles changes
    setFiles(initialFiles);
    setCurrentIndex(0); // Reset to the first file when initialFiles changes
  }, [initialFiles]);

  const showNextFile = () => {
    if (currentIndex < files.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const showPreviousFile = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const removeFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter(file => file.name !== fileName));
    if (currentIndex >= files.length - 1 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move to the previous file if the last file is removed
    }
  };

  if (files.length === 0) {
    return <p>No files available.</p>;
  }

  const currentFile = files[currentIndex];

  return (
    <div>
      <h2>File Display</h2>
      <div>
        <h3>File: {currentFile.name}</h3>
        <button onClick={() => removeFile(currentFile.name)}>Remove</button>
        <p>Type: {currentFile.type}</p>
        <p>Size: {(currentFile.size / 1024).toFixed(2)} KB</p>
      </div>
      <div>
        <button onClick={showPreviousFile} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={showNextFile} disabled={currentIndex === files.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FileDisplay;

