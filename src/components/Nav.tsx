import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav>
                <details>
                    <summary>
                        <FontAwesomeIcon icon={faBars} className="bar"/>
                    </summary>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/contact">contact</Link>
                        </li>
                        <li>
                            <Link to="/works">works</Link>
                        </li>
                    </ul>
                </details>
                <h2>Riku's portfolio</h2>
            </nav>
        </>
    )
}
export default Nav;