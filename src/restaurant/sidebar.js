import React from 'react'
import {FaBars} from 'react-icons/fa'

const Sidebar = () => {

    return(
        <>
            <nav className="sidebar">
                <h1 className="space-1" >
                    <span className="side-head">
                        <span className="side-head-2">CHOP</span>CHOP
                        <span><FaBars /></span>
                    </span>
                    {/* <span className="sidemenu-toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span> */}
                </h1>
                <ul className="side-list">
                    <li>
                        <a href="" className="side-links">Dashboard</a>
                    </li>
                    <li>
                        <a href="" className="side-links">Orders</a>
                    </li>
                    <li>
                        <a href="" className="side-links">Menus</a>
                    </li>
                    <li>
                        <a href="" className="side-links">Customers</a>
                    </li>
                    <li>
                        <a href="" className="side-links">Payments</a>
                    </li>
                    <li>
                        <a href="" className="side-links">Settings</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Sidebar