import './App.css';
import './styles/login.css';
import './styles/navbar.css';
import './styles/dashboard.css';
import './styles/beginners.css';
import './styles/admin.css';
import './styles/account.css';
import './styles/settings.css';
import './styles/create.css';
import Log from './components/Log';
import Navbar from './components/Navbar';
import {Routes, Route, } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Beginners from './components/Beginners';
import Admin from './components/Admin';
import Account from './components/Account';
import Settings from './components/Settings';
import Create from './components/Create';

function App() {
  return (
    <div className="App">

          <Routes>
            <Route exact path='/' element={<Log />}/>
            {/* <Route path='/navbar' element={<Navbar />}/> */}
            <Route path='/dashboard' element={<Navbar><Dashboard /></Navbar>}/>
            <Route path='/beginners' element={<Navbar><Beginners /></Navbar>}/>
            <Route path='/admin' element={<Navbar><Admin /></Navbar>}/>
            <Route path='/account' element={<Navbar><Account /></Navbar>}/>
            <Route path='/settings' element={<Navbar><Settings /></Navbar>}/>
            <Route path='/create' element={<Navbar><Create /></Navbar>}/>
          </Routes>
    </div>
  );
}

export default App;
