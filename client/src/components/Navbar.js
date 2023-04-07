import {NavLink} from 'react-router-dom'
import '../Main.css'

export const Navbar =() => {
    return (
        <header>
      
      
    <nav className="nav">
        <img src="../logo192.png" alt="react" className="nav-logo" />
        <ul className="nav-items">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/test'>Test</NavLink></li>
            <li>Contact</li>
        </ul>

       
    </nav>
    </header>
    )
}