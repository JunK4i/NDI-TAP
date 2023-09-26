import { useState } from "react";
import PropTypes from "prop-types";

const LoginSignupModal = ({ type, isOpen, handleClickClose, handleLogin }) => {
    const [modalType, setModalType] = useState(type);
    const renderLoginModal = () => {
        return (
            <div id="authentication-modal" tabIndex="-1" className="flex justify-end fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    <div className=" relative bg-white rounded-lg shadow">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" onClick={handleClickClose}>
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="lg:px-8 px-6 py-6">
                            <h3 className="mb-4 text-xl font-medium text-gray-900">Sign in</h3>
                            <form className="space-y-6" action="#" onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="username" className=" block mb-2 text-sm font-medium text-gray-900">Your username</label>
                                    <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your username" required></input>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-white" required></input>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login to your account</button>
                                <div className="text-sm font-medium text-gray-500">
                                    Not registered? <a href="#" className="hover:underline text-blue-700" onClick={setModalType("signup")}>Create account</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderSignupModal = () => {
        return (
            <div id="authentication-modal" tabIndex="-1" className="flex justify-end fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    <div className=" relative bg-white rounded-lg shadow">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" onClick={handleClickClose}>
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="lg:px-8 px-6 py-6">
                            <h3 className="mb-4 text-xl font-medium text-gray-900">Sign up</h3>
                            <form className="space-y-6" action="#" onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="username" className=" block mb-2 text-sm font-medium text-gray-900">Your username</label>
                                    <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your username" required></input>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-white" required></input>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login to your account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (!isOpen) {
        return <></>;
    }

    return (
        <>
            {modalType === "login" ? renderLoginModal() : renderSignupModal()}
        </>
    )

}
LoginSignupModal.propTypes = {
    type: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleClickClose: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
};
export default LoginSignupModal;