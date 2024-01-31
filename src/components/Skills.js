// Skills.js
import React from 'react';
import Section from './Section';
import Image from 'next/image';
import { Tooltip } from 'antd';
import skillsData from '../utils/skills.json';
import style from '../styles/skills.module.css'; 

export default function Skills() {
    return (
        <div className={`flex items-center p-20 w-5/7 ${style.container} `}>
            <Section section={'Skills'} />
            <div className='flex flex-wrap justify-center'>
            {skillsData.map((item, index) => (
                <div key={index} className={` ${style.logoContainer}`}>
                    <Tooltip title={item.name}>
                        <Image 
                            src={require(`../../public/icons/${item.image}`)} 
                            width={60} 
                            alt={item.name} 
                            style={{margin: '15px'}}
                            className={style.logoImage} 
                        />
                    </Tooltip>
                </div>
            ))}

            </div>
        </div>
    );
}
