import React, { useState } from 'react'

function General({ data, setData }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  }

  const handleEdit = () => {
    setIsEditing(true);
  }

  return (
    <div className='General-Info'>
      <h2>General Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Full Name: </label>
            <input
              type="text"
              id="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number: </label>
            <input
              type="tel"
              id="phone"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className='submitted-form'>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default General;
