import { useState, useEffect } from "react";

const DebounceSearch = () => {
  const [pincode, setPincode] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      console.log("Pincode entered:", pincode);

      if (pincode.length !== 6) {
        setResults([]);
        return;
      }

      setLoading(true);

      fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("API Response:", data);
          if (data[0].Status === "Success") {
            setResults(data[0].PostOffice || []);
          } else {
            setResults([]);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("API Error:", error);
          setLoading(false);
        });
    }, 2000);

    return () => clearTimeout(debounceTimeout);
  }, [pincode]);

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <input
        type="number"
        placeholder="Enter Pincode..."
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />

      {loading && <p style={{ color: "blue" }}>Loading...</p>}

      {results.length > 0 ? (
        <ul
          style={{
            listStyleType: "none",
            padding: "0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          {results.map((office, index) => (
            <li
              key={index}
              style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
            >
              {office.Name} - {office.District}, {office.State}
            </li>
          ))}
        </ul>
      ) : (
        pincode.length === 6 &&
        !loading && <p style={{ color: "red" }}>No results found</p>
      )}
    </div>
  );
};

export default DebounceSearch;
