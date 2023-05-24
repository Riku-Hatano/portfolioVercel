import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const JaNav = () => {
    return (
        <>
            <nav>
                <details>
                    <summary>
                        <FontAwesomeIcon icon={faBars} className="bar"/>
                    </summary>
                    <ul>
                        <li>
                            <Link to="/ja">home</Link>
                        </li>
                        <li>
                            <Link to="/ja/about">about</Link>
                        </li>
                        <li>
                            <Link to="/ja/contact">contact</Link>
                        </li>
                        <li>
                            <Link to="/ja/works">works</Link>
                        </li>
                        <li>
                            <Link to="/">english</Link>
                        </li>
                    </ul>
                </details>
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
                    <li>
                        <Link to="/">english</Link>
                    </li>
                </ul>
                <h2>Riku's portfolio</h2>
            </nav>
        </>
    )
}
export default JaNav;