import React from 'react'
import "animate.css/animate.min.css"; 
import { AnimationOnScroll } from 'react-animation-on-scroll';
import s from './styles/Proyects.module.css'
import minPoke from'./img/PokeapiMin.png'
import minCup from'./img/Cup.jpg'
import minBresh from'./img/minBresh.jpg'
import { BsYoutube,BsGithub } from "react-icons/bs";  

const Proyects = () => {
  return (
    
    <div className={s.proyectContainer}>
      <AnimationOnScroll animateIn="animate__rotateInUpLeft" >
        <div className={s.proyects}>
          <h1>My main Proyects</h1>
          <div className={s.cards}>
            <div className={s.card}>
              <img className={s.img} src={minPoke} />
              <div className={s.text}>
                <h1>Pokeapi</h1>
                <div className={s.link}>
                <a className={s.Git} href><BsGithub></BsGithub></a>
                <a className={s.yt} href="https://youtu.be/_5UAnJd3Jto"><BsYoutube></BsYoutube></a>
                </div>
              </div>
              </div>
            <div className={s.card}>
            <img className={s.img} src={minCup} />
              <div className={s.text}>
                <h1>Cupcake</h1>
                <div className={s.link}>
                <a className={s.Git} href="https://github.com/Kevinekisde/Tienda-Cupcake-React"><BsGithub></BsGithub></a>
                <a className={s.yt} href="https://youtu.be/Qb6KKPyPG4s"><BsYoutube></BsYoutube></a>
                </div>
              </div>
              </div>
            <div className={s.card}>
            <img className={s.img} src={minBresh} />
              <div className={s.text}>
                <h1>Bresh</h1>
                <div className={s.link}>
                <a className={s.yt} href="https://youtu.be/KCdw72Od4pA"><BsYoutube></BsYoutube></a>
                </div>
              </div>
              </div>
          </div>
        </div>
    </AnimationOnScroll>
    </div>
  )
}

export default Proyects