import React, { useState } from "react";
import "./CheckConsistencyPage.css";

const CheckConsistencyPage = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("YOUR_BACKEND_API_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      if (!response.ok) throw new Error("Server error");

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError("Failed to check consistency. Try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="check-container">
      {/* Header Section */}
      <div className="check-header">
        <h1>Check Story Consistency</h1>
        <p>
          Analyze your uploaded novel and character backstories to detect
          contradictions, missing links, and logical inconsistencies. This helps
          ensure your story remains coherent across all chapters.
        </p>
      </div>

      {/* Action Button */}
      <form className="check-form" onSubmit={handleCheck}>
        <button type="submit" className="check-btn" disabled={loading}>
          {loading ? "Checking..." : "Check Consistency"}
        </button>
      </form>

      {/* Error */}
      {error && <p className="error-text">{error}</p>}

      {/* Result */}
      {result && (
        <div className="result-box">
          <h3>Story ID: {result.storyId}</h3>
          <p>
            <strong>Consistency:</strong>{" "}
            {result.consistent ? "Consistent ✅" : "Contradiction ❌"}
          </p>
          <p>
            <strong>Rationale:</strong> {result.rationale}
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckConsistencyPage;
