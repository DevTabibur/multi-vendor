import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import HeaderNav from './Pages/Shared/HeaderNav/HeaderNav';
import Shop from './Pages/Shop/Shop';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';

// demo https://klbtheme.com/bacola/multivendor/
// header code  https://codepen.io/cupcomcodes/pen/WNNNLem

function App() {
  return (
    <>
    <HeaderNav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/blogs' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </>
  );
}

export default App;
