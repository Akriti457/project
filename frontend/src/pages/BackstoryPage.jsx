import React, { useState } from "react";
import "./BackstoryPage.css";

const BackstoryPage = () => {
  const [backstory, setBackstory] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (!backstory) return alert("Please add backstory!");
    alert("Backstory saved successfully!");
  };

  return (
    <div className="backstory-container">
      {/* Header Section */}
      <div className="backstory-header">
        <h1>Add Character Backstory</h1>
        <p>
          Describe the character’s background, motivations, relationships, and
          past events. This information helps the system understand your story
          deeply and maintain consistency across chapters.
        </p>
      </div>

      {/* Backstory Form */}
      <form className="backstory-form" onSubmit={handleSave}>
        <textarea
          placeholder="Write character backstory here..."
          value={backstory}
          onChange={(e) => setBackstory(e.target.value)}
        />
        <button type="submit">Save Backstory</button>
      </form>
    </div>
  );
};

export default BackstoryPage;
