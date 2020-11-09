import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import "../Menu/Menu.scss"




export default function Menu(props) {
//   const { menuColor } = props
// console.log(menuColor)
  return (
    <header
      className="menu"
      //  style={{ backgroundColor: menu|| "transparent" }}
    >
      <Container >
        <ul >
          <li >
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
        </ul>
      </Container>
   </header>
  )
}
