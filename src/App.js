// src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [studentMarks, setStudentMarks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:14000/api/student-marks')
      .then(response => response.json())
      .then(data => setStudentMarks(data));
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Student Marks</h2>
      <ul>
        {studentMarks.map((item) => (
          <li key={item.id}>{item.name}: {item.marks}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
