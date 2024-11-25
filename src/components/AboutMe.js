import React from 'react'
import style from '../styles/aboutme.module.css'
import Section from './Section'

export default function AboutMe() {
  return (
    <div className={`flex items-center p-20 w-5/7 ${style.container}`}>
      <Section section={'About me'} />
      <p className={`text-white text-xl w-9/12 ${style.paragraph}`}>
        I am an advanced student in Information Systems,currently, I have played
        an important role in four diverse projects on web and mobile platforms.
        My experience includes working with both frontend and backend
        technologies, giving me a well-rounded understanding of application
        development. My passion for programming is reflected in my enthusiasm
        for learning and adapting to new tools and frameworks. I thrive in
        collaborative environments where I can contribute to innovative
        solutions and continuously improve my skills.
      </p>
    </div>
  )
}
