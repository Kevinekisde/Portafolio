import React from 'react'
import Email from './img/Email.svg'
import { BsGithub,BsLinkedin,BsWhatsapp } from "react-icons/bs";
import s from './styles/Form.module.css'

export default function Form() {
    return (
        <div className={s.container}>
            <div className={s.cajita}>
                <div className={s.Form}>
                    <h1 className={s.TextPrimary}>Let's talk</h1>
                    <p className={s.Paragraph}>To request a quote or want to meet up for coffee,
                        contact us directly or fill out the form and we will
                        get back to you promptly.
                    </p>
                    <div className={s.Formulation}>
                        <form action="https://formsubmit.co/kevinomg9@gmail.com" method="POST">
                            <div className={s.inputt}>
                                <h3>Your Name</h3>
                                <input className={s.input} type="text" name="name" required />
                                <h3>Your Email</h3>
                                <input className={s.input} type="email" name="email" required />
                                <h3>Your Message</h3>
                                <textarea placeholder="Type something if you want" className={s.area} name="Message" required></textarea>
                                <button className={s.button} type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={s.Imgandcontact}>
            <img className={s.img} src={Email}></img>
            <ul>
            <li><a href="https://github.com/Kevinekisde"><BsGithub></BsGithub></a></li>
            <li><a href="https://www.linkedin.com/in/kevin-leiva-98208a184/"><BsLinkedin></BsLinkedin></a></li>
            <li><a href="https://wa.me/939418935"><BsWhatsapp></BsWhatsapp></a></li>
          </ul>

                </div>
            </div>

        </div>
    )
}

