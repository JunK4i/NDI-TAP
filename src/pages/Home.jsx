
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import Carousel from "../components/Carousel"
import Gallery from "../components/Gallery"
const Home = () => {
    return (
        <div className="bg-red flex flex-col w-full h-screen bg-white">
            <div className="flex-initial">
                <NavBar />
            </div>
            <div className="flex-auto">
                <div>
                    <Carousel />
                </div>
                <div>
                    <Gallery />
                </div>
            </div>
        </div>
    )
}

export default Home
