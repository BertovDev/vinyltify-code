import React from 'react'
import { Container, Row,Col, Stack} from 'react-bootstrap'
import { Github,Linkedin,Twitter } from 'react-bootstrap-icons'

const LOGIN_URI = "http://localhost:3000"
const CLIENT_ID = "YOUR_CLIENT_ID"

const AUTH_URL =
  `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${LOGIN_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export default function Login() {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center' style={{minHeight:"100vh",color:"white",paddingBottom:"200px"}}>
        <h1 className='mb-2' style={{fontSize:"100px"}}>Viniltify</h1>
        <h3 className='text-center'>Play your favorite songs in a turntable!</h3>
        <a href={AUTH_URL} className="btn btn-success btn-lg mt-4">Login with Spotify</a>
        <Row>
          <Col className='mt-3'>
            <a href="https://github.com/BertovDev" target="_blank" className='p-2'>
            <Github color="white" size={35}/>
            </a>
            <a href="https://www.linkedin.com/in/bautista-berto/" target="_blank" className='p-2'>
              <Linkedin color="white" size={35}/>
            </a>
            <a href="https://twitter.com/tongenjs" target="_blank" className='p-2'>
              <Twitter color="white" size={35}/>
            </a>
          </Col>
        </Row>
    </Container>
  )
}
