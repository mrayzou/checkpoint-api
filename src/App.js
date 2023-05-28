 import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Users from './Component/Pages/Users';
import Navigation from './Component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Component/Profile';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <Routes>
<Route path='/' element={<Home /> }/>
<Route path='/Users' element={<Users/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Profile/:id' element={<Profile/>}/>

    </Routes>
     </div>
  );
}

export default App;
