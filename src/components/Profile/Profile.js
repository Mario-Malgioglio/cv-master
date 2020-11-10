import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
//import Social from "./Social"
import profileImage from "../../images/stefano-bolsa.jpg"
import "./Profile.scss"

const data = [
  {
    title: "Edad:",
    info: "23 años",
  },
  {
    title: "Dirección:",
    info: "3105, Diamante, Entre Rios",
  },
  {
    title: "E-Mail:",
    info: "stefanomalgioglio@hotmail.com",
  },
  {
    title: "Telefono:",
    info: "+54 343 4983457",
  },
]

export default function Profile() {
  return (
    <div className="profile">
      <div className="wallpaper" />
      <div className="dark" />
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImage} fluid />
          </Col>
          <Col xs={12} md={8} className="info__data">
            {/* <span>¡HOLA!</span> */}
            <p>Stefano Malgioglio</p>
            <p>Licenciado en Economía</p>
            <hr />
            <div className="more-info">
              {data.map((item, index) => (
                <div key={index} className="item">
                  <p>{item.title}</p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        {/* <Social />  */}
     
      </Container> 
    </div>
  )
}
