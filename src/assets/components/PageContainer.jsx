import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Container, Row, Col, Tab, Tabs, Nav } from "react-bootstrap";

class PageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}; //connect with the tab list
    }

    getLandingPage() {
        return (
            <Container fluid className="landing-wrapper">
                <Row className="content-row">
                    <Col lg={{ span: 4, offset: 0 }} className="my-auto">
                        <img
                            className="landing-photo"
                            src={require("../../assets/photos/landing_pic.jpg")}
                            alt="landing photo"
                        />
                    </Col>
                    <Col lg={{ span: 4, offset: 1 }} className="my-auto">
                        <Container fluid className="landing-text-container">
                            <p className="text-center my-auto">
                                Alan Fang was born in New York City and raised
                                in north Jersey by Chinese immigrants. This May,
                                he graduated (on Zoom) from
                                <span className="highlight">
                                    {" "}
                                    Johns Hopkins University{" "}
                                </span>{" "}
                                with a BA in Writing Seminars and will attend
                                <span className="highlight"> NYU</span>’s MFA
                                program in the fall. His work has appeared in
                                <span className="highlight">
                                    {" "}
                                    sidereal magazine
                                </span>{" "}
                                and the{" "}
                                <span className="highlight">
                                    Asian American Writer’s Workshop
                                </span>
                                .
                            </p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }

    getAboutPage() {
        return (
            <Container fluid className="about-wrapper">
                <Row className="content-row">
                    <Col lg={{ span: 5, offset: 0 }} className="my-auto">
                        <Container fluid className="about-text-container">
                            <h4 className="text-header">Biography</h4>
                            <p className="my-auto">
                                Alan Fang hails from the east side of Manhattan
                                and is the child of Chinese immigrants. A high
                                school obsession with{" "}
                                <span className="highlight">
                                    Allen Ginsberg
                                </span>{" "}
                                has somehow led to his concerted effort to make
                                writing poetry into a profession. He currently
                                lives in Baltimore where he studies Writing
                                Seminars at the{" "}
                                <span className="highlight">
                                    {" "}
                                    Johns Hopkins University
                                </span>{" "}
                                and has recently been offered a poet fellowship
                                at the{" "}
                                <span className="highlight">
                                    {" "}
                                    Martha’s Vineyard Institute of Creative
                                    Writing
                                </span>
                                . He enjoys dancing, cooking Asian food, and
                                reading manga.
                            </p>
                        </Container>
                    </Col>
                    <Col lg={{ span: 4, offset: 1 }} className="my-auto">
                        <img
                            className="about-photo"
                            src={require("../../assets/photos/about_pic.jpg")}
                            alt="landing photo"
                        />
                    </Col>
                </Row>
            </Container>
        );
    }

    getWorksPage() {
        return (
            <Container fluid className="works-wrapper">
                <Row className="content-row">
                    <Col lg={{ span: 8, offset: 1 }} className="my-auto">
                        <Container fluid className="works-text-container">
                            <h4 className="text-header">Publications</h4>
                            <p className="my-auto entry">
                                <span className="highlight underline">
                                    Queen Mother of the West 西王母
                                </span>
                                , sidereal magazine, May 2019
                            </p>
                            <p className="my-auto entry">
                                <span className="highlight underline">
                                    After Peace
                                </span>
                                , Asian American Writers' Workshop, June 2020
                            </p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }

    getContactPage() {
        return (
            <Container fluid className="contact-wrapper">
                <Row className="content-row">
                    <Col lg={{ span: 8, offset: 1 }} className="my-auto">
                        <Container fluid className="contact-text-container">
                            <h4 className="text-header">Contact</h4>
                            <p className="my-auto top-text">Follow me here:</p>
                            <p className="my-auto">
                                <span className="highlight underline">
                                    Instagram
                                </span>
                            </p>
                            <p className="my-auto">
                                <span className="highlight underline">
                                    Twitter
                                </span>
                            </p>
                            <p className="my-auto">
                                <span className="highlight underline">
                                    Linkedin
                                </span>
                            </p>
                            <p className="my-auto bottom-text">
                                Email me{" "}
                                <span className="highlight underline">
                                    here
                                </span>
                            </p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }

    //need to figure this out to programmatically put focus on items
    //setFocus() {
    //    window.document.getElementById("landing").focus();
    //}

    render() {
        //this.setFocus();
        return (
            <Container fluid className="page-container">
                <Tab.Container
                    defaultActiveKey="landing"
                    className="list-inline"
                >
                    <Row className="page-container-row">
                        <Col lg={{ span: 2, offset: 0 }}>
                            <Nav
                                variant="pills"
                                className="flex-column side-bar"
                            >
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="landing"
                                        className="landing"
                                        id="landing"
                                    >
                                        Alan Fang
                                    </Nav.Link>
                                    <Nav.Link
                                        eventKey="about"
                                        className="about"
                                    >
                                        About
                                    </Nav.Link>
                                    <Nav.Link
                                        eventKey="works"
                                        className="works"
                                    >
                                        Works
                                    </Nav.Link>
                                    <Nav.Link
                                        eventKey="contact"
                                        className="contact"
                                    >
                                        Contact
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col lg={{ span: 10 }}>
                            <Tab.Content>
                                <Tab.Pane eventKey="landing">
                                    {this.getLandingPage()}
                                </Tab.Pane>
                                <Tab.Pane eventKey="about">
                                    {this.getAboutPage()}
                                </Tab.Pane>
                                <Tab.Pane eventKey="works">
                                    {this.getWorksPage()}
                                </Tab.Pane>
                                <Tab.Pane eventKey="contact">
                                    {this.getContactPage()}
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                <Row className="icon-row d-flex">
                    <a href="#">
                        <img
                            className="contact-icon"
                            src={require("../icons/instagram.png")}
                            alt="instagram"
                        />
                    </a>
                    <a href="#">
                        <img
                            className="contact-icon"
                            src={require("../icons/twitter.png")}
                            alt="twitter"
                        />
                    </a>
                    <a href="#">
                        <img
                            className="contact-icon"
                            src={require("../icons/linkedin.png")}
                            alt="linkedin"
                        />
                    </a>
                </Row>
            </Container>
        );
    }
}

export default PageContainer;
