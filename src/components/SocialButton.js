import Image from 'next/image'
import React from 'react'

export default function SocialButton({ type, icon, link }) {
    return (
        <div>
            <a href={link} target="_blank">
                <button type="button" className='rounded-xl p-1.5 mr-2 mt-2 bg-transparent hover:bg-stone-700 border-solid border-2 border-stone-700'>
                    <div className='flex flex-nowrap items-center justify-center'>
                        <Image src={icon} width={20} style={{ marginRight: '10px', filter: 'invert(1)' }} alt={`logo de ${type}`}/>
                        <span className='text-white text-sm'>{type}</span>
                    </div>
                </button>
            </a>
        </div>
    )
}

