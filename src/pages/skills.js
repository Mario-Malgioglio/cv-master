import React from "react"
//import { Container } from "react-bootstrap"
import BasicLayout from "../components/layout/BasicLayout"
import Container from 'react-bootstrap/Container'
import Skills from "../components/Skills/Skills"
import {
  frontendSkills,
  fontendSkillsColors,
  backendSkills,
  backendSkillsColors,
  soSkills,
  soSkillsColors,
} from "../utils/skills"
import "../components/Skills/Skills.scss"
import '../components/layout/BasicLayout.scss'


export default function Index() {
  return (
    // <BasicLayout menuColor="#000"></BasicLayout>
    
      <Container fluid>
        <BasicLayout className='cover-full' />
        <div className="skills__block">
          <h4> Bolsa de comercio de Rosario: 
 Especialización en trading de derivados modulos I , II , y III </h4>
          <Skills skills={frontendSkills} colors={fontendSkillsColors} />
        </div>
        <div className="skills__block">
          <h4> Bolsa de comercio de Rosario: programa de formación.<br></br> </h4>
          <Skills skills={backendSkills} colors={backendSkillsColors} />
        </div>
        <div className="skills__block">
          <h4>Bolsa de comercio de Rosario: investigación en mejoras tecnológicas y técnicas para el sector agrícola Argentino en los ultimos 50 años</h4>
          <Skills skills={soSkills} colors={soSkillsColors} />
        </div>
      </Container>
    
  )
}
