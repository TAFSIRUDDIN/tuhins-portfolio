import React from 'react';
import './Footer.css'
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className="d-flex justify-content-center" style={{backgroundColor: '#3A3838'}} fluid>
            <small className="footer">Copyright &#169; 2021 Tafsir Uddin 'React Version'</small>
        </Container>
    );
};

export default Footer;