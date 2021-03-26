import React from 'react'
import {FiBell} from 'react-icons/fi'
import {FiMessageSquare} from 'react-icons/fi'
import {FiSearch} from 'react-icons/fi'


const Navbar = () => {

    return(
        <>
            <main class="main">
                <header class="header">
                    <div class="wrap d-flex">
                        <form>
                            <input type="search" />
                            <FiSearch className="search"/>
                        </form>
                        <nav class="menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Pages</a></li>
                                <li><a href="#"><FiBell /></a></li>
                                <li><a href="#"><FiMessageSquare /></a></li>
                                <li><p>Hello, Mike</p></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </main>
        </>
    )
}
export default Navbar