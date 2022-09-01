import { useContext } from 'react'
import "./index.css"
import ThemeContext from '../../context/ThemeContext'

function Footer() {
  const { theme } = useContext(ThemeContext)

  return (
    <div>
         <footer className={`d-flex justify-content-center align-items-center py-2 border-top ${theme}-theme`}>
            <small className="text-muted">It was created by <a href="https://github.com/AbdullahBogrek">Abdullah S. Böğrek</a> to develop a web-based machine learning project. You can find all source codes <a href="https://github.com/AbdullahBogrek/web-mnist">here</a>. © 2022</small>
        </footer>
    </div>
  )
}

export default Footer