import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class nav extends Component {
     render() {
          return (
               
                   <div>
                    <nav class="navbar navbar-dark blue-gradient ">
                    <div class="container">
                    <a class="navbar-brand" href="/">
                    GH-Finder
                       
                    </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
              <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
          )
     }
}
