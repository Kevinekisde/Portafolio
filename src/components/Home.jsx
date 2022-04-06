import React from 'react'
import Aboutme from './Aboutme';
import Proyects from './Proyects';
import s from './styles/Home.module.css'
import 'animate.css';

import ReactImg from './img/React.png'
import JsImg from './img/js.png'
import Html from './img/Html.png'
import wave from './img/wave.svg'
import CSS from './img/CSS.png'


const Home = () => {
  return (
    <>
      <div className={s.containerHome}>
        <div className={s.Home}>
        <h1 className="animate__animated animate__backInDown">Hey, <span className={s.spanname}>I'm Kevin</span></h1>
        <h2>I’m a Fullstack Web Developer</h2>
        <div className={s.Tecnologies}>
          <img src={ReactImg} style={{ width: '80px', height: '80px' }} className="animate__animated animate__rotateIn" />
          <img src={JsImg} style={{ width: '80px', height: '80px' }} className="animate__animated animate__pulse" />
          <img src={Html} style={{ width: '100px', height: '80px' }} className="animate__animated animate__pulse" />
          <img src={CSS} style={{ width: '80px', height: '80px' }} className="animate__animated animate__pulse" />
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