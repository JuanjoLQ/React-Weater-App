import React from "react";

const WeatherInfo = (props) => {
  
  return (
    <div>
      {props.error && (
        <div className="alert alert-danger">
          <p>{props.error}</p>
        </div>
      )}
      {props.temperature ? (
        <div className="card card-body mt-2 animated fadeInUp text-center">
          {props.city && props.country && (
            <p>
              <i class="fa-solid fa-house"></i> Location: {props.city},{" "}
              {props.country}
            </p>
          )}
          {props.temperature && (
            <p>
              <i class="fa-solid fa-temperature-full"></i> Temperature:{" "}
              {props.temperature} ℃, {props.description}
            </p>
          )}
          {props.humidity && (
            <p>
              Humidity: {props.humidity}
            </p>
          )}
          {props.wind_speed && (
            <p>
              <i class="fa-solid fa-wind"></i> Wind Speed: {props.wind_speed}
            </p>
          )}
        </div>
      ) : (
        <div className="card card-body mt-2 text-center">
          <i className="fa-solid fa-cloud fa-10x"></i>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
