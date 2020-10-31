import React, { Component } from 'react'
import "./App.css"
import { Link} from "react-router-dom"
export class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                   {/* <p>Welcom To Our School</p>  */}
                   <nav>
            <ul className="main-nav">
              <li>
                <Link className="link" to="/">Home</Link>
              </li>
              
              {'    '}
              <li>
                <Link className="link" to="/about">About</Link>
              </li>
             
              {'   '}
              <li>
                <Link className="link" to="/login">Login</Link>
              </li>
              {'   '}
              <li>
                <Link className="link" to="/Contactus">Contact</Link>
              </li>
            </ul>
       </nav>
                </header>
            </div>
        )
    }
}

export default Header
