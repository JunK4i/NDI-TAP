
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import logo from '../assets/logo-no-background.svg'
import LoginSignupModal from "./LoginSignupModal"
import axios from "axios"

const NavBar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalType, setModalType] = useState("login");
    const [loading, setLoading] = useState(false);
    const handleSearch = () => {

    }

    const handleToggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    const handleClickLogin = () => {
        setModalType("login");
        setModalIsOpen(true);
    }

    const handleClickSignup = () => {
        setModalType("signup");
        setModalIsOpen(true);
    }

    // handle login, signup, logout and auth are not completed completely due to lack of time. and relative complexity
    // just to demo connection to backend, username: "tom" and password:"asdf" will return accessToken and refreshToken in cookie
    const handleLogin = (e) => {
        console.log('submitting')
        e.preventDefault();
        const form = e.target;
        const submit = {
            "username": form[0].value,
            "password": form[1].value,
        }
        postLogin(submit);
    }
    const postLogin = async (submit) => {
        setLoading(true);
        try {
            const response = await axios(`https://expressjs-mongoose-production-30d5.up.railway.app/auth`, {
                headers: { "Content-Type": "application/json" },
                credentials: 'include',
                method: 'POST',
                data: submit,
            });
            console.log(response);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <header className="border-red-900/10 w-28ll h-16 bg-white border-b">
            <nav className="flex flex-row items-center justify-between h-full">
                <div className="flex items-center justify-between flex-initial h-full gap-5 px-3 py-1">
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
                    <button className="rounded-3xl hover:bg-gray-300 px-3 py-2 cursor-pointer" onClick={handleClickLogin}>
                        Log in
                    </button>
                    <div className="rounded-3xl hover:bg-gray-300 px-3 py-2 cursor-pointer" onClick={handleClickSignup}>
                        Sign up
                    </div>
                    <div className="relative">
                        <LoginSignupModal type={modalType} isOpen={modalIsOpen} handleClickClose={handleToggleModal} handleLogin={handleLogin} />
                    </div>
                </div>
            </nav>

        </header>
    )

}

export default NavBar
