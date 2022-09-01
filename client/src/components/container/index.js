import { useContext } from 'react'

import Navbar from "../navbar"
import Canvas from "../canvas"
import Accordion from "../accordion"
import Footer from "../footer"

import ThemeContext from '../../context/ThemeContext'

import "./index.css"

function Container() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`${theme}-theme`}>        
            <Navbar />
            <Canvas/>
            <Footer/>
            <Accordion/>
        </div>
    )
}

export default Container