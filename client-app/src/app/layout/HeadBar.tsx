import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import smLogo from '../../Images/geargamelogo.png';



export default function HeadBar(){

    const styles={

        headerst:{
            color: "#386641"
        },
        headLinks:{
            textDecoration: "none"
        },
        boldn: {
            fontWeight: '700',
            fontSize: '1.7rem'
        },
        headerSurv:{
            color: "#9A031E"
        },
        realImage:{
            height: '6rem'
        },
        dijon:{
            backgroundColor: '#F2E8CF'
        }

    }
    return (
        
            <Row style={styles.dijon}>
                <Col md={10} lg={12} sm={6} xs={2}>
                    <Row>
                        <Col className='pt-5 ps-5'><Link to="/store" style={styles.headLinks}><h2 style={{ ...styles.headerst, ...styles.boldn }}>STORE</h2></Link></Col>
                        <Col className='pt-5'><Link to="/survival" style={styles.headLinks}><h2 style={{ ...styles.headerSurv, ...styles.boldn }}>SURVIVAL</h2></Link></Col>
                        <Col className='pt-5'><Link to="/insurance" style={styles.headLinks}><h2 style={{ ...styles.headerst, ...styles.boldn }}>INSURANCE</h2></Link></Col>
                        <Col className='text-center pb-3'><img className="img-fluid rounded-circle" style={styles.realImage} src={smLogo} alt="logo" /></Col>
                        <Col className='pt-5'><Link to="/aboutus" style={styles.headLinks}><h2 style={{ ...styles.headerst, ...styles.boldn }}>ABOUT US</h2></Link></Col>
                        <Col className='pt-5'><span>search component here</span></Col>
                    </Row>
                </Col>
             </Row>
             
        
            
    )
}