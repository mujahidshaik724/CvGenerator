import React, { useState } from 'react'

function Education({ data, setData }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  }

  const handleEdit = () => {
    setIsEditing(true);
  }

  return (
    <div className='Education-section'>
      <h2>Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="school">School Name:</label>
            <input
              type="text"
              id="school"
              value={data.schoolName}
              onChange={(e) => setData({ ...data, schoolName: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="title">Title of Study:</label>
            <input
              type="text"
              id="title"
              value={data.studyTitle}
              onChange={(e) => setData({ ...data, studyTitle: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="date">Date of Study</label>
            <input
              type="text"
              id="date"
              placeholder="e.g., 2020 - 2024"
              value={data.studyDate}
              onChange={(e) => setData({ ...data, studyDate: e.target.value })}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className='submitted-form'>
          <p><strong>School Name:</strong> {data.schoolName}</p>
          <p><strong>Study Title:</strong> {data.studyTitle}</p>
          <p><strong>Study Date:</strong> {data.studyDate}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;
