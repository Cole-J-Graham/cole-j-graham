import {NavLink} from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <nav>
            <NavLink className="home-link" end to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink className="project-link" end to="/projects">
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e"/>
            </NavLink>
            <NavLink className="about-link" end to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink className="contact-link" end to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' href='https://www.linkedin.com/in/cole-graham-0b2747278/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' href='https://github.com/Cole-J-Graham?tab=repositories'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' href='https://www.youtube.com/channel/UCoOqLnCx4R_93Qz2FebjnWA'
                >
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;