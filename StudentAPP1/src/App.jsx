import React from "react";
import ReactDOM from "react-dom/client"; // Corrected import
import StudentForm from './StudentForm';
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: StudentAPP1</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <StudentForm /> {/* Render the StudentForm component */}
  </div>
);

// Ensure your HTML has an element with the id 'app'
// For ReactDOM version 18+
const container = document.getElementById("app"); // Get the container element
const root = ReactDOM.createRoot(container); // Correctly create a root
root.render(<App />); // Use the root to render your app
