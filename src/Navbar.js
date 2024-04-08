import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Home from './Home'
import Men from './Men'
import Women from './Women'
import Electronic from './Electronic'
import Jwellery from './Jwellery'

const Navbar = () => {
  return (

    <nav className="navbar">
      <div className="container">
      <h1 ><b>Fashion Hub</b></h1>
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/men">Men's Cloths</NavLink>
            </li>
            <li>
              <NavLink to="/women">Women's Cloths</NavLink>
            </li>
            <li>
              <NavLink to="/electronic">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/jwellery">Jwellery </NavLink>
            </li>
          </ul>
        </div>
        <br></br>
        <Routes>
            <Route  path='/' element={<Home></Home>}></Route>
            <Route  path='/men' element={<Men></Men>}></Route>
            <Route  path='/women' element={<Women></Women>}></Route>
            <Route  path='/electronic' element={<Electronic></Electronic>}></Route>
            <Route path='jwellery' element={<Jwellery></Jwellery>}></Route>
            
        </Routes>
       
      </div>
    </nav>
  )
}

export default Navbar