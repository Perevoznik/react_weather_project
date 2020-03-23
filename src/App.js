import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = '7368c9ab988b3636e5b0869c1aafdfe7';

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined
  }

  gettingWeather = async (event) => {

    event.preventDefault();

    let city = event.target.elements.city.value;

    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

    const data = await api_url.json();
    console.log(data);

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      sunrise: data.sys.sunrise
    });
  }


  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
        />
      </div>
    );
  }

}

export default App;
