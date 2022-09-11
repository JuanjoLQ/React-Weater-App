import React from "react";

const WeatherForm = props => (
  <div className="container p-4">
    <form onSubmit={props.getWeather}>

      <label className="col-form-label row col-md-6 mx-auto w-25">
        <h2>City</h2>
      </label>

      <input type="text" name="city" className="form-control w-50 col-md-6 mx-auto" placeholder="City" autoFocus />
      

      <label className="col-form-label row col-md-6 mx-auto w-25">
        <h2>Country</h2>
      </label>

      <input type="text" name="country" className="form-control w-50 col-md-6 mx-auto mb-4" placeholder="Country" />
      

      <button className="btn btn-primary btn-lg d-flex justify-content-center mx-auto w-25">
        Find
      </button>

    </form>
  </div>
);

export default WeatherForm;
