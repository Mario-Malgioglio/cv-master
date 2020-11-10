import React from 'react'
import BasicLayout from "../components/layout/BasicLayout"
import Container from 'react-bootstrap/Container'
import './index.scss'
import CV from '../components/CV/CV-MalgioglioStefano.pdf'
export default function cv() {
    return (
        <div>
        {/* <Container fluid> */}
        <BasicLayout />
        
        <a href={CV}   target='_bln' >CV</a>
        
        </div>
    )
}
