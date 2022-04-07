import React from 'react'
import "animate.css/animate.min.css"; 
import { AnimationOnScroll } from 'react-animation-on-scroll';
import s from './styles/Aboutme.module.css'
import Html from './img/Html.svg'
import cv from './img/Cv.pdf'
import { IoLogoJavascript,IoLogoReact,IoLogoNodejs } from "react-icons/io5";
import { DiMongodb,DiPostgresql,DiFirebase,DiCss3,DiHtml5,DiPython } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux,SiTypescript } from "react-icons/si";

const Aboutme = () => {
    return (
        <div className={s.AboutmeContainer}>

            <div className={s.Aboutme}>
            <AnimationOnScroll animateIn="animate__fadeInUp" >
                <h1 className={s.AboutmeText}>About me:</h1>
                <p className={s.Aboutmep}> I am a young man very fond of computers💻and technologies in general, always trying to deliver the best quality product and every day increasing my professional and personal knowledge.<br />
                    I started in the world of programming because since I was a child i've been in love with computers and video games 🎮,
                    I was interested in knowing how a video game is created and in the future be able to create one, a childhood dream that became what I love. 💛
                </p>
                <div className={s.button}>
                    <a href={cv} download="CV-KevinLeiva.pdf">
                        <button className={s.buttonDownload}>Download CV</button>
                    </a>
                </div>
            </AnimationOnScroll>
                <div className={s.AboutmeContainerTecnologies}>
                    <AnimationOnScroll animateIn="animate__fadeInUp" >

                    <h1>Abilities:</h1>
                    <div >
                       <ul className={s.abilities}>
                           <li className={s.js}><IoLogoJavascript></IoLogoJavascript>  JavaScript</li>
                           <li className={s.react}><IoLogoReact></IoLogoReact> React</li>
                           <li className={s.node}><IoLogoNodejs></IoLogoNodejs> NodeJs</li>
                           <li className={s.mongo}><DiMongodb></DiMongodb> Mongo</li>
                           <li className={s.sql}><DiPostgresql></DiPostgresql> Sql</li>
                           <li className={s.fb}><DiFirebase></DiFirebase> Firebase</li>
                           <li className={s.boot}><FaBootstrap></FaBootstrap> Bootstrap</li>
                           <li className={s.Css}><DiCss3></DiCss3> CSS</li>
                           <li className={s.Html}><DiHtml5></DiHtml5> Html</li>
                           <li className={s.Python}><DiPython></DiPython> Python</li>
                           <li className={s.Redux}><SiRedux></SiRedux> Redux</li>
                           <li className={s.Type}><SiTypescript></SiTypescript> TypeScript</li>
                       </ul>
                    </div>
                    </AnimationOnScroll>
                </div>
            </div>
            <img className={s.img} src={Html} ></img>
        </div>
    )
}

export default Aboutme