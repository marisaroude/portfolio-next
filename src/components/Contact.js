import Image from 'next/image'
import React, { useState } from 'react'
import style from '../styles/contact.module.css'
import profileMarisa from '../../public/images/profileState.svg'
import RenderButtons from './RenderButtons'
import { Button, Popover } from 'antd';

export default function Contact() {
    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    return (
        <div className={`flex items-center mt-7 p-8 flex justify-center ${style.container}`} >
            <Popover
                title="Open to work 💪"
                trigger="click"
                open={open}
                onOpenChange={handleOpenChange}
            >   <div className={style.imageContainer}>
                <Image src={profileMarisa} width={200} alt='imagenMarisa' />
                </div>
            </Popover>

            <div className='flex-col'>
                <h1 className={`text-6xl text-white`}>Hi<span className='text-salmon'>!</span> I am Marisa<span className='text-salmon'>.</span></h1>
                <RenderButtons section={'social'} />
            </div>
        </div>
    )
}
