import './App.css';
import Banner from './compontes/Banner/Banner';
import NavBar from './compontes/navbar/NavBar.js';
import RowPost from './compontes/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
