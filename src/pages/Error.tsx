import React from 'react';
import notFoundLogo from '../404.png'
import '../App.css';

function Error() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          404 not found
        </p>
        <img src={notFoundLogo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Error;
