import React, { useState } from 'react';
import github from '../../public/icons/icon-github.svg';
import desktop from '../../public/icons/icon-home.svg';
import projectTasks from '../../public/images/projectTasks.png';
import Image from 'next/image';
import style from '../styles/slider.module.css';

export default function Slider() {
    const [hover, setHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`swiffy-slider`}
        >
            <ul className={`slider-container `} >
                <li>
                    <div className={`flex flex-col justify-center items-center ${style.containerSlider}`}>
                        <Image src={projectTasks} alt="Project Tasks" />
                        {hover && (
                            <div className={`absolute flex flex-col justify-center items-center ${style.hover}`}>
                                <h1 className={`text-5xl ${style.sliderText}`}>Tasks Projects</h1>
                                <div className={`flex flex-wrap mt-6 ${style.sliderIcons}`}>
                                    <Image src={github} alt="GitHub" />
                                    <Image src={desktop} alt="Desktop" />
                                </div>
                            </div>
                        )}
                    </div>
                </li>
                <li><img src="https://source.unsplash.com/nKAglN6HBH8/1600x900" alt="Slide 2" /></li>
                <li><img src="https://source.unsplash.com/E9ZwWcMGzj8/1600x900" alt="Slide 3" /></li>
            </ul>

            <button type="button" className="slider-nav"></button>
            <button type="button" className="slider-nav slider-nav-next"></button>

            <div className="slider-indicators">
                <button className="active"></button>
                <button></button>
                <button></button>
            </div>
        </div>
    );
}
