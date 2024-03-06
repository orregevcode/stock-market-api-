import "./App.css";
import Iphone from "./component/Iphone/Iphone";
import { useState, useEffect } from "react";

function App() {
  const [getData, setData] = useState([]);
  const symbols = ["AAPL", "AMZN", "GOOG", "MSFT"];

  const today = new Date();
  today.setDate(today.getDate() - 1); // Subtract 2 days

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const API_KEY = "6QXwmxGQtTFOKb2Q0t4eyYJjVN5C3osk";

  async function fetchData() {
    try {
      const promises = symbols.map(async (symbol) => {
        const URL = `https://api.polygon.io/v1/open-close/${symbol}/${formattedDate}?adjusted=true&apiKey=${API_KEY}`;
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(`Failed to fetch data for ${symbol}`);
        }
        return response.json();
      });

      const responseData = await Promise.all(promises);
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="App">
      <Iphone getData={getData} />
    </div>
  );
}

export default App;
