
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

const Home = () => {
    return (
        <div className="bg-red flex flex-col w-full h-screen bg-white">
            <div className="flex-initial">
                <NavBar />
            </div>
            <div className="flex-auto">
                <h1>Home</h1>
            </div>
        </div>
    )
}

export default Home
