import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginScreen/>}/>
      <Route path='/homescreen' element={<HomeScreen/>}/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
