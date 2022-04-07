import React, { useEffect, useState } from "react";
import './Contact.scss'
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Contact(){
    
    const [letterClass, setLetterClass] = useState('text-animate');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() =>{
        return setTimeout(() =>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])
    function validateFields(){
        if(name !== '' && email !== '' && subject !== '' && message !== '' ){
            return true; 
        }
        else{
            return false; 
        }
    }

    function sendEmail(e){
        if(validateFields()){
            emailjs.send("service_e5y4f4t","template_h6bptr5",{
                name: name,
                message: message,
                subject: subject,
                email: email,
                },'NzGya7v0_LfyLb8qf')
                .then(() =>{
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                    alert('Message succesfully sent!');
                    
                    // window.location.reload(false)
                },
                () => {
                    alert('Failed to send message')    
                }
            )
        }
        else{
            alert('you have to complete all fields');
        }
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}
                        letterClass={letterClass}
                    />
                </h1>
                <p className="contactP">
                    I'm interested in finding an internship or a junior developer role in a company that 
                    encourages and supports ambitious learners. 
                    <br></br>
                    <br></br>
                    I will do my best to continue learning new skills and improving, developing 
                    the skills that I learned so far. 
                </p>
                <div className="contact-form">
                    {/* <form ref={refForm} onSubmit={sendEmail}> */}
                        <ul>
                            <li className="half">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                /> 
                            </li>
                            <li className="half">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                /> 
                            </li>
                            <li>
                                <input 
                                    placeholder="Subject"
                                    type="text" 
                                    name="subject" 
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </li>
                            <li>
                                <textarea 
                                    placeholder="Message" 
                                    name="message" 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                /> 
                            </li>
                            <li>
                                <input 
                                    type="button" 
                                    className="flat-button" 
                                    value="SEND"
                                    onClick={sendEmail}
                                    />
                            </li>
                        </ul>
                    {/* </form> */}
                </div>
            </div>
            <div className="info-map">
                Andrei Imbrisca
                <br></br>
                Romania
                <br></br>
                Timisoara
                <br></br>
                <span>imbrisca.andrei@outlook.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[45.7538355, 21.2257474]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[45.7538355, 21.2257474]}>
                        <Popup>I am here</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Contact; 