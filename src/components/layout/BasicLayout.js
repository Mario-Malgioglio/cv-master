import React from "react"
import "./BasicLayout.scss"
import '../Profile/Profile.scss'
import Menu from "../Menu"
import Container from 'react-bootstrap/Container'


export default function BasicLayout() {
  
  return (
   <>
   
   
    <div className="wallpaper" />
    <div className="dark" />
   <Container fluid >
  
     <Menu />
     
</Container>
    </>
   
  )
}
