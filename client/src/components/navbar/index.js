import { useContext } from 'react'
import "./index.css"
import ThemeContext from '../../context/ThemeContext'

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div> 
        <nav className={`navbar ${theme}-theme border-bottom shadow`}>
            <div className="container">
                <a className={`navbar-brand ${theme}-theme`} href='/'><i className="fa-solid fa-diagram-project me-2"></i> MNIST Handwritting Digit - Predictor</a>
                <a href='/' onClick={() => setTheme(theme === "light" ? "dark" : "light" )} className={`text-${theme === "dark" ? "warning" : "dark"}`}><i className={`fa-solid fa-${theme === "dark" ? "sun" : "moon"} fa-lg bg-warining`}></i></a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
