import React from 'react'
import { ReactComponent as Logo } from '../images/list-task.svg'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
                <Logo width="30" height="24" className="d-inline-block align-text-top me-2"/>
                <a className="navbar-brand" href="/">My To-Do List</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/">Home</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
