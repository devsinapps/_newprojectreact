import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">React JS</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to='/' class="nav-link" href="#">Main <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link to='other' class="nav-link" href="#">Other</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}