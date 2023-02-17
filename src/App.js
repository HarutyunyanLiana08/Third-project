
import './App.css';
import Header from './Header';
import Main from './Main';
// import Home from './Home';
import Products from './Products';
import {
  Routes,
  Route,
  Link
}
from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
     <Header />
     <Main />
     <Routes>
     
      <Route path="/" element={<Main />}/>
      


     </Routes>

      
    </div>
  );
}

export default App;
