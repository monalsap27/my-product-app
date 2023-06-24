// eslint-disable-next-line no-unused-vars
import React from 'react'
import {  navBar } from '../theme/navbar'
import { isiHeader} from '../theme/navbar'
// import {imgHead} from '../assets/imgHeader
import imgHead from './../assets/image-1.png'


const Header = () => {
    return (

        <>
        <div className="flex h-24 bg-sky-900 py-8 px-32 justify-between">
            <h1 className="text-xl font-bold text-white  cursor-pointer">
                Logo
            </h1>
            <ul className="flex space-x-6">
                {navBar.map((nav) => (
                    <li key={nav.id} className="text-sm font-bold text-white cursor-pointer">
                        {nav.title}
                    </li>
                ))}
            </ul>
        </div>
            
            <div className="flex h-96 bg-sky-900 py-8 px-32">
                <div className="flex w-full h-full flex-col space-y-7">
                    <p className="text-5xl text-white">{isiHeader.title}</p>
                    <p className="text-sm text-white text-ellipsis">{isiHeader.content}</p>
                </div>
                <div className="w-full h-full justify-center hidden lg:flex">
                    <img className="h-96" src={imgHead} alt="img" /> 
                </div>
            </div>
            
        </>
        
    )
}

export default Header