import React from 'react'
import BasicLayout from "../components/layout/BasicLayout"
//import Container from 'react-bootstrap/Container'
import './index.scss'
import CV from '../components/CV/CV-MalgioglioStefano.pdf'
export default function cv() {
    function click(){
        window.open(CV,"_blank")
       
    
    }
    
    return (
        
        
        
        <div>
       
        <BasicLayout />
      {click()}
{window.open('https://stefano-malgioglio.netlify.app/')}
        
      
        
        
        </div>
    )
}
