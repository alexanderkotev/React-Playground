import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/header.scss';

function Dropdown() {

    const [showContent, setShow] = useState(false);

     useEffect(() => {
        if (showContent === true) {
            document.addEventListener('click', hideMenu);
        }
    }, [showContent]);

    let hideMenu = () => {
        document.removeEventListener('click', hideMenu);
        setShow(false);    
    }

    return (
        <div className="Dropdown" >

            <div className="menu">
                <div className="menu-item">
                    <Link to="/">Home</Link>
                </div>
                <div className="menu-item dropdown-menu" onClick={() => {setShow(!showContent)}}>
                    <a href="#">Menu <span className="dropdown-arrow text-xs">{showContent ? '▲' : '▼'} </span> </a>
                {showContent ?
                    (
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <Link to="/comments">Comments</Link>
                            </div>
                            <div className="dropdown-item">
                                <Link to="/posts">Posts</Link>
                            </div>
                            <div className="dropdown-item">
                                <Link to="/photos">Photos</Link>
                            </div>
                            <div className="dropdown-item">
                                <Link to="/form">Tailwind Form</Link>
                            </div>
                        </div>
                    )
                    :
                    (null)
                    }
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
