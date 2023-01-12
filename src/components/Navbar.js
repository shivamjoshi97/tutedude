import React from 'react'
import Tutedude from "../images/Tutedude.png"

function Navbar ()
{
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white" style={{backgroundColor: "#fff !important"}}>
        <a class="navbar-brand" href="#"><img src={Tutedude} height="40"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarText">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link nav-text-muted" href="#">My Assignment</a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-text-muted" href="#">Chat With Mentor</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-flex lign-items-center" href="#">
                <span style={{marginToptop: "2px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#800080" class="bi bi-person-circle me-2" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </span>
            <span class="nav-text-active">Profile Name</span>
            <span style={{marginTop: "2px", marginLeft: "4px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#800080" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </span>
            </a>
            </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;
