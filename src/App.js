import React from 'react';
import './App.css';

import { FlowProvider } from './contexts/FlowContext';
import DiagramFlow  from './components/DiagramFlow';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <FlowProvider>
      <div style={{display: 'flex',height:'100vh'}}>
        <Sidebar />
        <DiagramFlow/>
      </div>
    </FlowProvider>
  );
}

export default App;
