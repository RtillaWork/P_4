import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav
                className='navbar navbar-expand-md navbar-dark bg-dark'
                aria-label='Portfolio for NE'>
                <div className='container-fluid'>
                    <NavLink className='navbar-brand' href='#' to='/'>
                        RtillaWork Portfolio
                    </NavLink>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarsToogle'
                        aria-controls='navbarsToogle'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'/>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarsToogle'>
                        <ul className='navbar-nav me-auto mb-2 mb-md-0'>
                            <li className='nav-item'>
                                {
                                    // <NavLink className='nav-link active' aria-current='page' href='#' to='/'>
                                    //     Home
                                    //   </NavLink>
                                }
                            </li>

                            <li className='nav-item'>
                                <NavLink
                                    className='nav-link'
                                    href='#'
                                    tabIndex='-1'
                                    aria-disabled='true'
                                    to='/about'>
                                    About
                                </NavLink>
                            </li>

                            {
                                // <li className='nav-item dropdown'>
                                //   <NavLink
                                //     className='nav-link'
                                //     href='#'
                                //     tabIndex='-1'
                                //     aria-disabled='true'
                                //     to='/projects'>
                                //     Projects
                                //   </NavLink>
                                // </li>
                            }
                            <li className='nav-item dropdown'>
                                <NavLink
                                    className='nav-link'
                                    href='#'
                                    tabIndex='-1'
                                    aria-disabled='true'
                                    to='/contact'>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
