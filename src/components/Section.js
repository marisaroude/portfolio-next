import React from 'react'
import style from '../styles/section.module.css'
export default function Section({ section }) {
    return (
        <div>
            <div className={style.sectionRight}>
                <h1 className={` text-4xl text-white mb-2`}>{section}</h1>
                <div className={`bg-stone-500 h-px w-auto ${style.line}`}></div>
            </div>
        </div>
    )
}
