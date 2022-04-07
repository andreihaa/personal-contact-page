import React, { useEffect, useState} from "react";
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { faCss3, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Loader from "react-loaders"

function About(){
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() =>{
        return setTimeout(() =>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray = {['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    /> 
                </h1>
                <p>
                I am a motivated, self-driven, organized and highly focused person with a comprehensive knowledge on how to maintain a professional, helpful and courteous relationship with others. 
                I consider myself an optimistic team-player and a perfectionist, thus striving to be successful on all accomplished tasks. 
                Currently I have 8 months of learning how to code online, through 1on1 mentorship classes and lots of exercises.
                </p>
                <p>
                In the last few months I have been experimenting with HTML/CSS, JavaScript, React. 
                I am far from calling myself a professional, but I have proven to myself that I am very determined to create this 180 degreee career change. 
                </p>
                <p>
                Besides programming and career changes, I am very passionate about: 
                    <li>Practing sports - Skiing, Biking, Kayaking, Hiking</li>
                    <li>Watching sports - F1, MotoGP, Football </li>
                    <li>Cooking</li>
                    <li>Traveling</li>
                    <li>Making music playlists</li>
                    <li>Discovering/Trying/Challenging new things and ideeas everyday</li>
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon 
                            icon={faHtml5} 
                            color="#F06529"    
                        />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon 
                            icon={faCss3} 
                            color="#28A4D9"    
                        />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon 
                            icon={faJsSquare} 
                            color="#EFD81D"    
                        />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon 
                            icon={faReact} 
                            color="#5ED4F4"    
                        />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon 
                            icon={faGithub} 
                            color="#4078c0"    
                        />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon 
                            icon={faNodeJs} 
                            color="#68a063"    
                        />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About; 