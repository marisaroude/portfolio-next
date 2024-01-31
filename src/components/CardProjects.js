import Image from 'next/image'
import React, { useState } from 'react'
import style from '../styles/cardProjects.module.css'
import iconGithub from '../../public/icons/icon-github.svg'
import iconDeploy from '../../public/icons/icon-monitor.png'
import { Tooltip } from 'antd'

export default function CardProjects({ name, technologies, image, description, linkGithub, linkDeploy , client, linkClient}) {
    const [githubHovered, setGithubHovered] = useState(false);
    const [deployHovered, setDeployHovered] = useState(false);
    return (
        <div className={`w-2/5 h-auto p-5 m-2 border-2 border-neutral-800 rounded-xl flex flex-col ${style.container}`}>
            <p className={`text-xl text-white text-center`}>{name}</p>
            <div className={`mt-2 mb-5 flex flex-wrap`}>
                {technologies &&
                    technologies.map((item, index) => (
                        <div key={index}>
                            <Tooltip title={item.name}>
                                <Image src={item.image} width={20} alt={item.name} style={{ filter: 'invert(1)', marginRight: '5px' }} />
                            </Tooltip>
                        </div>
                    ))}
            </div>
            <div className={style.imageCard}>
                <Image src={image} />
            </div>
            <p className={`text-white text-sm mb-4`}>{description}
            {client && linkClient &&
                <a className='text-salmon' href={linkClient} target='_blank'>{client}</a>
            }
            </p>
            <div className={`flex justify-center space-x-4 mt-auto`}>
                {linkGithub && (
                    <a
                        href={linkGithub}
                        target='_blank'
                        onMouseEnter={() => setGithubHovered(true)}
                        onMouseLeave={() => setGithubHovered(false)}
                        style={{ position: 'relative', width: '32px', overflow: 'hidden', transition: 'width 0.3s' }}
                    >
                        <Image src={iconGithub} width={32} style={{ filter: 'invert(1)', transform: githubHovered ? 'scale(1.1)' : 'scale(1)' }} />
                    </a>
                )}
                {linkDeploy && (
                    <a
                        href={linkDeploy}
                        target='_blank'
                        onMouseEnter={() => setDeployHovered(true)}
                        onMouseLeave={() => setDeployHovered(false)}
                        style={{ position: 'relative', width: '32px', overflow: 'hidden', transition: 'width 0.3s' }}
                    >
                        <Image src={iconDeploy} width={32} style={{ filter: 'invert(1)', transform: deployHovered ? 'scale(1.1)' : 'scale(1)' }} />
                    </a>
                )}

            </div>
        </div>
    )
}
