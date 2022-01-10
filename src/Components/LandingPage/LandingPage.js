import React from 'react'
import "./LandingPage.css"
import { Form, Row, Col, Button } from "react-bootstrap";
// import Link from "react-router"

export default function LandingPage() {
    return (
        <div className="main-div">
            <div className="head">
                <h1>Trell Quiz App</h1>
            </div>
            <div className="main-form">
                <Row>
                    <Col lg={12} style={{ display: "flex", justifyContent: "center",paddingTop:"5%" }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            {/* <Link to={"/Questions"}>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Link> */}
                        </Form>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
