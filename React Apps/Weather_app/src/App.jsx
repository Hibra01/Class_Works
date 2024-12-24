import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [inp, setInp] = useState()
  const [locationData, setLocationData] = useState(null)

  function getData(city = "london") {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=7b1eaf6efd804a44b87101529222212&q=${city}&aqi=no`)
      .then(response => {
        setLocationData(response.data)
      })
      .catch(error => {
        console.log('Error fetching data: ', error)
      })
  }
  useEffect(() => {
    getData()
  }, [inp])
  return (
    <>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          getData(inp)
        }}>
          <input
            type="text"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <section>
        {locationData && locationData.location ? (
          <h1>{locationData.location.name}</h1>
        ) : (
          <div className="spinner-border text-danger" role="status"></div>
        )}
        {locationData && locationData.current.condition ? (
          <img src={locationData.current.condition.icon} alt="Weather Icon" />
        ) : (
          <div className="spinner-border text-danger" role="status"></div>
        )}
        {locationData && locationData.current.condition ? (
          <p>{locationData.current.condition.text}</p>
        ) : (
          <div className="spinner-border text-danger" role="status"></div>
        )}
        {locationData && locationData.location ? (
          <p>{locationData.location.country}</p>
        ) : (
          <div className="spinner-border text-danger" role="status"></div>
        )}



      </section>
    </>
  );
}

export default App;
