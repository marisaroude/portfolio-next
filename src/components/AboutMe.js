import React from 'react'
import style from '../styles/aboutme.module.css'
import Section from './Section'

export default function AboutMe() {
    return (
        <div className={`flex items-center p-20 w-5/7 ${style.container}`}>
            <Section section={'About me'} />
            <p className={`text-white text-xl w-9/12 ${style.paragraph}`}>
                I'm an advanced student of Information Systems, currently I'm doing an internship at <span className='text-salmon'>DevLabs</span> developing a mobile application.
                I am mostly doing frontend development with the following main technologies: <span className='text-salmon'>React Native, TypeScript & Redux Toolkit</span>, but however, I also do backend development with <span className='text-salmon'>NodeJS, Express, PostgreSQL</span>.
            </p>
        </div>
    )
}
