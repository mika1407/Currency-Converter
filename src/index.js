import React, {useEffect, useState} from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import "./App.css";


const CurrencyConverter = () => {
  const [uSDAUD, setUSDAUD] = useState("");
  const [first, setFirst] = useState("EUR");
  const [second, setSecond] = useState("USD");
  const [rate, setRate] = useState([]);


  const getRate = (first, second) => {
    axios({
      method: "GET",
      url:
      `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=8ff18dd74666aa1f262c`,
    })
    .then((response) => {
      console.log(response.data)
      setRate(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  };

  return (
      <div >
      <div className="otsikko">
        Currency Converter
      </div>
      <div className="alapalkki"></div>
      <br />
    <div style={{ marginLeft: "33%"}}>
      <div className="nakyma">
          1 {first} = {rate[`${first}_${second}`]} {second}
      </div>
      <br />
      <input className="input1"  type="text" value={first} onChange={(e) => setFirst(e.target.value)} />
      <input className="input1"  type="text" value={second} onChange={(e) => setSecond(e.target.value)}/>
      <button className="button"  onClick={() => {
        getRate(first, second);
      }}>Convert</button>
      <br/>
      <p style={{ color: "#333", fontWeight: "bold", fontSize: "25px" }}>Currencys:</p>
      <ol style={{ color: "#333", fontSize: "20px" }}>  
        <li>USD = US dollar</li>
        <li>EUR = Euro</li>
        <li>AUD = Australian dollar</li>
        <li>CNY = Chinese Yuan</li>
        <li>CHF = Swiss Franc</li>
        <li>JPY = Japanese Yen</li>
      </ol>
      <br/>
    </div>
    </div>
  )
}

render(<CurrencyConverter />, document.querySelector("#root"));

