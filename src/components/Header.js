import React from 'react'
import logoMarisa from '../../public/logos/logo-marisa.png'

import Image from 'next/image'
export default function Header() {
    return (
        <div>
            <header>
                <nav className="mx-auto flex items-center justify-between p-4 lg:px-8 block" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#">
                            <Image src={logoMarisa} width={130} style={{borderRadius: '15px'}} alt='logoMarisa'/>
                        </a>
                    </div>
                </nav>
            </header>

        </div>
    )
}
