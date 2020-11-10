import React from "react"
import Container from 'react-bootstrap/Container'
import BasicLayout from "../components/layout/BasicLayout"
import Profile from '../components/Profile/Profile'
import "./index.scss"

const IndexPage = () => (
  
    <Container fluid>
    <BasicLayout />
    
    <Profile/>
    </Container>
)

export default IndexPage
