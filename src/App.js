import Home from './pages/Home';
import Profile from './pages/Profile';
import UserPage from './pages/UserPage';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import LoggedRoute from './components/LoggedRoute';
import { useState } from 'react';


function App() {
  const [changeColor, setChangeColor] = useState(true);

  
  return (
    <div>
      {/* <h1 style = {{color:{ changeColor ? 'red' : 'blue'} }}>Hello</h1>
      <button onClick={() =>setChangeColor(!changeColor)}>Change Color</button> */}
  <Routes>
    <Route exact path = '/' element ={<LoggedRoute pageComponent={<Home/>}/>} />
    <Route exact path = '/profile' element ={<LoggedRoute pageComponent={<Profile/>}/>} />
    <Route exact path = '/:userName' element = {<UserPage/>} />
	  <Route path='/login' element={<Login/> } />
</Routes>
</div>
  );
}
//no user name tem : pq eh oq a pessoa colocar
//

export default App;
