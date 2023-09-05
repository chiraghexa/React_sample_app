import './App.css';
import Login from './components/Login';
import Readdata from './components/Userdata/Readdata';
import Home from './components/Dashboard/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (

    <div className="App">



      <Router>

        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/read" element={<Readdata />} />

        </Routes>
      </Router>
    </div>

  );
}

export default App;
