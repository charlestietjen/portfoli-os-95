import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Taskbar, Window } from './components';

function App() {

  useEffect(() => {
    document.title = 'Gob95'
  })
  return (
    <>
      <div style={{ height: '100vh' }}>
        <div style={{ height: '95%', backgroundColor: '#008080'}}>
          <Window>
            Hello
          </Window>
        </div>
        <Taskbar />
      </div>
    </>
  );
}

export default App;
