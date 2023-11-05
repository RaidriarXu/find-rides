import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript
import Header from "./header";
import AllRides, { ridesData } from "./all_rides";
import "./inputTable.css";
function InputTable() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropOffLocation, setDropoffLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [filteredRides, setFilteredRides] = useState([]);

  function handleFormSubmit() {
    // Filter the data based on form input values
    const filteredData = ridesData.filter((ride) => {
      return (
        (ride.pickupLocation === pickupLocation || pickupLocation === "") &&
        (ride.dropOffLocation === dropOffLocation || dropOffLocation === "") &&
        (ride.date === date || date === "") &&
        (ride.time === time || time === "")
      );
    });
    console.log(filteredData);
    setFilteredRides(filteredData);
    console.log(filteredRides);
  }
  // function handleChange(e) {
  //   console.log(e.target);
  //   if (e.target.id === "data") {

  //   } else if (e.target.id === )
  // }

  return (
    <div>
      <Header />
      <div className="container mt-5 main_page_content">
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="pickupLocation">Pickup Location</label>
              <input
                type="text"
                className="form-control"
                id="pickupLocation"
                placeholder="Enter pickup location"
                onChange={(e) => setPickupLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="dropOffLocation">Drop-off Location</label>
              <input
                type="text"
                className="form-control"
                id="dropoffLocation"
                placeholder="Enter drop-off location"
                onChange={(e) => setDropoffLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="time">Pick up time</label>
              <input
                type="time"
                className="form-control"
                id="time"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleFormSubmit}
        >
          Search
        </button>
      </div>
      <AllRides filteredData={filteredRides} />{" "}
      {/* Pass Filtered Data to "AllRides" */}
    </div>
  );
}

export default InputTable;
