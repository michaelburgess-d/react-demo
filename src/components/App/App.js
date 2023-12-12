import './App.css';
import Like from '../Like/Like.js';

function App() {

  const name = "Michael";
  
  return (
    <div className="App">
        <h1 className="AppHeading">Hello {name}</h1>
        <p> <Like /> Some text</p>
    </div>
  );
}

export default App;
