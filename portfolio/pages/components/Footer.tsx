import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <a href="mailto:lutianle89@gmail.com?subject=SweetWords&body=Please send me a copy of your new program!" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/riku.kuri1234" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Riku-Hatano" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Riku-Hatano" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faAngleUp} />
                    </a>
                </li>
            </ul>
            <p>&copy; 2023 Riku Hatano</p>
        </footer>
    )
}

export default Footer;