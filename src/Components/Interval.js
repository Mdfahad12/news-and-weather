import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Interval = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://wallpapershome.com/images/pages/pic_h/23277.jpg)",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "0px",
      }}
    >
      <center>
      <h1 style={{ color:"white",fontFamily: 'Rubik Burned, cursive',}}>Welcome to my world</h1></center>
      <section className="row">
        <div className=" rounded float-left w-50 p-5">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://thumbs.dreamstime.com/b/d-world-news-background-digital-breaking-studio-report-live-208423108.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                {" "}
                <Link className="btn btn-sm btn-dark" to="/NewsApp">
                  News <span className="sr-only">(current)</span>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3114d994aa7f8527095704ba85e90f02.jpg"
                alt="First slide"
              />
              <br></br>
              <Carousel.Caption>
                <h5>How to Save Money by 'Churning'...</h5>
                <a
                  href="https://lifehacker.com/how-to-save-money-by-churning-your-streaming-services-1849402028"
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-sm btn-dark"
                >
                  Read more
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s.yimg.com/os/creatr-uploaded-images/2022-08/a5319000-1e27-11ed-bff6-d11eb84c9003"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h5>The Apple Watch Series 7 is...</h5>
                <a
                  href="https://www.engadget.com/the-apple-watch-series-7-is-on-sale-for-290-right-now-122930927.html"
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-sm btn-dark"
                >
                  Read more
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s.yimg.com/os/creatr-uploaded-images/2022-08/48cee580-1e02-11ed-9fef-c5a0f47825be"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h5>The Morning After...</h5>
                <a
                  href="https://www.engadget.com/the-morning-after-american-airlines-is-ordering-20-supersonic-jets-111327539.html"
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-sm btn-dark"
                >
                  Read more
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="rounded float-right w-50 p-5">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://c.tenor.com/PLqmB_SmXQMAAAAC/clouds-sky.gif"
                alt="weather"
              />
              <Carousel.Caption>
               
                <p>
                  {" "}
                  <Link className="btn btn-sm btn-dark" to="/TempApp">
                    Weather
                  </Link>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://c.tenor.com/reA9KS4hEqsAAAAd/dandelion-nature.gif"
                alt="Second slide"
              />

              <Carousel.Caption>
               
                <p>
                  {" "}
                  <Link className="btn btn-sm btn-dark" to="/TempApp">
                    Weather
                  </Link>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://64.media.tumblr.com/2d9e5bcec5c236ed8895ad643ad2cb59/tumblr_mvwtwxSnDW1sh5xm8o1_500.gifv"
                alt="Third slide"
              />

              <Carousel.Caption>
                
                <p>
                  <Link className="btn btn-sm btn-dark" to="/TempApp">
                    Weather
                  </Link>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        
      <div className="container d-flex justify-content-between">
      <Link className="btn btn-sm btn-dark" to="/LoginGoogle">
          &larr;Previous
                </Link>
      <Link className="btn btn-sm btn-dark" to="/NewsApp">
                Next &rarr;
                </Link></div>
      </section>
    </div>
  );
};

export default Interval;
