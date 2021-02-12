import React from 'react'
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
            <div className="main-footer">
                <Row>
                    <Col sm={12} md={4} lg={3}>
                        <h4>Since Day One</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus et sollicitudin lacus. Aenean gravida eu tortor at tempus.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Etiam at pretium mi. 
                        </p>
                    </Col>
                    <Col  sm={12} md={4} lg={3}>
                    <h4 className="footer-titles">Account Info</h4>
                    <div className="lists">
                        <ul>
                            <li>Profile</li>
                            <li>My Cart</li>
                            <li>My Orders</li>
                        </ul>
                    </div>  
                    </Col>
                    <Col sm={12} md={4} lg={3}>
                    <h4 className="footer-titles">Need Help?</h4>
                    <div className="lists">
                        <ul>
                            <li>
                                Help
                            </li>
                            <li>
                                Get In Touch
                            </li>
                            <li>
                                Product Requests
                            </li>
                        </ul>
                    </div>  
                    </Col>
                    <Col sm={12} md={4} lg={3}>
                    <h4 className="footer-titles">About Us</h4>
                    <div className="lists">
                        <ul>
                            <li>
                               About Us
                            </li>
                            <li>Blog
                            </li>
                            <li>Terms & Conditions
                            </li>
                        </ul>
                    </div>   
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center py-3">
                        Copyright &copy; Day One
                    </Col>
                </Row>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
