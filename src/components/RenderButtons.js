import React from 'react'
import Button from './Button'
import iconAbout from '../../public/icons/icon-about.svg'
import iconProject from '../../public/icons/icon-projects.svg'
import iconSkills from '../../public/icons/icon-skills.png'
import iconContact from '../../public/icons/icon-contact.png'
import iconLinkedin from '../../public/icons/icon-linkedin.svg'
import iconCv from '../../public/icons/icon-cv.png'
import iconGitHub from '../../public/icons/icon-github.svg'
import iconHome from '../../public/icons/icon-home.svg'
import SocialButton from './SocialButton'

export default function RenderButtons({ section }) {
    const cv = "https://drive.google.com/file/d/1ecifXSKZZWDQLHXhlfoN-2lHozY0iyp3/view?usp=sharing"
    return (
        <div className=''>
            {section === 'options' &&
                <div className='flex flex-wrap justify-center'>
                    <Button type={"About me"} icon={iconAbout} />
                    <Button type={"Projects"} icon={iconProject} link={'#projects'}/>
                    <Button type={"Skills"} icon={iconSkills} />
                </div>
            }
            {section === 'social' &&
                <div className='flex flex-wrap '>
                    <SocialButton type={'LinkedIn'} icon={iconLinkedin} link={'https://www.linkedin.com/in/marisaroudedeveloper/'}/>
                    <SocialButton type={'GitHub'} icon={iconGitHub} link={'https://github.com/marisaroude/'}/>
                    <SocialButton type={'Curriculum'} icon={iconCv} link={cv}/>
                    <SocialButton type={'marisaroude1@gmail.com'} icon={iconContact} link={'mailto:marisaroude1@gmail.com'}/>
                </div>
            }
        </div>
    )
}
