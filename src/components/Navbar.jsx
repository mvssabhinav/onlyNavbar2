import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <nav>
            <a href="#"><img src="https://img.freepik.com/free-vector/open-book-isolated_1284-43075.jpg?ga=GA1.1.1626343651.1695441162&semt=ais_hybrid&w=740" alt="" /></a>
            <ul>
                <li><Link to="/" style={{textDecoration:'none'}}>Home</Link></li>
                <li><Link to="./about"  style={{textDecoration:'none'}}>About</Link></li>
                <li><Link to="./contactUs"  style={{textDecoration:'none'}}>Contact us</Link></li>
                <li><Link to="./services"  style={{textDecoration:'none'}}>Services</Link></li>
            </ul>
            <div className='btn1' >
                <button>sign up</button>
                <button>sign in</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar