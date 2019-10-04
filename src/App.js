import React from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <main>
        <h1 className='page-title'>Welcome!</h1>
        <p>This is a simple project which uses React Virtualized for virtual list rendering. All the data is fetched from a public <a href='https://jsonplaceholder.typicode.com/'>API</a>
        </p>
        <Modal />
      </main>
    </div>
  );
}

export default App;
