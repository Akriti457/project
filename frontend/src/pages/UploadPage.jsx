import { useState } from "react";
import "./UploadPage.css";

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file!");
    alert(`File ${file.name} uploaded successfully!`);
  };

  return (
    <div className="upload-container">
      {/* Heading Section */}
      <div className="upload-header">
        <h1>Upload a Novel</h1>
        <p>
          Upload your novel file to analyze characters, events, and storyline
          consistency. Supported formats are <strong>.txt</strong> and{" "}
          <strong>.pdf</strong>.
        </p>
      </div>

      {/* Upload Box */}
      <form className="upload-form" onSubmit={handleUpload}>
        <input
          type="file"
          accept=".txt,.pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" className="upload-btn">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
