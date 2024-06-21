import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
    </Routes>
  );
}

export default App;
