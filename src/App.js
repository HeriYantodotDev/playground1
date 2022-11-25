import './App.css';
import { useRef } from 'react';



function App() {
  const value = useRef();

  const popup = () => {
    alert(`Hey! You input ${value.current.value} !!!`);
  }

  return (
    <div className="App">
      <h1 >Hello World</h1>
      <input ref={value} type="text"/>
      <button onClick={popup}>Click</button>
    </div>
  );
}

export default App;
