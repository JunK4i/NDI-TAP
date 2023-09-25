
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import logo from '../assets/logo-no-background.svg'

const NavBar = () => {

    const handleSearch = () => {

    }

    return (
        <header className="border-red-900/10 w-28ll h-16 bg-white border-b">
            <nav className="flex flex-row items-center justify-between h-full">
                <div className="flex items-center justify-between flex-initial h-full gap-2">
                    <img className="h-3/4" src={logo} alt="sg events logo">
                    </img>
                    <form className="relative" onSubmit={handleSearch()}>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="dark:text-gray-400 w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="bg-gray-50 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg" placeholder="Search Events..." required></input>
                        <input type="submit" hidden></input>
                    </form>
                </div>
                <div className=" flex items-center justify-end flex-auto gap-1 text-sm font-bold text-gray-900">
                    <div className="rounded-3xl hover:bg-gray-300 px-3 py-2 cursor-pointer" onClick={useNavigate()}>
                        Log in
                    </div>
                    <div className="rounded-3xl hover:bg-gray-300 px-3 py-2 cursor-pointer">
                        Sign up
                    </div>
                </div>

            </nav>
        </header>
    )

}

export default NavBar
