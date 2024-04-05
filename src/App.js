import React, { useState } from 'react';

const StudentRecords = () => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  const addRecord = () => {
    if (name.trim() === '' || grade.trim() === '') {
      setError('Name and grade fields cannot be empty');
      return;
    }
    setError('');
    alert(`Record added:\nName: ${name}\nGrade: ${grade}`);
  };

  const clearFields = () => {
    if (name !== '' || grade !== '') {
      if (window.confirm('Are you sure you want to clear fields?')) {
        setName('');
        setGrade('');
      }
    }
  };

  return (
    <div className="container">
      <h2>Manage Student Records</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <label htmlFor="grade">Grade:</label>
      <input
        type="text"
        id="grade"
        name="grade"
        placeholder="Enter student grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />

      <br />

      {error && <div className="error">{error}</div>}

      <button onClick={addRecord}>Add Record</button>
      <button onClick={clearFields}>Clear Fields</button>
    </div>
  );
};

export default StudentRecords;
