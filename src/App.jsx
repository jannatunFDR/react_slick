import { Col, Container, Row } from "react-bootstrap"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Ban01 from "./assets/slide01.jpg"
import Ban02 from "./assets/slide02.jpg"
import Ban03 from "./assets/slide03.jpg"
import Ban04 from "./assets/slide04.jpg"
import Ban05 from "./assets/slide05.jpg"
import Ban06  from "./assets/slide06.jpg"
import "./App.css"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >Next</div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >Previous</div>
  );
}



function App() {
  var settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false ,
    // autoplay: true,
    // speed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
 

  return (
     <Container>
      <Row>
     <Slider {...settings}>
     <div className="slide">
     <img src={Ban01} alt="" />
     </div>
     <div className="slide">
     <img src={Ban02} alt="" />
     </div>
     <div className="slide">
     <img src={Ban03} alt="" />
     </div>
     <div className="slide">
     <img src={Ban04} alt="" />
     </div>
     <div className="slide">
     <img src={Ban05} alt="" />
     </div>
     <div className="slide">
     <img src={Ban06} alt="" />
     </div>
     </Slider>
     
      
      </Row>
     </Container>
  )
}

export default App
