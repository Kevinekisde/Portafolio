import React from 'react'
import Aboutme from './Aboutme';
import Proyects from './Proyects';
import s from './styles/Home.module.css'
import 'animate.css';
import { BsGithub,BsLinkedin,BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import wave from './img/wave.svg'
import { NavLink  } from 'react-router-dom';



const Home = () => {
  return (
    <>
      <div className={s.containerHome}>
        <div className={s.Home}>
        <h1 className="animate__animated animate__backInDown">Hey, <span className={s.spanname}>I'm Kevin</span></h1>
        <h2>I’m a Fullstack Web Developer</h2>
        <div className={s.Tecnologies}>
          <ul>
            <li><a href="https://github.com/Kevinekisde"><BsGithub></BsGithub></a></li>
            <li><a href="https://www.linkedin.com/in/kevin-leiva-98208a184/"><BsLinkedin></BsLinkedin></a></li>
            <li><a href="https://wa.me/939418935"><BsWhatsapp></BsWhatsapp></a></li>
            <NavLink to="/form"><SiGmail></SiGmail></NavLink >
          </ul>
        </div>
        <img className={s.wave} src={wave}></img>
        <Aboutme></Aboutme>
        <Proyects></Proyects>
        </div>
      </div>
    </>
  )
}

export default Home