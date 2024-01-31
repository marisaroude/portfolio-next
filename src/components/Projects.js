import React from 'react'
import Section from './Section'
import CardProjects from './CardProjects';
import style from '../styles/projects.module.css'
import iconTailwind from '../../public/icons/icon-tailwindcss.svg'
import iconJavascript from '../../public/icons/icon-javascript.svg'
import iconCSS from '../../public/icons/icon-css.png'
import iconReact from '../../public/icons/icon-react.svg'
import iconGraphql from '../../public/icons/icon-graphql.svg'
import iconNextjs from '../../public/icons/icon-nextjs.png'
import iconBootstrap from '../../public/icons/icon-bootstrap.svg'
import iconPostgresql from '../../public/icons/icon-postgresql.svg'
import iconExpress from '../../public/icons/icon-expressjs.svg'
import iconNode from '../../public/icons/icon-nodejs.svg'

import imageTasks from '../../public/images/projectTasks.png'
import imageCripto from '../../public/images/projectCripto.png'
import imageSpa from '../../public/images/projectSPA.png'
import imageViandas from '../../public/images/projectViandas.png'


export default function Projects() {


    return (
        <div className={`flex items-center justify-center p-20 w-5/7 ${style.container}`} >
         <Section  section={'Projects'} />

            <div className={`flex flex-wrap ${style.containerCard}`}>

                <CardProjects
                    name={'Viandas Project'}
                    technologies={[
                        { name: 'NextJS', image: iconNextjs },
                        { name: 'React', image: iconReact },
                        { name: 'JavaScript', image: iconJavascript },
                        { name: 'CSS', image: iconCSS },
                        { name: 'Bootstrap', image: iconBootstrap },
                        { name: 'PostgreSQL', image: iconPostgresql },
                        { name: 'GraphQL', image: iconGraphql },
                        { name: 'ExpressJS', image: iconExpress },
                        { name: 'NodeJS', image: iconNode },

                    ]}
                    image={imageViandas}
                    description={'Internal system of a kitchen with inclusion of orders in thermal printer. Implementation of login, ABM of orders, clients, menu, missing items.'}
                    linkDeploy={'https://drive.google.com/file/d/1qW8-C65w2DMGa7HLDe5aJPvAyR1xOjaf/view?usp=sharing'}
                />

                <CardProjects
                    name={'Tasks Project'}
                    technologies={[
                        { name: 'React', image: iconReact },
                        { name: 'JavaScript', image: iconJavascript },
                        { name: 'CSS', image: iconCSS },
                        { name: 'TailwindCSS', image: iconTailwind },
                    ]}
                    image={imageTasks}
                    description={'The tasks are added to the form which does not allow uploading if one of the fields is empty. Then the data is sent in a tab on the right, here it can be marked as complete.'}
                    linkGithub={'https://github.com/marisaroude/tareas-app'}
                    linkDeploy={'https://startling-haupia-d0b61a.netlify.app/'}
                />

                <CardProjects
                    name={'Cryptocoins Project'}
                    technologies={[
                        { name: 'React', image: iconReact },
                        { name: 'JavaScript', image: iconJavascript },
                        { name: 'CSS', image: iconCSS },
                        { name: 'TailwindCSS', image: iconTailwind },
                    ]}
                    image={imageCripto}
                    description={'Cryptocurrency quotes with the information provided by CryptoCompare API '}
                    linkGithub={'https://github.com/marisaroude/project-cripto'}
                    linkDeploy={'https://effulgent-caramel-31ae2c.netlify.app/'}
                />

                <CardProjects
                    name={'SPA-Aerolab Project'}
                    technologies={[
                        { name: 'JavaScript', image: iconJavascript },
                        { name: 'CSS', image: iconCSS },
                    ]}
                    image={imageSpa}
                    description={'Creation of a vanilla SPA using webpack as development environment. The SPA was built under the minimum requirements of the Aerolab challenger.'}
                    linkGithub={'https://github.com/marisaroude/SPA-Aerolab'}
                    linkDeploy={'https://wonderful-crostata-17ea10.netlify.app/'}
                />
            </div>


        </div>

    );
}
