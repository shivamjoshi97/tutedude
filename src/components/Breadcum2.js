import React from 'react'
import { NavLink } from 'react-router-dom';
const Breadcum2 = () => {
  return (
    <nav aria-label="breadcrumb" className="ps-20 ms-10 py-4 mb-5" style={{position: "relative" , backgroundColor: "#fff"}}>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><span style={{color: " #111 !important"}}>UI/UX</span></li>
        <li className="breadcrumb-item"><NavLink to="/" className="navlink">Refer and Earn</NavLink></li>
        <li className="breadcrumb-item"><span style={{color: " #111 !important" }}>Friends Referred</span></li>
      </ol>
    </nav>
  )
}

export default Breadcum2