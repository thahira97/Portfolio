import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"
import htmlLogo from "../assets/img/html.png"
import cssLogo from "../assets/img/css.png"
import jsLogo from "../assets/img/javascript.png"
import reactLogo from "../assets/img/react.png"
import rubyLogo from "../assets/img/ruby.png"
import jqueryLogo from "../assets/img/jquery.png"
import bootLogo from "../assets/img/bootstrap.svg"
import nodeLogo from "../assets/img/nodejs.png"
import expressLogo from "../assets/img/express.png"
import railsLogo from "../assets/img/rails.png"
import postgresLogo from "../assets/img/postgresql.svg"
import gitLogo from "../assets/img/git.svg"
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className='skill' id="skills">
    <Container>
      <Row>
        <Col>
        <div className='skill-bx'>
          <h2>
            Skills
          </h2>
          <p>
            Tech stacks that I have used
          </p>
          <Carousel responsive={responsive} infinite={true} className='skill-slider'>
            <div className='item'>
              <img src={meter1} alt="Image" />
               <h5>Web Development</h5>
            </div>
            <div className='item'>
              <img src={meter2} alt="Image" />
               <h5>Figma Design</h5>
            </div>
            <div className='item'>
              <img src={meter3} alt="Image" />
               <h5>Bootstrap</h5>
            </div>
            <div className='item'>
              <img src={meter3} alt="Image" />
               <h5>Logo Design</h5>
            </div>
          </Carousel>
        <div className='techs'>
          <div className='stacks'>
           <img src={htmlLogo} alt="html-logo"  />
           <img src={cssLogo} alt="css-logo"  />
           <img src={jsLogo} alt="js-logo"  />
           <img src={reactLogo} alt="react-logo"  />
           <img src={rubyLogo} alt="ruby-logo"  />
           <img src={jqueryLogo} alt="jquery-logo"  />
           <img src={bootLogo} alt="boot-logo"  />
           <img src={nodeLogo} alt="node-logo"  />
           {/* <img src={expressLogo} alt="express-logo" /> */}
           <img src={railsLogo} alt="rails-logo" />
           <img src={postgresLogo} alt="postgres-logo" />
           <img src={gitLogo} alt="git-logo" />
          </div>
        </div>
          </div>
        
        </Col>
      </Row>
    </Container>
    <img className='background-image-left' src={colorSharp} />
    </section>
  );
};
