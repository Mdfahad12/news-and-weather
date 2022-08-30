import React, { useEffect, useState } from "react";
import{Link}from 'react-router-dom'
const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, SetSearch] = useState();
  const [image, setImage] = useState();
  const [cloud, setcloud] = useState("");

  const changeImage = () => {
    if (cloud === "Clouds") {
      setImage("https://c.tenor.com/PLqmB_SmXQMAAAAC/clouds-sky.gif");
      console.log("if");
    } else if (cloud === "Haze") {
      setImage(
        "https://64.media.tumblr.com/7d192f396d124174337af3ee979af715/tumblr_pmd6e6Ol7y1runoqyo3_r1_540.gifv"
      );
      console.log("else");
    } else if (cloud === "Rain") {
      setImage(
        "https://64.media.tumblr.com/2d9e5bcec5c236ed8895ad643ad2cb59/tumblr_mvwtwxSnDW1sh5xm8o1_500.gifv"
      );
    } else if (cloud === "Mist") {
      setImage("https://c.tenor.com/trsORypbFIgAAAAd/mountain-mist.gif");
    } else if (cloud === "Drizzle") {
      setImage(
        "https://www.icegif.com/wp-content/uploads/2021/11/icegif-692.gif"
      );
    } else if (cloud === "Clear") {
      setImage("https://c.tenor.com/reA9KS4hEqsAAAAd/dandelion-nature.gif");
    } else {
      setImage();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    changeImage();
  };
  useEffect(() => {
    const fetchApi = async () => {
      const url = ` https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f180e3bc6ef7cdd291b996f100d1397e`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      setcloud(resJson.weather[0].main);
      console.log(cloud);
    };
    fetchApi();
  }, [search, cloud]);
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://images.hdqwalls.com/wallpapers/catch-the-rain-4k-zv.jpg)",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "0px",
          }}
      >
          <div className="form-outline">
            <center>
          <h1 className="text-center" style={{ color: "White" ,fontFamily: 'Rubik Burned, cursive'}}>
            Weather App
          </h1>
            <input
              className=" outline-success my-2 my-sm-0 "
              style={{opacity:"0.4",color:"black" ,width:"20%"}}
              type="select"
              placeholder="cityname"
              value={search}
              onChange={(event) => {
                SetSearch(event.target.value);
              }}
            />
            <button
              className="btn btn-outline-dark my-1 my-sm-0"
              onClick={onSubmit}
            >
              Submit
            </button></center>
          </div>
          {/* <br /> */}
        <section className="vh-100" style={{ backgroundColor: " #f5f6f7;" }}>
          {!city ? (
            <div>
              <center>
              <img  style={{width:'20%' ,height:"25%"}}src="https://images-na.ssl-images-amazon.com/images/I/61Gs4BDT8xL.jpg" alt=''/>
           </center> </div> 
          ) : (
            <div className="container w-60 py-7 h-50">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-10 col-lg-8 col-xl-6">
                  <div
                    className="card bg-dark text-white"
                    style={{ borderRadius: "40px;" }}
                  >
                    <div className="bg-image" style={{ borderRadius: "35px;" }}>
                      <img className="card-img" src={image} alt="weather" />
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(190, 216, 232, .5);" }}
                      ></div>
                    </div>
                    <div className="card-img-overlay text-white p-4">
                      <h4 className="mb-0">{search}</h4>
                      <p className="display-2 my-3">{city.temp}°C</p>
                      <p className="mb-2">
                        min:{city.temp_min}°C | max: {city.temp_max}°C
                      </p>
                      <p className="mb-1">{city.humidity}%</p>
                      <p className="mb-1">{city.pressure}mbar</p>
                      <p className="mb-1">feels_like:{city.feels_like}°C</p>
                      <p className="mb-1">weather:{cloud}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}{" "}
        </section>
          <div>
          <Link className="btn btn-sm btn-dark" to="/NewsApp">
          &larr;Previous
                </Link>
          </div>
      </div>
    </div>
  );
};
export default TempApp;
