import React from 'react'
import { nav_items } from '../data'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='nav_bar'>
    {nav_items.map((item) =>{
      const {title,id,link} = item
      return(
        <div key={id} >
          <Link to={link} className="nav_items">{title}</Link>
        </div>
      )
    })}
    </div>
  )
}

export default Navbar