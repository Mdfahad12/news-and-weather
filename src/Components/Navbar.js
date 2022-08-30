 import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return(
      <div className='active'>
        <nav className='ul'>
          <ul className='li'>
            <li>
            <Link className='a' to='/LoginGoogle'>signIn</Link>
            </li>
            <li>
            <Link className='a'li to='/Interval'>Home</Link>
            </li>
            <li>
            <Link className='a' to='/NewsApp'>NewsApp</Link>
            </li>
            <li>
            <Link className='a' to='/TempApp'>WeatherApp</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
    }
  