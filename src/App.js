import './App.css';
import Random from './Components/Random';
import Tag from './Components/Tag';


function App() {
  return (
    <div>
      <h1 className = "heading">Memes Generator</h1>
      <div className = "Components">
        <Random />
        <Tag />
      </div>

    </div>   
);
}

export default App;
