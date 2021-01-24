import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import '../../style/sections/general.css';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, img2, resume, resume2 } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="README.MD" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade left duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} className="photo"/>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    `After working for more than 10 years as technician for IT companies I found in Web Development a real passion. I'm a technology lover and I do enjoy achieving new skills that let me find the better way to solve challenging issues. The learning process never ends!`}
                </p>
              
                <p className="about-wrapper__info-text text-style">
                  {paragraphTwo ||
                    'TECH STACK'}
                </p>
                <p className="about-wrapper__info-text text-style-stack">
                  {paragraphThree || 'JavaScript | React | NodeJS | Express | MongoDB | Mongoose | Handlebars | API REST | Git | GitHub | ES6 | HTML | CSS'}
                </p>
              
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume ENG
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume2}
                    >
                      Resume ES
                    </a>
                  </span>
                )}
                          </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
