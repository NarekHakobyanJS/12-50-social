
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Profile from './pages/Profile'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMeAuthThunk } from './store/authReducer';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMeAuthThunk())
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/profile/:id' element={<Profile /> }/>
      </Routes>
    </div>
  );
}

export default App;
