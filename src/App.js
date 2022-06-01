import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import HeaderNav from './Pages/Shared/HeaderNav/HeaderNav';

// demo https://klbtheme.com/bacola/multivendor/
// header code  https://codepen.io/cupcomcodes/pen/WNNNLem

function App() {
  return (
    <>
    <HeaderNav/>
      <Home/>
    </>
  );
}

export default App;
