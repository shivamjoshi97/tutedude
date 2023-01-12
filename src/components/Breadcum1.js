import React from 'react'
import {NavLink } from "react-router-dom";
import Home from './Home';
import Enrolled from './Enrolled';
const Breadcum1 = () => {
  return (
    <nav aria-label="breadcrumb" className="ps-20 ms-10 py-4 mb-5" style={{position: "relative" , backgroundColor: "#fff"}}>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><span>UI/UX</span></li>
        <li className="breadcrumb-item">
          <NavLink to="/enrolled" className="navlink">Refer and Earn</NavLink>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcum1