import React, { useState } from "react";

function Experience({ data, setData }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="experience-section">
      <h2>Practical Experience</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="company">Company Name:</label>
            <input
              type="text"
              id="company"
              value={data.company}
              onChange={(e) => setData({ ...data, company: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="position">Position Title:</label>
            <input
              type="text"
              id="position"
              value={data.position}
              onChange={(e) => setData({ ...data, position: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="responsibilities">Main Responsibilities:</label>
            <textarea
              id="responsibilities"
              value={data.responsibilities}
              onChange={(e) =>
                setData({ ...data, responsibilities: e.target.value })
              }
              required
              rows="4"
            ></textarea>
          </div>

          <div>
            <label htmlFor="from">From:</label>
            <input
              type="text"
              id="from"
              value={data.dateFrom}
              onChange={(e) => setData({ ...data, dateFrom: e.target.value })}
              placeholder="e.g., Jan 2022"
              required
            />
          </div>

          <div>
            <label htmlFor="until">Until:</label>
            <input
              type="text"
              id="until"
              value={data.dateUntil}
              onChange={(e) => setData({ ...data, dateUntil: e.target.value })}
              placeholder="e.g., Dec 2023"
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="submitted-info">
          <p><strong>Company:</strong> {data.company}</p>
          <p><strong>Position:</strong> {data.position}</p>
          <p><strong>Responsibilities:</strong> {data.responsibilities}</p>
          <p><strong>From:</strong> {data.dateFrom}</p>
          <p><strong>Until:</strong> {data.dateUntil}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Experience;
