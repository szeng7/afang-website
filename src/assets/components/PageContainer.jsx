import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Container, Row, Col, Tab, Tabs, Nav } from "react-bootstrap";

class PageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false /* if on tablet/desktop, show desktop view, else show mobile */,
        };
        this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 800 });
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
                                Alan Fang is an up and coming writer and has
                                received a poet fellowship from the{" "}
                                <span className="highlight">
                                    {" "}
                                    Martha's Vineyard Insitute of Creative
                                    Writing
                                </span>{" "}
                                and a{" "}
                                <span className="highlight">
                                    {" "}
                                    Woodrow Wilson Research Fellowship
                                </span>
                                . His work has appeared in{" "}
                                <span className="highlight">
                                    sidereal magazine{" "}
                                </span>
                                and{" "}
                                <span className="highlight">
                                    {" "}
                                    Asian American Writer's Workshop
                                </span>
                                . He got a BA in Writing Seminars from{" "}
                                <span className="highlight">
                                    Johns Hopkins University{" "}
                                </span>{" "}
                                and currently attends{" "}
                                <span className="highlight">NYU</span>'s
                                Creative Writing Program.
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
                                and is the child of Chinese immigrants. A
                                childhood dream of becoming a computer scientist
                                was quickly derailed by a high school obsession
                                with{" "}
                                <span className="highlight">
                                    Allen Ginsberg
                                </span>
                                , leading to his concerted effort to make
                                writing poetry into a profession. He currently
                                lives in New York City, attending{" "}
                                <span className="highlight">NYU</span>'s
                                Creative Writing Program. He enjoys dancing,
                                cooking Asian food, and reading manga.
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
                                <a href="https://siderealmagazine.com/2019/05/15/queen-mother-of-the-west/">
                                    <span className="highlight underline">
                                        Queen Mother of the West 西王母
                                    </span>
                                </a>
                                , sidereal magazine, May 2019
                            </p>
                            <p className="my-auto entry">
                                <a href="https://aaww.org/after-peace/">
                                    <span className="highlight underline">
                                        After Peace
                                    </span>
                                </a>
                                , Asian American Writers' Workshop, June 2020
                            </p>
                            <p className="my-auto entry">
                                <span className="highlight underline">
                                    follow the pen
                                </span>
                                , 2020 Emerging Poet Prize Finalist, July 2020
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
                                <a href="https://www.instagram.com/alan_y_fang/">
                                    <span className="highlight underline">
                                        Instagram
                                    </span>
                                </a>
                            </p>

                            <p className="my-auto">
                                <a href="https://twitter.com/fang_ym">
                                    <span className="highlight underline">
                                        Twitter
                                    </span>
                                </a>
                            </p>
                            <p className="my-auto">
                                <a href="https://www.linkedin.com/in/alanyenmingfang/">
                                    <span className="highlight underline">
                                        Linkedin
                                    </span>
                                </a>
                            </p>
                            <p className="my-auto bottom-text">
                                Email me{" "}
                                <a href="mailto:afang151@gmail.com">
                                    <span className="highlight underline">
                                        here
                                    </span>
                                </a>
                            </p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }

    render() {
        if (this.state.isDesktop) {
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
        } else {
            //return mobile
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
}

export default PageContainer;
