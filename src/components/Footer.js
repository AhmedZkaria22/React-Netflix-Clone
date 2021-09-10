import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <Container>
            <Row>                
                <Col xl='7' lg='7' md='12' sm='12' xs='12'>
                    <p> © 2021 copyright all right reserved , Designed by <a href='linkedin.com/in/ahmed-zakaria-a554a4183'>Ahmed Zkaria</a>  </p>
                </Col>
                <Col xl='5' lg='5' md='12' sm='12' xs='12'>
                    <nav>
                        <Link to="/ReactNetflixHome">Home</Link>            
                        <Link to="/ReactNetflixMediaCenter">Media Center</Link>
                    </nav>
                </Col>
            </Row>
            </Container>
        </footer>
    )
}

export default Footer
