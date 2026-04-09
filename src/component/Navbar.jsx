import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container m-auto ">
                <div className="navbar-start">
                    <a className=" text-2xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu space-x-3 menu-horizontal px-1">
                        <li><NavLink to='/' className='btn btn-ghost hover:bg-white rounded-xl'>Home</NavLink></li>
                        <li><NavLink to='/listed' className='btn btn-ghost hover:bg-white rounded-xl'>Listed Book</NavLink></li>
                        <li><NavLink to='read' className='btn btn-ghost hover:bg-white rounded-xl'>Read Book</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <a className="btn bg-green-500 text-white">Sign In</a>
                    <a className="btn btn-accent text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;