import './App.css';
import React from 'react';
import LoginForm from './login'; // Import the Login component
//link to the login page


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm /> {/* Render the Login component */}
      </header>
    </div>
  );
}

export default App;
