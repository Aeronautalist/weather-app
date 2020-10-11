import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Input from "./Input";
import ChartCreator from "./ChartCreator";
import { connect } from "react-redux";
import { loadWeather } from "../redux/actions";

function App() {
  const [location, setLocation] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setLocation(inputValue);
  }

  function onChange(event) {
    const { name, value } = event.target;
    setInputValue(value);
  }

  return (
    <>
      <h2>Weather App</h2>
      <Input onSubmit={handleSubmit} onChange={onChange} />
      <ChartCreator location={location} />
    </>
  );
}

// const mapDispatchToProps = {
//   loadWeather,
// };

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapDispatchToProps)(App);
export default App;
