import React from 'react'
import style from '../styles/aboutme.module.css'
import Section from './Section'

export default function AboutMe() {
    return (
        <div className={`flex items-center p-20 w-5/7 ${style.container}`}>
            <Section section={'About me'} />
            <p className={`text-white text-xl w-9/12 ${style.paragraph}`}>
                I am an advanced student of Information Systems, I am currently doing freelance <span className='text-salmon'>web development.</span> I am eager to keep growing in this world of programming, working in a team, and the most important thing for me, to learn constantly.                </p>
        </div>
    )
}
