import './App.css';
import Like from '../Like/Like.js';
import SocialMediaButtons from '../SocialMediaButtons/SocialMediaButtons.js';

function App() {

  const name = "Michael";
  
  return (
    <div className="App">
    <h1 className="AppHeading">Hello {name}</h1>
    
        <p> Some <SocialMediaButtons />   text</p>
    </div>
  );
}

export default App;
