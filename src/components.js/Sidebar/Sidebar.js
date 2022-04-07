import React from "react"; 
import { Link, NavLink } from "react-router-dom";
// import '../../index.scss'
import LogoA from '../../assets/images/logo-a.png'
import './Sidebar.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'


function Sidebar(){
    return (
        <div className="nav-bar">
            <Link className='logo' to='/'> 
                <img src={LogoA} alt='logo'/>
                {/* <img className='sub-logo' src={LogoAnd} alt='andrei'/> */}
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4e4d"/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' to='/about' className='about-link'>
                    <FontAwesomeIcon icon={faUser} color="#4d4e4d"/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' to='/contact' className='contact-link'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4e4d"/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                        target="_blank" 
                        rel='noreferrer' 
                        href='https://www.linkedin.com/in/andreiimbrisca/'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.facebook.com/andrei.imbrisca/'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.instagram.com/andreihaaa/'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/andreihaa'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
            <a id="mobile-link" href>
                <i class="fa-solid fa-bars"></i>
            </a>
        </div>
    )
}

export default Sidebar; 


//de ce exact nu e atat de exact? 
//de ce mult css nu merge de multe ori?

