import React from 'react'
import style from '../styles/aboutme.module.css'

export default function ProjectDescription(project) {
  const descriptionItems = project.description
    .split('*')
    .filter(sentence => sentence.trim() !== '')

  return (
    <div className={'mb-20'}>
      <div className={'flex items-center justify-between'}>
        <h1 className={`text-salmon text-2xl `}>{project.name}</h1>
        <span className={`text-white text-sm`}>{project.location}</span>
      </div>
      <div>
        <span className="text-white">{`(${project.duration})`}</span>
        <ul className={`text-white text-xl w-9/12 mt-5 ${style.paragraph}`}>
          {descriptionItems.map((item, index) => (
            <li key={index} className="mt-2">
              ● {item.trim()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
