import './App.css';
import Appbar from './components/Appbar';
import LeaveList from './components/LeaveList';
import * as React from 'react';
function App() {
  return (
    <div className="App">
     
      <Appbar />
      <LeaveList />
    </div>
  );
}

export default App;
