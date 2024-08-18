'use client';

import { navLinks } from '@/constants'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className='sidebar'>
            <div className='flex size-full flex-col gap-4'>
                <Link href="/" className='sidebar-logo'>
                    <Image src='/assets/images/logo-text.svg' alt='logo' width={180} height={28} />
                </Link>

                <hr className="my-4 border-t border-gray-300" />

                <nav className='sidebar-nav'>
                    <SignedIn>
                        <ul className='sidebar-nav_elements'>
                            {
                                navLinks.map((link, index) => {
                                    const isActive = pathname === link.route;
                                    return (
                                        <li key={index} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                                            <Link href={link.route} className='sidebar-link'>

                                                <Image src={link.icon} alt={link.label} width={20} height={20} className={`${isActive && 'brightness-200'}`} />
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className='button bg-purple-gradient bg-cover'>
                            <Link href="/sign-in">Sign In</Link>
                        </Button>
                    </SignedOut>
                </nav>


            </div>
        </aside>)
}

export default Sidebar