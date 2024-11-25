import React from 'react'
import iconTailwind from '../../public/icons/icon-tailwindcss.svg'
import iconJavascript from '../../public/icons/icon-javascript.svg'
import iconCSS from '../../public/icons/icon-css.png'
import iconReact from '../../public/icons/icon-react.svg'
import iconNextjs from '../../public/icons/icon-nextjs.png'
import logoMarisa from '../../public/logos/tiny-logo.png'
import { Tooltip } from 'antd'
import Image from 'next/image'

export default function Footer() {
  const technologies = [
    { name: 'NextJS', image: iconNextjs },
    { name: 'React', image: iconReact },
    { name: 'JavaScript', image: iconJavascript },
    { name: 'CSS', image: iconCSS },
    { name: 'TailwindCSS', image: iconTailwind },
  ]
  return (
    <div className={`w-full p-6 `}>
      <div className={`bg-stone-500 h-px w-auto `}></div>
      <div className={`flex flex-col items-center`}>
        <Image
          src={logoMarisa}
          width={40}
          alt="logo of Marisa"
          style={{ borderRadius: '10px', marginTop: '1em' }}
        />
        <p className="text-white m-2">Created by Marisa Roude - 2024</p>
        <div className={`flex`}>
          {technologies &&
            technologies.map((item, index) => (
              <div key={index}>
                <Tooltip title={item.name}>
                  <Image
                    src={item.image}
                    width={20}
                    alt={item.name}
                    style={{ filter: 'invert(1)', marginRight: '5px' }}
                  />
                </Tooltip>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
