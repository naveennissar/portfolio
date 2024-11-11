import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import resume from "../assets/resume/Naveen-Nissar.pdf";
import Typewriter from "typewriter-effect";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    <Typewriter
                      options={{
                        strings: ["Hi! I'm Naveen Nissar, Web Developer"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>

                  <p>
                    A versatile professional with a Bachelor’s in Computer
                    Science Engineering and extensive experience across software
                    engineering, digital marketing, and customer relations.
                    Proven ability to develop high-performance applications,
                    enhance customer satisfaction, and meet sales targets.
                    Strong technical expertise in CSS and a deep understanding
                    of e-commerce marketing, client engagement, and delivering
                    results in dynamic environments.
                  </p>
                  <a href={resume} download className="">
                    <button onClick={() => console.log("connect")}>
                      Resume <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
