import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Wishes from './components/Wishes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Wishes/:title" element={<Wishes />} >
    </Route>
    </Routes>
    </BrowserRouter>
     );
}

export default App;
