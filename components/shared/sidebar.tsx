import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className='flex size-full flex-col gap-4'>
                {
                    navLinks.map((link, index) => (
                        <Link key={index} href={link.route} className='flex gap-2 items-center'>

                            <Image src={link.icon} alt='link' width={20} height={20} />
                            <span>{link.label}</span>

                        </Link>
                    ))
                }
            </div>
        </aside>)
}

export default Sidebar