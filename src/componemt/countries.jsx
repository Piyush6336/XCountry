import { useEffect, useState } from "react";
import Card from "../card";
function Countries() {
  // const countries=[0,1,2,3,4,5];
  const [countries, setCountries] = useState([]);
  const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        console.log("hello", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("Fetched countries:", result);
        setCountries(result);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {countries.map(({ abbr, flag, name }) => (
        <Card key={abbr} name={name} flag={flag} />
      ))}
    </div>
  );
}
export default Countries;
