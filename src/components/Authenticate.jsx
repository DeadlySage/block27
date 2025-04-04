import { useState } from "react";

export default function Authenticate({ token, setToken }) {
  //store data
  const [successMessage, setsuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // api
  const URL = "https://fsa-jwt-practice.herokuapp.com";

  async function handleClick() {
    try {
      const response = await fetch(`${URL}/authenticate`, {
        method: "GET",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      setsuccessMessage(result.message);
      setData(result.data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="card py-3">
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      {data && <p><strong>Username:</strong> {data.username}</p>}

      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Authenticate Token
      </button>
    </div>
  );
}
