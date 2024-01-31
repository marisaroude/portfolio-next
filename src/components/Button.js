import Image from 'next/image'
import React from 'react'

export default function Button({ type, icon,link }) {
    return (
        <div>
            <a href={link}>
                <button type="button" className='w-36 rounded-xl p-2.5 m-2 bg-gray-light hover:bg-stone-600 border-solid border-2 border-white'>
                    <div className='flex flex-nowrap items-center justify-center'>
                        <Image src={icon} width={20} style={{ marginRight: '10px', filter: 'invert(1)' }} alt={`logo de ${type}`} />
                        <span className='text-white'>{type}</span>
                    </div>
                </button>
            </a>
        </div>
    )
}

