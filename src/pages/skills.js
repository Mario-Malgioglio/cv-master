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
          <h3>Mercados de inversion</h3>
          <Skills skills={frontendSkills} colors={fontendSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>Cereales</h2>
          <Skills skills={backendSkills} colors={backendSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>Sistemas predictivos</h2>
          <Skills skills={soSkills} colors={soSkillsColors} />
        </div>
      </Container>
    
  )
}
