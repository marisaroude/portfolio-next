import React from 'react'
import style from '../styles/workprojects.module.css'
import Section from './Section'
import projects from '../utils/projects.json'
import ProjectDescription from './ProjectDescription'
export default function WorkProjects() {
  return (
    <div className={`flex items-center p-20 w-5/7 ${style.container}`}>
      <Section section={'Work Projects'} />
      <div className={`${style.containerProjectDescription}`}>
        {projects?.map((project, index) => (
          <div key={index}>
            <ProjectDescription {...project} />
          </div>
        ))}
      </div>
    </div>
  )
}
