import { Col, Row } from 'react-bootstrap';
import  '../../app/layout/css/styles.css'
import arrow from '../../Images/arrowBaby.png'
import insurance from '../../Images/insurance.png'
import blueArrow from '../../Images/blueArrow.png'
import beigeArrow from '../../Images/beigeArrow.png'
import { Link } from 'react-router-dom';
import gearlogo from '../../Images/geargamelogo2.png';
import logotext from '../../Images/Logo-text.png';
import phone from '../../Images/phone.png';
import fb from '../../Images/fb.png';
import mail from '../../Images/mail.png';
import insta from '../../Images/insta.png';
import '../../fonts/Panchang/Panchang-Variable.ttf'

export default function HomeComp(){
   
     return (
        <>
             <Row className='sector second-sector align-items-center' lg={12} md={12} sm={12} xs={6}>
                <Col md={6}>
                
                </Col>
                <Col md={6}>
                    <h1 className='header-font header-color-beige'>Check all</h1>
                    <h1 className='header-font header-color-beige checky'>products</h1>
                    <div className='arrowPad'>
                        <img src={arrow} alt='beige'/>
                    </div>
                    
                </Col>
            </Row>
            <Row className='sector sector-blue'>
                <Col lg={12} md={12} sm={12}>
                    <Row className='text-center'>
                        <h1 className='header-font header-color-beige'>Insurance</h1>
                    </Row>
                    <Row className='pt-5 text-center'>
                        <Col lg={6} md={6} sm={6} xs={12}>
                            <img src={insurance} alt="insurance"/>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={12}>
                            <p className='lorem lorem-beige'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            </p>
                        </Col>
                    </Row>
                     <Row className='mt-5'>
                         <Col lg={12} className='align-items-center'>
                            <Row>
                                <Col></Col>
                                <Col className='d-flex justify-content-center'>
                                     <div className='align-items-center button-wrapper button-wrapper-beige'>
                                         <Link className='button-link button-link-blue' to='/insurance'><span>READ MORE</span><img className='ms-2' src={blueArrow} alt='arrow' /></Link>
                                     </div>
                                </Col>
                                <Col></Col>
                            </Row>
                           
                         </Col>
                     </Row>
                </Col>
             </Row>
             <Row className='sector fourth-sector'>
                    <Col lg={12} md={12} sm={12}>
                        <Row className='d-flex justify-content-center mt-5 text-center'>
                            <h2 className='header-font header-color-red'>Survival Course</h2>
                        </Row>
                        <Row>
                            <Col lg={6}></Col>
                            <Col lg={6}>
                                <p className='lorem lorem-beige'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                </p>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                         <Col lg={12} className='align-items-center'>
                            <Row>
                                <Col></Col>
                                <Col className='d-flex justify-content-center'>
                                     <div className='align-items-center button-wrapper button-wrapper-red'>
                                         <Link className='button-link button-link-beige' to='/insurance'><span>READ MORE</span><img className='ms-2' src={beigeArrow} alt='arrow' /></Link>
                                     </div>
                                </Col>
                                <Col></Col>
                            </Row>
                           
                         </Col>
                     </Row>
                    </Col>

             </Row>
             <Row className='sector sector-beige'>
             <Col lg={12} md={12} sm={12}>
                        <Row className='d-flex justify-content-center mt-5 text-center'>
                            <h2 className='header-font header-color-green'>ABOUT US</h2>
                        </Row>
                        <Row className='mt-5'>
                            <Col lg={6}> <img className='fluid logo-image ms-5' src={gearlogo} alt='logo' /></Col>
                            <Col lg={6}>
                                <p className='lorem lorem-green me-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                </p>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                         <Col lg={12} className='align-items-center'>
                            <Row>
                                <Col>
                                   
                                </Col>
                                <Col className='d-flex justify-content-center'>
                                     <div className='align-items-center button-wrapper button-wrapper-green'>
                                         <Link className='button-link button-link-beige' to='/insurance'><span>READ MORE</span><img className='ms-2' src={beigeArrow} alt='arrow' /></Link>
                                     </div>
                                </Col>
                                <Col></Col>
                            </Row>
                           
                         </Col>
                     </Row>
                    </Col>

             </Row>
             <Row className='sector sector-green'>
                <Col lg={12} md={12} sm={12}>
                     <Row className='d-flex justify-content-center mt-5 text-center'>
                         <h2 className='header-font header-color-beige'>CONTACT US</h2>
                     </Row>
                     <Row className='d-flex mt-5 justify-content-center text-center'>
                        <Col lg={2}>
                            <img src={phone} alt='phone'/>
                        </Col>
                        <Col lg={2}><img src={mail} alt='phone'/></Col>
                        <Col lg={2}><img src={insta} alt='insta'/></Col>
                        <Col lg={2}><img src={fb} alt='fb'/></Col>
                     </Row>
                     <Row className='d-flex mt-3 justify-content-center text-center'>
                        <Col lg={2}><span className='header-color-beige'>+359 812 345 6789</span></Col>
                        <Col lg={2}><span className='header-color-beige'>geargame@gmail.com</span></Col>
                        <Col lg={2}><span className='header-color-beige'>@GearGame</span></Col>
                        <Col lg={2}><span className='header-color-beige'>@GearGame</span></Col>
                     </Row>
                     <Row className='d-flex justify-content-center mt-5 text-center'>
                        <Col lg={12} md={12} sm={12}>
                            <img src={logotext} alt='logo-text' />
                        </Col>
                     </Row>
                </Col>
             </Row>
            
        </>
    )
}