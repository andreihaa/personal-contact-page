import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import './Home.scss';
import '../Layout/Layout.scss'
import LogoA from '../../assets/images/logo-a.png'
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import LogoEu from "../../assets/images/logo-eu.jpg"
import LogoAlt from "../../assets/images/logo-alt.jpg"
import Loader from "react-loaders";

function Home(){
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['n','d','r','e','i','.'];
    const jobArray = ['W', 'a', 'n', 'n', 'a', 'b', 'e', ' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e',' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p','e','r', '.'];
    const hello = ['H','e','l','l','o', ','];

    useEffect(() =>{
        return setTimeout(() =>{
            setLetterClass('text-animate-hover')
        },4500)
    },[])
    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <span className='tagImg'>
                    &lt;img src='Andrei'/&gt;
                </span>
                <h1>
                    <  AnimatedLetters 
                        letterClass={letterClass}   
                        strArray={hello} 
                        index={11}
                    />
                    <br></br>
                    <span className={`${letterClass} _16`}>M</span>
                    <span className={`${letterClass} _17`}>y</span>
                    <span className={`${letterClass} _18`}>&nbsp;</span>
                    <span className={`${letterClass} _19`}>n</span>
                    <span className={`${letterClass} _20`}>a</span>
                    <span className={`${letterClass} _21`}>m</span>
                    <span className={`${letterClass} _22`}>e</span>
                    <span className={`${letterClass} _23`}>&nbsp;</span>
                    <span className={`${letterClass} _24`}>i</span>
                    <span className={`${letterClass} _25`}>s</span>
                    <img src={LogoA} alt="name"/>
                    <AnimatedLetters 
                        letterClass={letterClass}   
                        strArray={nameArray} 
                        index={26}
                    /> <br></br>
                    <AnimatedLetters 
                         letterClass={letterClass}   
                         strArray={jobArray} 
                         index={35}
                    />
                </h1>
                <h2>
                    Learning HTML/ CSS / Javascript / React
                </h2>
                <div className="card">
                    <img className='eu' src={LogoEu} alt="eu"/>
                </div>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home; 

