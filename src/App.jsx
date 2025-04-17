import React, { useState } from 'react'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experiance'
import './App.css'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [educationInfo, setEducationInfo] = useState({
    schoolName: '',
    studyTitle: '',
    studyDate: '',
  });

  const [experienceInfo, setExperienceInfo] = useState({
    company: '',
    position: '',
    responsibilities: '',
    dateFrom: '',
    dateUntil: '',
  });

  return (
    <div className='App'>
      <div className='cvcontainer'>
        <h1>CV Generator</h1>
        <General data={generalInfo} setData={setGeneralInfo} />
        <Education data={educationInfo} setData={setEducationInfo} />
        <Experience data={experienceInfo} setData={setExperienceInfo} />
      </div>

      <div className='previewContainer'>
        <h2>Preview</h2>
        <div className='preview-section'>

          <div className="container">
            <p><strong>Name:</strong> {generalInfo.name}</p>
            <p><strong>Email:</strong> {generalInfo.email}</p>
            <p><strong>Phone:</strong> {generalInfo.phone}</p>
          </div>

          <div className="container">
            <h3>Education</h3>
            <p><strong>School Name:</strong> {educationInfo.schoolName}</p>
            <p><strong>Study Title:</strong> {educationInfo.studyTitle}</p>
            <p><strong>Study Date:</strong> {educationInfo.studyDate}</p>
          </div>

          <div className="container">
            <h3>Experience</h3>
            <p><strong>Company:</strong> {experienceInfo.company}</p>
            <p><strong>Position:</strong> {experienceInfo.position}</p>
            <p><strong>Responsibilities:</strong> {experienceInfo.responsibilities}</p>
            <p><strong>From:</strong> {experienceInfo.dateFrom}</p>
            <p><strong>Until:</strong> {experienceInfo.dateUntil}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
