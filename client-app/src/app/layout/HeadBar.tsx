import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import CustomDropDown from './CustomDropDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export default function HeadBar(){
    return (
        <Container className='headbar-class' fluid>
            <Row>
                <Col xs={4}>Logo here</Col>
                <Col xs md="2" className='customCol1'>
                    <CustomDropDown />
                </Col>
                <Col xs={2}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type="search"
                            placeholder="Търсене на продукти"
                            aria-label="Search"
                        />
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col xs={3} />
                <Col><Button className="basicButton" variant='success'>Вход</Button> | <FontAwesomeIcon icon={faShoppingCart} /></Col>
            </Row>
        </Container>
    )
}